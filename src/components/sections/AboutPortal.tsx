"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import {
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useMotionStyles } from "@/lib/use-motion-styles";
import { PETALS } from "@/lib/data/petals";

/*
 * ABOUT US - "The Portal", carried over from the /proto/portal concept.
 *
 * The heading is drawn twice, in one SVG, in perfect register:
 *   1. as BLACK text inside an SVG <mask>, over a WHITE full-stage rect.
 *      Black in a luminance mask = hidden, so every letterform punches a
 *      HOLE through the surface-coloured sheet covering the photograph.
 *   2. as INK text painted on top, filling those holes exactly.
 *
 * At rest the two cancel and it reads as an ordinary ink heading on the
 * page. Then, in order:
 *
 *   ink dissolves   you are suddenly looking THROUGH the letterforms at
 *                   the brand's own colour field
 *   the zoom        both layers scale about the viewport centre together,
 *                   up to 44x, until the letters have swallowed the screen
 *   the sheet goes  and the field is all there is
 *   the field recedes behind a surface scrim, and the three sentences rise
 *                   out of it, one per discipline colour
 *
 * WHY A COLOUR FIELD AND NOT A PHOTOGRAPH. This was first built falling
 * into a ballroom photograph (media/hall.png, since deleted - it had no
 * other use). Two problems, one fatal. The soft one: a generic stock
 * ballroom says nothing this agency specifically does. The fatal one: it
 * was 811x517, so full-bleed on a 1440px stage it was already being
 * upscaled about 1.8x before the portal magnified anything.
 * The field below is pure CSS, so it is resolution-independent - it stays
 * exactly as clean at 44x as at rest - it is built from the five petal
 * colours of the mark, and it costs no bytes. Falling through the words
 * into the brand's own spectrum is also simply a better idea than falling
 * into a photograph of someone else's venue.
 *
 * WHY SVG AND NOT background-clip:text - the holes have to mask the field
 * while the SAME glyphs are painted on top in ink at identical geometry.
 * Two DOM elements with clamp() sizes drift by a pixel or two under
 * sub-pixel rounding, which shows as a coloured fringe at rest. One SVG,
 * one font-size, one transform: they cannot drift.
 *
 * WHY THE FONT SIZE IS MEASURED, NOT GUESSED - see the probe below.
 * PLAN.md section 3.5 records hand-estimating a headline width being wrong
 * by a wide margin.
 *
 * WHY THE SCRIM EXISTS. The copy cannot sit on the bare field. Every ink
 * and mark token was solved against --color-surface, not against five
 * saturated primaries, and the hero already had to clear its flood wash
 * for exactly this reason (see the floodOpacity note in HeroSequence.tsx).
 * So the field is the TRANSITION material: full strength while you fall
 * into it, then dropped behind surface at 92% before a single word
 * arrives. Even the ghost that survives that is not free - it is what
 * pushed the accent rules off -mark and onto -ink; see STRATA below.
 *
 * REDUCED MOTION / NO JS are handled in CSS and never by returning a
 * different tree - useReducedMotion() is false during SSR, so branching
 * on it renders one structure on the server and another on the client
 * (a real hydration mismatch, see HeroSequence.tsx). In both degraded
 * modes the portal machinery is hidden outright and the copy layer -
 * which holds the real <h2> and all three sentences - is shown flowed.
 * .pin-stage / .pin-layer / .pin-portal do that work; see globals.css
 * and the noscript block in layout.tsx.
 */

const HEADING = "About Us";

/*
 * How far the masking sheet bleeds past the stage on each side, as a
 * fraction. Insurance against preserveAspectRatio letterboxing - the long
 * note beside the sheet explains what that looked like when it happened.
 *
 * THE NUMBER IS A PERFORMANCE FIGURE, not a taste one. This started at a
 * full 3x (one whole stage of margin on every side), which is 9x the AREA
 * of a luminance mask that the browser re-rasterizes on every frame the
 * zoom transform changes. At a 1440x788 stage that is a ~10 megapixel
 * offscreen buffer per frame, and it measured exactly as you would expect:
 * scrolling into this section ran 26-35ms per frame (about 30fps) from
 * p=0.0 to p=0.5, then snapped back to a clean 17ms at p>=0.6 - which is
 * precisely where sheetOpacity fades the sheet out and the mask stops
 * being painted at all. The zoom was never the expensive part.
 *
 * 8% keeps the same guarantee for any plausible sub-pixel or mid-
 * transition mismatch while cutting the rasterized area by about 6.7x.
 * Raising it back toward 1.0 will bring the stutter back; if a real
 * letterboxing gap ever reappears, fix the viewBox measurement rather
 * than widening this.
 */
