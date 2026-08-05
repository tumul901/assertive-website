"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { WORK } from "@/lib/data/work";

/*
 * CONCEPT A - "The Portal"
 *
 * The headline is drawn twice, in one SVG, in perfect register:
 *   1. as BLACK text inside an SVG <mask>, over a WHITE full-stage rect.
 *      Black in a luminance mask = hidden, so every letterform punches a
 *      HOLE through the bone-coloured sheet that covers the photograph.
 *   2. as INK text painted on top, filling those holes exactly.
 *
 * At rest the two cancel out and it reads as an ordinary ink headline on
 * a bone page. As you scroll, (2) fades away - so you are suddenly
 * looking at the venue THROUGH the letters - and both layers scale about
 * the viewport centre together, up to ~46x. The letters swallow the
 * screen, the sheet is gone, and you have fallen through the word into
 * the work.
 *
 * WHY SVG AND NOT background-clip:text - the letterform holes have to be
 * a mask over a photograph, and the same glyphs have to be paintable on
 * top in ink at identical geometry. Two DOM elements with clamp() font
 * sizes drift apart by a pixel or two under sub-pixel rounding, which is
 * visible as a coloured fringe at rest. One SVG, one font-size, one
 * transform: they cannot drift.
 *
 * WHY THE FONT SIZE IS MEASURED, NOT GUESSED - see the probe text below.
 * PLAN.md section 3.5 records that hand-estimating this headline's width
 * was wrong by a wide margin last time.
 */

const LINE_1 = "From Concept to Celebration:";
const LINE_2 = "Unforgettable Experiences";

// Warm -> cool through the five logo hues, as the portal opens.
const HUE_STOPS = [26, 79, 146, 220, 314];