const BLEED = 0.08;
const BLEED_SPAN = 1 + BLEED * 2;

/*
 * The client's About copy, verbatim. Three sentences that happen to be
 * three parallel statements - who we are, what we do, how we do it -
 * which is why they get parallel treatment rather than one prose block.
 * Each takes a discipline colour from the mark.
 *
 * USES -ink, NOT -mark, AND THAT IS MEASURED. -mark is the token solved
 * to 3:1 for exactly this job, but it is solved against the BARE surface,
 * and these rules do not sit on the bare surface - they sit on surface
 * blended with what is left of the colour field. Measured on the real
 * composite, all three came in at 2.67-2.77:1 against a 3:1 requirement;
 * on bare surface the same teal is 3.14:1, so the ghost alone costs about
 * 0.4 and there was never any headroom to lose. -ink is solved to 4.5:1,
 * which leaves enough slack to survive the composite in both themes.
 * This is the same failure mode as the hero's flood wash - see the
 * floodOpacity note in HeroSequence.tsx.
 */
const STRATA = [
  {
    key: "who",
    rule: "bg-corporate-ink",
    text: "Assertive Brand Communications is an event management company dedicated to crafting unforgettable experiences that elevate brands and engage audiences.",
  },
  {
    key: "what",
    rule: "bg-activation-ink",
    text: "From corporate conferences to product launches, gala dinners to experiential marketing activations, we specialize in conceptualizing, planning, and executing events that leave a lasting impact.",
  },
  {
    key: "how",
    rule: "bg-live-ink",
    text: "With a focus on creativity, precision, and client satisfaction, we blend innovation with meticulous attention to detail to deliver seamless and memorable events tailored to each client’s unique objectives and vision.",
  },
];

/*
 * What lies behind the letters: the mark's own colour rotation.
 *
 * PETALS is ordered clockwise from twelve o'clock (see petals.ts - that
 * order is measured off the artwork, not alphabetical), so sweeping those
 * same five colours through a conic gradient reproduces the pinwheel's
 * actual rotation as light. The faint spokes where the stops meet are the
 * point, not an artefact.
 *
 * Uses `authored` - the raw artwork hex - rather than `color`, which is a
 * theme-aware token that gets lightness-corrected for the bone page.
 * Correction is right for a petal that has to hold 3:1 as a small shape on
 * the surface; here the colours ARE the surface, at full stage size, and
 * they want to be the vivid artwork values in both themes.
 *
 * An earlier version placed five separate radial blobs around the edges.
 * It failed for a specific reason worth keeping: the blobs left the
 * CENTRE - which is exactly where the letterforms are - falling back to
 * the dark base, so the holes read as near-black smudges with a bit of
 * colour at the extremes. A conic sweep has no gap to fall into.
 *
 * TWO DELIBERATE MOVES, both learned by looking at it full-screen:
 *
 * 1. The conic origin sits BELOW the stage (50% 112%). With it inside the
 *    frame you see the singularity where all five stops converge, and the
 *    whole thing stops being a brand field and starts being a colour
 *    picker. Pushed off the bottom edge, what is left is a fan of colour
 *    rising from the floor - which, for an events agency, happens to look
 *    exactly like uplighting.
 * 2. The stops are therefore SQUEEZED into the arc the WORD actually
 *    subtends from that origin, not spread evenly around all 360deg.
 *    Measured rather than guessed: with the origin below the stage, the
 *    heading's left and right edges sit at about -42deg and +42deg, so
 *    SPREAD is 88deg and the five stops land 22deg apart. Two earlier
 *    passes had them 72deg and then 52.5deg apart, and both times the
 *    teal and the purple pointed off-screen entirely - the field came out
 *    as a red-and-green wash with two fifths of the palette missing. At
 *    22deg the whole mark lights the whole word, left to right.
 *
 * WRAP is not decoration. A conic gradient holds its last colour from the
 * final stop all the way round to 360deg and then jumps straight back to
 * the first, which puts a hard-edged seam at the `from` angle - and at
 * -44deg that seam falls inside the visible stage as a visible crease.
 * Repeating the first colour at 360deg turns that jump into a long, slow
 * interpolation across the off-word region instead.
 *
 * The scrim (listed first, so it paints on top) keeps this at roughly a
 * third strength. At full saturation five primaries across an entire
 * viewport is garish beside the restraint of every other section; damped,
 * it reads as deep jewel tones that are still unmistakably ours.
 */
const SPREAD = 88;
const FIELD = [
  "radial-gradient(100% 90% at 50% 55%, oklch(10% 0.02 275 / 0.18) 0%, oklch(8% 0.02 275 / 0.62) 100%)",
  `conic-gradient(from ${-SPREAD / 2}deg at 50% 112%, ${PETALS.map(
    (x, i) => `${x.authored} ${((i * SPREAD) / (PETALS.length - 1)).toFixed(1)}deg`,
  ).join(", ")}, ${PETALS[0].authored} 360deg)`,
].join(", ");

export function AboutPortal() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  // ---- stage geometry -------------------------------------------------
  // MEASURED FROM THE STAGE, NOT FROM THE WINDOW. The stage is
  // 100svh - --header-h tall, so window.innerHeight overstates it by the
  // header. Feeding that into the viewBox gives the SVG a taller aspect
  // ratio than the element it renders into, and preserveAspectRatio's
  // default (xMidYMid meet) then letterboxes: the sheet is scaled down to
  // fit by height and centred, leaving a bare vertical strip of the
  // photograph down BOTH edges of the stage at all times. It looks like a
  // deliberate border until you resize the window and watch it change.
  // Observing the element itself is also self-correcting - it picks up
  // Header's own height animation for free, with no second source of
  // truth to drift.
  //
  // Initialised to a constant so the server and the first client render
  // agree; real numbers land after hydration.
  const stageRef = useRef<HTMLDivElement>(null);
  const [vp, setVp] = useState({ w: 1440, h: 788 });
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (width > 0 && height > 0) setVp({ w: width, h: height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const cx = vp.w / 2;
  const cy = vp.h / 2;

  // ---- measured type size ---------------------------------------------
  // A hidden probe glyph run at a known size gives the real advance width
  // of this exact string in this exact font, so the heading fills the
  // stage at any viewport without a single magic number.
  const probeRef = useRef<SVGTextElement>(null);
  const [unitWidth, setUnitWidth] = useState<number | null>(null);
  useEffect(() => {
    const measure = () => {
      if (!probeRef.current) return;
      const w = probeRef.current.getBBox().width;
      if (w > 0) setUnitWidth(w / 100);
    };
    measure();
    // Webfonts land after first paint; remeasure once they do.
    document.fonts?.ready.then(measure);
  }, [vp.w]);

  const gutter = vp.w < 640 ? 20 : 48;
  const fontSize = unitWidth
    ? Math.max(40, Math.min(260, (vp.w - gutter * 2) / unitWidth))
    : Math.max(40, Math.min(260, vp.w * 0.17));

  // ---- scroll choreography --------------------------------------------
  const cueOpacity = useTransform(p, [0, 0.1], [1, 0]);
  const inkOpacity = useTransform(p, [0.12, 0.26], [1, 0]);
  // Exponential stops. A linear 1 -> 44 ramp reads as "nothing, nothing,
  // nothing, WHOOSH"; these keep the apparent rate of approach steady.
  const scale = useTransform(
    p,
    [0.24, 0.38, 0.5, 0.62, 0.74],
    [1, 2.4, 6.5, 17, 44],
  );
  const sheetOpacity = useTransform(p, [0.6, 0.7], [1, 0]);
  // The field drifts and turns very slightly against the zoom. Without it
  // the colour behind the letters is completely static and the holes read
  // as flat swatches rather than as a window onto something.
  const fieldScale = useTransform(p, [0, 0.86], [1.18, 1]);
  const fieldSpin = useTransform(p, [0, 0.86], [-8, 4]);
  const fieldTransform = useMotionTemplate`scale(${fieldScale}) rotate(${fieldSpin}deg)`;
  // 0.70 -> 0.76 is deliberately empty: the sheet has gone and the scrim
  // has not started, so there is one clear beat of standing in the room
  // before the section starts talking.
  const scrimOpacity = useTransform(p, [0.76, 0.86], [0, 0.92]);

  const maskG = useRef<SVGGElement>(null);
  const inkG = useRef<SVGGElement>(null);
  // Both groups take the SAME transform string, so the holes and the ink
  // fill cannot separate. Written as an attribute rather than a style
  // transform so there is no transform-box / transform-origin question on
  // an SVG group - the origin is explicit in the matrix.
  const identity = `translate(${cx} ${cy}) scale(1) translate(${-cx} ${-cy})`;
  useMotionValueEvent(scale, "change", (s) => {
    const t = `translate(${cx} ${cy}) scale(${s}) translate(${-cx} ${-cy})`;
    maskG.current?.setAttribute("transform", t);
    inkG.current?.setAttribute("transform", t);
  });

  const cueRef = useRef<HTMLDivElement>(null);
  const inkLayerRef = useRef<SVGGElement>(null);
  const sheetRef = useRef<SVGRectElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);

  useMotionStyles(cueRef, { opacity: cueOpacity });
  useMotionStyles(inkLayerRef, { opacity: inkOpacity });
  useMotionStyles(sheetRef, { opacity: sheetOpacity });
  useMotionStyles(fieldRef, { transform: fieldTransform });
  useMotionStyles(scrimRef, { opacity: scrimOpacity });

  const textProps = {
    textAnchor: "middle" as const,
    x: cx,
    y: cy,
    dominantBaseline: "middle" as const,
    fontSize,
    letterSpacing: "-0.04em",
    style: { fontFamily: "var(--font-display)", fontWeight: 800 },
  };

  return (
    // #about IS THE NAV TARGET for "About Us" in the header and the footer,
    // so treat this id as public API - the same footing #enquiry and
    // #trusted-by are on.
    //
    // It anchors the TOP of the portal, deliberately, not the three
    // paragraphs at the end of the timeline. Those paragraphs live in a
    // layer that is absolutely positioned inside the sticky stage, so they
    // have no scroll position of their own to aim at - and jumping past the
    // portal would skip the whole sequence and leave the reader above it,
    // able only to scroll backwards through a zoom playing in reverse.
    // Landing here puts "About Us" and "Scroll to step inside" on screen,
    // which is a legible arrival and keeps the section in the order it was
    // built to be read.
    //
    // Safe to sit on this element: nothing here is inside a Reveal, so no
    // transform shifts the box the browser scrolls to. See TrustBar.tsx.
    <div
      id="about"
      ref={wrapRef}
      className="pin-wrap relative h-[360svh] scroll-mt-[var(--header-h)] motion-reduce:h-auto"
    >
      <div ref={stageRef} className="pin-stage">
        {/* ---- the field you fall into ----
            Oversized by 18% on every side because it ROTATES. A rotated
            rectangle no longer covers the axis-aligned box it started in,
            and at the end of the timeline its scale is back to 1 - so
            inset-0 left a bare wedge of page showing at two corners.
            Bleeding it past the stage costs nothing, since .pin-stage
            clips. */}
        {/* will-change earns its keep here, which is not true of most
            places it gets sprinkled. This div is the one moving part in
            the portal the compositor can actually take over: it is an HTML
            element carrying a CSS transform, so promoting it means the
            conic gradient is rasterized once and then scaled and rotated
            on the GPU, instead of the gradient being re-evaluated across a
            1.36x-viewport box on every frame. The mask beside it cannot be
            promoted the same way - its zoom lives on inner SVG <g>
            transform attributes, which are not compositable at all, which
            is why BLEED had to shrink instead. */}
        <div
          ref={fieldRef}
          aria-hidden="true"
          className="pin-portal absolute -inset-[18%] will-change-transform motion-reduce:hidden"
          style={{ background: FIELD }}
        />

        {/* Drops the field to a ghost before any copy arrives. */}
        <div
          ref={scrimRef}
          aria-hidden="true"
          className="pin-portal absolute inset-0 bg-surface motion-reduce:hidden"
          style={{ opacity: 0 }}
        />

        {/* ---- the sheet, the holes and the ink ---- */}
        <svg
          className="pin-portal absolute inset-0 h-full w-full motion-reduce:hidden"
          viewBox={`0 0 ${vp.w} ${vp.h}`}
          aria-hidden="true"
        >
          <defs>
            <mask
              id="about-portal-mask"
              maskUnits="userSpaceOnUse"
              x={-vp.w * BLEED}
              y={-vp.h * BLEED}
              width={vp.w * BLEED_SPAN}
              height={vp.h * BLEED_SPAN}
            >
              <rect
                x={-vp.w * BLEED}
                y={-vp.h * BLEED}
                width={vp.w * BLEED_SPAN}
                height={vp.h * BLEED_SPAN}
                fill="#fff"
              />
              <g ref={maskG} transform={identity}>
                <text {...textProps} fill="#000">
                  {HEADING}
                </text>
              </g>
            </mask>
          </defs>

          {/* probe: never painted, only measured */}
          <text
            ref={probeRef}
            x={-9999}
            y={-9999}
            fontSize={100}
            letterSpacing="-0.04em"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            fill="none"
          >
            {HEADING}
          </text>

          {/* Sheet and mask both bleed past the stage by BLEED on every
              side. The measured viewBox above should already match the
              element exactly, but if it is ever off by even a fraction - a
              sub-pixel svh, a --header-h mid-transition, a zoom level -
              preserveAspectRatio's default (xMidYMid meet) letterboxes,
              and a sheet sized to the viewBox leaves a bare strip of the
              field down both edges. That is not hypothetical: it shipped
              that way for one build and read as a deliberate border.
              Nothing outside the stage is visible anyway - .pin-stage
              clips it - so the bleed is free at paint time. See BLEED for
              why it is 8% and not the 3x it started at. */}
          <rect
            ref={sheetRef}
            x={-vp.w * BLEED}
            y={-vp.h * BLEED}
            width={vp.w * BLEED_SPAN}
            height={vp.h * BLEED_SPAN}
            fill="var(--color-surface)"
            mask="url(#about-portal-mask)"
          />

          <g ref={inkLayerRef}>
            <g ref={inkG} transform={identity}>
              <text {...textProps} fill="var(--color-ink)">
                {HEADING}
              </text>
            </g>
          </g>
        </svg>

        <div
          ref={cueRef}
          aria-hidden="true"
          className="pin-portal pointer-events-none absolute inset-x-0 bottom-[max(40px,7vh)] flex justify-center motion-reduce:hidden"
        >
          <span className="text-eyebrow uppercase text-ink-muted">
            Scroll to step inside
          </span>
        </div>

        {/* ---- what the portal opens onto ---- */}
        <div className="pin-layer pointer-events-none absolute inset-0 flex items-center motion-reduce:static motion-reduce:py-[clamp(64px,8vw,128px)]">
          <div className="pointer-events-auto mx-auto w-full max-w-[1440px] px-6 lg:px-10">
            <Stratum p={p} at={[0.82, 0.88]}>
              {/* The real heading. Small on purpose: the portal has just
                  spent 44x of scale on these two words, so repeating them
                  at display size would read as the duplication bug the
                  hero was built to avoid. */}
              <h2 className="text-eyebrow uppercase text-ink-muted">
                {HEADING}
              </h2>
            </Stratum>

            <div className="mt-8 grid gap-x-8 gap-y-10 md:grid-cols-3 md:gap-x-10">
              {STRATA.map((s, i) => (
                <Stratum key={s.key} p={p} at={[0.85 + i * 0.03, 0.91 + i * 0.03]}>
                  <span
                    aria-hidden="true"
                    className={`block h-1 w-14 rounded-full ${s.rule}`}
                  />
                  <p className="text-body-lg mt-5 text-ink-body">{s.text}</p>
                </Stratum>
              ))}
            </div>

            {/* The three strata ARE the About section - there is no
                deeper page to send anyone to. A "Know More About Us"
                link used to close this block; it pointed at /about,
                which has never existed, so it was an invitation to a
                404 sitting under the copy that already says the whole
                thing. The last stratum lands at p=0.97, which leaves a
                short beat of held stillness at the end of the timeline
                where the link used to be. */}
          </div>
        </div>
      </div>
    </div>
  );
}

/*
 * One strand of the closing copy, faded and lifted into place on its own
 * slice of the timeline.
 *
 * The motion-reduce:! utilities are load-bearing, not decorative. An
 * important declaration in a stylesheet outranks a non-important inline
 * style, and useMotionStyles writes non-important inline styles - so
 * under reduced motion these pin the strand to fully visible and beat
 * anything the scroll timeline tries to write. Without them the copy
 * would sit at its p=0 value, opacity 0, permanently invisible.
 */
function Stratum({
  p,
  at,
  children,
}: {
  p: MotionValue<number>;
  at: [number, number];
  children: React.ReactNode;
}) {
  const opacity = useTransform(p, at, [0, 1]);
  const lift = useTransform(p, at, [22, 0]);
  const transform = useMotionTemplate`translateY(${lift}px)`;
  const ref = useRef<HTMLDivElement>(null);
  useMotionStyles(ref as RefObject<HTMLElement>, { opacity, transform });

  return (
    <div
      ref={ref}
      className="motion-reduce:!opacity-100 motion-reduce:!transform-none"
      style={{ opacity: 0 }}
    >
      {children}
    </div>
  );
}