export function PortalHero() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  // ---- stage geometry -------------------------------------------------
  const [vp, setVp] = useState({ w: 1440, h: 860 });
  useEffect(() => {
    const read = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    read();
    window.addEventListener("resize", read);
    return () => window.removeEventListener("resize", read);
  }, []);

  const cx = vp.w / 2;
  const cy = vp.h / 2;
  const narrow = vp.w < 760;
  const lines = narrow ? ["Unforgettable", "Experiences"] : [LINE_2];

  // ---- measured type size --------------------------------------------
  // A hidden probe glyph run at a known size gives the real advance width
  // of this exact string in this exact font. Everything else is derived
  // from it, so the headline fills the stage at any viewport without a
  // single magic number.
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
  }, [vp.w, narrow]);

  const gutter = vp.w < 640 ? 20 : 48;
  const fontSize = unitWidth
    ? Math.max(26, Math.min(132, (vp.w - gutter * 2) / unitWidth))
    : Math.max(26, Math.min(132, vp.w * 0.062));
  const lineHeight = fontSize * 1.02;

  // ---- scroll choreography -------------------------------------------
  // Supporting UI clears first, then the ink fill dissolves, then the zoom
  // runs long. Scale stops are exponential: a linear 1 -> 46 ramp reads as
  // "nothing, nothing, nothing, WHOOSH".
  const uiOpacity = useTransform(p, [0, 0.08, 0.19], [1, 1, 0]);
  const uiY = useTransform(p, [0, 0.19], [0, -48]);
  const line1Opacity = useTransform(p, [0, 0.1, 0.22], [1, 1, 0]);
  const line1Y = useTransform(p, [0, 0.22], [0, -70]);
  const inkOpacity = useTransform(p, [0.17, 0.31], [1, 0]);
  const scale = useTransform(
    p,
    [0.22, 0.4, 0.56, 0.7, 0.84],
    [1, 2.6, 7, 18, 48],
  );
  const sheetOpacity = useTransform(p, [0.74, 0.87], [1, 0]);
  const bgScale = useTransform(p, [0, 0.84], [1.18, 1]);
  const bgOpacity = useTransform(p, [0, 0.22, 0.92, 1], [1, 1, 1, 0.25]);
  const gridOpacity = useTransform(p, [0.84, 0.95], [0, 1]);
  const gridY = useTransform(p, [0.84, 1], [70, 0]);
  const cueOpacity = useTransform(p, [0, 0.06], [1, 0]);
  const railScale = useTransform(p, [0, 1], [0, 1]);

  // ---- imperative attribute writes ------------------------------------
  // Both <g> elements take the SAME transform string so the mask holes and
  // the ink fill cannot separate. Written as an attribute rather than a
  // style transform so there is no transform-box / transform-origin
  // support question on SVG groups - the origin is explicit in the matrix.
  const maskG = useRef<SVGGElement>(null);
  const inkG = useRef<SVGGElement>(null);
  const identity = `translate(${cx} ${cy}) scale(1) translate(${-cx} ${-cy})`;
  useMotionValueEvent(scale, "change", (s) => {
    const t = `translate(${cx} ${cy}) scale(${s}) translate(${-cx} ${-cy})`;
    maskG.current?.setAttribute("transform", t);
    inkG.current?.setAttribute("transform", t);
  });

  const hueIndex = useTransform(p, [0, 0.25, 0.5, 0.75, 1], HUE_STOPS);
  useMotionValueEvent(hueIndex, "change", (h) => {
    document.documentElement.style.setProperty("--brand-hue", String(h));
  });

  // ---- reduced motion: no pin, no zoom, just the hero -----------------
  if (reduce) {
    return <StaticFallback fontSize={fontSize} />;
  }

  const baselineY = cy - ((lines.length - 1) * lineHeight) / 2;
  const textProps = {
    textAnchor: "middle" as const,
    x: cx,
    fontSize,
    letterSpacing: "-0.035em",
    style: { fontFamily: "var(--font-display)", fontWeight: 800 },
  };

  return (
    <div ref={wrapRef} className="relative h-[340svh]">
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        {/* ---- the photograph you fall into ---- */}
        <motion.div
          className="absolute inset-0"
          style={{ scale: bgScale, opacity: bgOpacity }}
        >
          <Image
            src="/media/venue-bokeh.png"
            alt=""
            fill
            preload={true}
            quality={82}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* ---- the sheet, the holes, and the ink ---- */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox={`0 0 ${vp.w} ${vp.h}`}
          aria-hidden="true"
        >
          <defs>
            <mask
              id="portal-mask"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width={vp.w}
              height={vp.h}
            >
              <rect x="0" y="0" width={vp.w} height={vp.h} fill="#fff" />
              <g ref={maskG} transform={identity}>
                {lines.map((line, i) => (
                  <text
                    key={line}
                    {...textProps}
                    y={baselineY + i * lineHeight}
                    dominantBaseline="middle"
                    fill="#000"
                  >
                    {line}
                  </text>
                ))}
              </g>
            </mask>
          </defs>

          {/* probe: never painted, only measured */}
          <text
            ref={probeRef}
            x={-9999}
            y={-9999}
            fontSize={100}
            letterSpacing="-0.035em"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            fill="none"
          >
            {narrow ? "Unforgettable" : LINE_2}
          </text>

          <motion.rect
            x="0"
            y="0"
            width={vp.w}
            height={vp.h}
            fill="var(--color-surface)"
            mask="url(#portal-mask)"
            style={{ opacity: sheetOpacity }}
          />

          <motion.g style={{ opacity: inkOpacity }}>
            <g ref={inkG} transform={identity}>
              {lines.map((line, i) => (
                <text
                  key={line}
                  {...textProps}
                  y={baselineY + i * lineHeight}
                  dominantBaseline="middle"
                  fill="var(--color-ink)"
                >
                  {line}
                </text>
              ))}
            </g>
          </motion.g>

          <motion.text
            {...textProps}
            y={baselineY - lineHeight * (narrow ? 1.5 : 1.15)}
            dominantBaseline="middle"
            fontSize={fontSize * 0.62}
            fill="var(--color-ink)"
            style={{
              ...textProps.style,
              opacity: line1Opacity,
              y: line1Y,
            }}
          >
            {LINE_1}
          </motion.text>
        </svg>

        {/* ---- supporting UI: real HTML, real links ---- */}
        <motion.div
          className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-center gap-7 px-6 pb-[max(48px,9vh)]"
          style={{ opacity: uiOpacity, y: uiY }}
        >
          <p className="text-body-lg max-w-[52ch] text-center text-ink-body">
            At Assertive Brand Communication, we deliver meticulously designed
            events that create unforgettable experiences and exceed our
            clients&#8217; highest expectations.
          </p>
          <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/work"
              className="rounded-md bg-corporate-fill px-6 py-3 font-medium text-white transition-colors duration-[var(--dur-fast)] hover:bg-corporate-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
            >
              Explore Our Work
            </Link>
            <Link
              href="/about"
              className="rounded-md border border-hairline bg-surface/70 px-6 py-3 font-medium text-ink backdrop-blur-sm transition-colors duration-[var(--dur-fast)] hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
            >
              Know More About Us
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute inset-x-0 top-[max(96px,12vh)] flex justify-center"
          style={{ opacity: cueOpacity }}
        >
          <span className="text-eyebrow uppercase text-ink-muted">
            We create experiences
          </span>
        </motion.div>

        {/* ---- what you land in ---- */}
        <motion.div
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
          style={{ opacity: gridOpacity, y: gridY }}
        >
          <div className="pointer-events-auto w-full max-w-[1180px]">
            <p className="text-eyebrow mb-6 text-center uppercase text-white/75">
              Our recent events
            </p>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
              {WORK.map((w) => (
                <Link
                  key={w.slug}
                  href={`/work/${w.slug}`}
                  className="group relative block overflow-hidden rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Image
                    src={w.image}
                    alt={w.alt}
                    width={370}
                    height={351}
                    sizes="(max-width: 768px) 45vw, 220px"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[var(--dur-base)] group-hover:scale-[1.05]"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-3 pt-8 text-sm font-medium leading-tight text-white">
                    {w.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ---- progress rail, tinted by the travelling hue ---- */}
        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-ink/5">
          <motion.div
            className="h-full origin-left"
            style={{
              scaleX: railScale,
              background: "oklch(62% 0.17 var(--brand-hue))",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function StaticFallback({ fontSize }: { fontSize: number }) {
  return (
    <div className="relative flex min-h-svh items-center justify-center overflow-hidden px-6">
      <Image
        src="/media/venue-bokeh.png"
        alt=""
        fill
        preload={true}
        quality={82}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-surface/88" />
      <div className="relative max-w-[900px] text-center">
        <p className="text-eyebrow mb-6 uppercase text-ink-muted">
          We create experiences
        </p>
        <h1
          className="text-ink"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: fontSize * 0.62,
            lineHeight: 1.06,
            letterSpacing: "-0.03em",
          }}
        >
          {LINE_1}
          <br />
          <span style={{ fontSize }}>{LINE_2}</span>
        </h1>
        <p className="text-body-lg mx-auto mt-7 max-w-[52ch] text-ink-body">
          At Assertive Brand Communication, we deliver meticulously designed
          events that create unforgettable experiences and exceed our
          clients&#8217; highest expectations.
        </p>
      </div>
    </div>
  );
}
