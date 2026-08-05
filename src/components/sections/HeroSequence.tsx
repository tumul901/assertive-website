"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { PinwheelMark } from "@/components/brand/PinwheelMark";
import { PETALS, STEP } from "@/lib/data/petals";
import { PILLARS } from "@/lib/data/pillars";
import { SERVICES } from "@/lib/data/services";
import { useMotionStyles } from "@/lib/use-motion-styles";

/*
 * THE OPENING SEQUENCE - one pinned stage, one scroll timeline.
 *
 * Act 1  "From Concept to Celebration: Unforgettable Experiences" opens as
 *        OUTLINE type - drawn but not yet made, which is what concept looks
 *        like. Five threads, one per figure in the logo, sweep across and
 *        leave the words SOLID behind them: the headline is built by the
 *        brand palette. The threads gather, resolve into the mark, and the
 *        mark floods the screen.
 * Act 2  "Five disciplines. One team on the floor." rises out of the flood
 *        and anchors to the top of the stage.
 * Act 3  The mark returns hollow. The wheel turns one petal per beat; each
 *        turn claims a figure in its real logo colour and names the
 *        discipline it stands for. After five turns it has come full circle
 *        and the logo is whole.
 *
 * WHY ONE COMPONENT AND NOT TWO. This was first built as a Threads hero
 * followed by a separate pinned Petals section, and that is structurally
 * incapable of working: two sticky stages means the first one is scrolling
 * out of the top of the viewport while the second scrolls in from the
 * bottom, so for a full screen-height the handover line is visible TWICE,
 * once near each edge. Matching the two copies pixel for pixel does not
 * help - the duplication is the sticky mechanics, not the styling. One
 * wrapper, one sticky child and one progress value means the line is a
 * single element that simply moves.
 *
 * WHY EVERY SCROLL-LINKED STYLE GOES THROUGH useMotionStyles. Binding a
 * useScroll-derived MotionValue to a motion component's style prop makes
 * Motion hand the animation to a native CSS ViewTimeline, whose progress
 * is a different curve from useScroll's offset. The paint then silently
 * desyncs from the value. See the note in use-motion-styles.ts.
 *
 * NOTHING HERE HARDCODES A THEME. An earlier pass forced Act 3 onto a dark
 * stage to rescue the amber figure (#fcd088 is only about 1.3:1 on the bone
 * page). That is now the theme system's job: the petal tokens resolve to the
 * authored artwork colours in dark and to lightness-corrected ones in light,
 * so this component just uses surface / ink / hairline and follows whichever
 * theme the visitor chose. See tokens.css.
 *
 * REDUCED MOTION is handled in CSS, never by returning a different tree.
 * useReducedMotion() is false during SSR, so branching on it renders one
 * structure on the server and another on the client - that produced a real
 * hydration mismatch plus Motion's "Target ref is defined but not
 * hydrated" error. The markup below is identical in both modes.
 */

const THREADS = [
  { key: "activation", color: "var(--color-activation-mark)", y: -0.34, len: 0.16, lag: 0.0 },
  { key: "content", color: "var(--color-content-mark)", y: -0.14, len: 0.26, lag: 0.03 },
  { key: "live", color: "var(--color-live-mark)", y: 0.06, len: 0.2, lag: 0.06 },
  { key: "corporate", color: "var(--color-corporate-mark)", y: 0.26, len: 0.3, lag: 0.09 },
  { key: "weddings", color: "var(--color-weddings-mark)", y: 0.46, len: 0.14, lag: 0.12 },
];

const HEADLINE_STYLE = {
  fontFamily: "var(--font-display)",
  fontWeight: 800,
  fontSize: "clamp(2.25rem, 0.9rem + 5.4vw, 5.5rem)",
  lineHeight: 1.02,
  letterSpacing: "-0.035em",
} as const;

const ANCHOR_STYLE = {
  fontFamily: "var(--font-display)",
  fontWeight: 800,
  fontSize: "clamp(1.75rem, 1rem + 3vw, 3rem)",
  lineHeight: 1.02,
  letterSpacing: "-0.035em",
} as const;

/** Beat 1 reveals the wheel; 1-5 are the petals; 6 is the close. */
const BEAT_AT = [0.47, 0.57, 0.66, 0.75, 0.84, 0.93];

const DISCIPLINES = PETALS.map((petal, i) => {
  const pillar = PILLARS.find((p) => p.id === petal.id)!;
  return {
    ...petal,
    index: String(i + 1).padStart(2, "0"),
    name: pillar.name,
    blurb: pillar.blurb,
    services: SERVICES.filter((s) => s.pillar === petal.id),
  };
});

export function HeroSequence() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  // ---- Act 1 ----------------------------------------------------------
  const wipeRight = useTransform(p, [0.04, 0.25], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${wipeRight}% 0 0)`;
  const front = useTransform(p, [0.04, 0.25], [0, 100]);
  const gather = useTransform(p, [0.25, 0.31], [0, 1]);
  const threadOpacity = useTransform(p, [0.02, 0.05, 0.29, 0.33], [0, 1, 1, 0]);
  const uiOpacity = useTransform(p, [0, 0.04, 0.08], [1, 1, 0]);
  const headlineOpacity = useTransform(p, [0.29, 0.34], [1, 0]);
  const markOpacity = useTransform(p, [0.28, 0.31, 0.36, 0.39], [0, 1, 1, 0]);
  const markTransform = useTransform(
    useTransform(p, [0.29, 0.38], [0.35, 16]),
    (s) => `scale(${s})`,
  );
  // The flood carries the hand-off from Act 1 to Act 2 and is then CLEARED
  // before the wheel arrives. Leaving it up looked fine but is a real
  // contrast trap: the tint sits between the text and the page, and the
  // petal tokens were solved against the plain surface, not against a
  // purple wash. Measured over the flood, three petals dropped to 2.74-2.76:1
  // in light and the purple to 2.81:1 in dark - all under the 3:1 they are
  // supposed to hold. On the bare surface they are 3.01-13.01:1.
  const floodOpacity = useTransform(p, [0.32, 0.38, 0.47, 0.53], [0, 1, 1, 0]);

  // ---- Act 2: the line rises out of the flood and anchors -------------
  const lineOpacity = useTransform(p, [0.37, 0.42], [0, 1]);
  // 1 = parked at centre, 0 = anchored at top. Scroll-linked rather than a
  // CSS transition so the move tracks the scroll instead of firing once.
  // 0.51em is half a line box at line-height 1.02 - using em rather than
  // 50% keeps the multiplication inside calc() unambiguous.
  const park = useTransform(p, [0.42, 0.5], [1, 0]);
  const lineTransform = useMotionTemplate`translateY(calc(${park} * (42svh - 0.51em)))`;

  // ---- Act 3 ----------------------------------------------------------
  const [beat, setBeat] = useState(0);
  useMotionValueEvent(p, "change", (v) => {
    let next = 0;
    for (const t of BEAT_AT) if (v >= t) next += 1;
    setBeat(next);
  });

  const entered = beat >= 1;
  const active = beat >= 1 && beat <= 5 ? DISCIPLINES[beat - 1] : null;
  const rotation = beat <= 1 ? 0 : -STEP * (beat - 1);
  const filled = DISCIPLINES.slice(0, Math.min(beat, 5)).map((d) => d.id);

  const hue = useTransform(p, [0.04, 0.1, 0.16, 0.22, 0.28], [26, 79, 146, 220, 314]);
  useMotionValueEvent(hue, "change", (h) => {
    document.documentElement.style.setProperty("--brand-hue", String(h));
  });

  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const solidRef = useRef<HTMLDivElement>(null);
  const threadsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const floodRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLHeadingElement>(null);

  useMotionStyles(eyebrowRef, { opacity: uiOpacity });
  useMotionStyles(headlineRef, { opacity: headlineOpacity });
  useMotionStyles(solidRef, { "clip-path": clip });
  useMotionStyles(threadsRef, { opacity: threadOpacity });
  useMotionStyles(ctaRef, { opacity: uiOpacity });
  useMotionStyles(markRef, { opacity: markOpacity, transform: markTransform });
  useMotionStyles(floodRef, { opacity: floodOpacity });
  useMotionStyles(lineRef, { opacity: lineOpacity, transform: lineTransform });

  return (
    <div ref={wrapRef} className="relative h-[980svh] motion-reduce:h-auto">
      {/* .hero-stage (globals.css): reserves Header's real height via
          --header-h so the two sticky elements never overlap. See the
          long comment there and in tokens.css. */}
      <div className="hero-stage">
        {/* ---- backdrop stack ---- */}
        <div
          ref={floodRef}
          aria-hidden="true"
          className="absolute inset-0 motion-reduce:hidden"
          style={{
            opacity: 0,
            background:
              "radial-gradient(120% 120% at 50% 50%, var(--flood-inner) 0%, var(--flood-outer) 100%)",
          }}
        />

        {/* ---- ACT 1 ---- */}
        <div className="absolute inset-0 flex items-center motion-reduce:static motion-reduce:min-h-svh motion-reduce:py-24">
          <div className="relative mx-auto w-full max-w-[1440px] px-6 lg:px-10">
            <p
              ref={eyebrowRef}
              className="text-eyebrow mb-6 uppercase text-ink-muted motion-reduce:!opacity-100"
            >
              We create experiences
            </p>

            <div ref={headlineRef} className="relative motion-reduce:!opacity-100">
              {/* Outline layer - the real, accessible headline. */}
              <h1
                className="relative"
                style={{
                  ...HEADLINE_STYLE,
                  WebkitTextStroke: "1.25px var(--color-ink)",
                  color: "transparent",
                }}
              >
                From Concept to Celebration:
                <br />
                Unforgettable Experiences
              </h1>

              {/* Solid layer, revealed by the wipe. */}
              <div
                ref={solidRef}
                aria-hidden="true"
                className="absolute inset-0 text-ink motion-reduce:![clip-path:inset(0)]"
                style={{ ...HEADLINE_STYLE, clipPath: "inset(0 100% 0 0)" }}
              >
                From Concept to Celebration:
                <br />
                Unforgettable Experiences
              </div>

              <div
                ref={threadsRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 motion-reduce:hidden"
                style={{ opacity: 0 }}
              >
                {THREADS.map((t) => (
                  <Thread key={t.key} thread={t} front={front} gather={gather} />
                ))}
              </div>
            </div>

            {/* Reduced motion never sees the sweep, so state the palette. */}
            <div className="mt-8 hidden gap-2 motion-reduce:flex" aria-hidden="true">
              {THREADS.map((t) => (
                <span
                  key={t.key}
                  className="h-[5px] w-16 rounded-full"
                  style={{ background: t.color }}
                />
              ))}
            </div>

            <div
              ref={ctaRef}
              className="mt-10 flex flex-wrap gap-4 motion-reduce:!opacity-100"
            >
              <Link
                href="/work"
                className="rounded-md bg-corporate-fill px-6 py-3 font-medium text-white transition-colors duration-[var(--dur-fast)] hover:bg-corporate-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
              >
                Explore Our Work
              </Link>
              <Link
                href="/about"
                className="rounded-md border border-hairline px-6 py-3 font-medium text-ink transition-colors duration-[var(--dur-fast)] hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
              >
                Know More About Us
              </Link>
            </div>
          </div>
        </div>

        {/* Threads resolve into the mark, the mark floods the screen. */}
        <div
          ref={markRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center motion-reduce:hidden"
          style={{ opacity: 0 }}
        >
          <Image
            src="/logo-mark.png"
            alt=""
            width={729}
            height={710}
            className="h-[22vmin] w-auto"
          />
        </div>

        {/* ---- ACTS 2 + 3 ---- */}
        <div className="absolute inset-0 flex flex-col px-6 lg:px-10 motion-reduce:static motion-reduce:py-24">
          <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col">
            <div className="pt-[8svh] motion-reduce:pt-0">
              {/* ONE instance of this line for the whole sequence. */}
              <h2
                ref={lineRef}
                className="text-center text-ink motion-reduce:!opacity-100 motion-reduce:!transform-none"
                style={{ ...ANCHOR_STYLE, opacity: 0 }}
              >
                Five disciplines. One team on the floor.
              </h2>
            </div>

            <div
              className="grid flex-1 items-center gap-8 pb-[8svh] transition-opacity duration-[900ms] motion-reduce:!opacity-100 md:grid-cols-[minmax(0,42%)_minmax(0,1fr)] md:gap-14"
              style={{ opacity: entered ? 1 : 0 }}
            >
              <div className="relative mx-auto w-[min(46vw,340px)] md:w-full md:max-w-[420px]">
                <PinwheelMark
                  rotation={rotation}
                  filled={filled}
                  className="h-auto w-full"
                />
              </div>

              <div className="min-h-[clamp(240px,34svh,340px)]">
                {DISCIPLINES.map((d, i) => {
                  const isActive = active?.id === d.id;
                  return (
                    <div
                      key={d.id}
                      aria-hidden={!isActive}
                      className="transition-[opacity,transform] duration-[700ms] ease-out-expo"
                      style={{
                        display: beat === i + 1 ? "block" : "none",
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? "translateY(0)" : "translateY(14px)",
                      }}
                    >
                      <span
                        className="tabular-nums"
                        style={{
                          color: d.color,
                          fontFamily: "var(--font-display)",
                          fontWeight: 800,
                          fontSize: "clamp(2.5rem, 1.6rem + 3vw, 4rem)",
                          letterSpacing: "-0.03em",
                          lineHeight: 1,
                        }}
                      >
                        {d.index}
                      </span>
                      <h3 className="text-h2 mt-3 text-ink">{d.name}</h3>
                      <p className="text-body-lg mt-4 max-w-[46ch] text-ink-body">
                        {d.blurb}
                      </p>
                      <ul className="mt-7 flex flex-wrap gap-2">
                        {d.services.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/services/${s.slug}`}
                              className="text-sm inline-block rounded-full border px-3.5 py-1.5 text-ink-body transition-colors duration-[var(--dur-fast)] hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
                              style={{
                                borderColor: `color-mix(in oklab, ${d.color} 45%, transparent)`,
                              }}
                              tabIndex={isActive ? 0 : -1}
                            >
                              {s.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}

                <div
                  className="transition-[opacity,transform] duration-[700ms] ease-out-expo"
                  style={{
                    display: beat === 6 ? "block" : "none",
                    opacity: beat === 6 ? 1 : 0,
                    transform: beat === 6 ? "translateY(0)" : "translateY(14px)",
                  }}
                >
                  <h3 className="text-h2 max-w-[16ch] text-ink">
                    Sixteen services. One accountable team.
                  </h3>
                  <p className="text-body-lg mt-4 max-w-[46ch] text-ink-body">
                    Every figure in the mark is a discipline we run in-house,
                    which is why a brief never has to be handed between
                    agencies halfway through.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href="/services"
                      className="rounded-md bg-corporate-fill px-6 py-3 font-medium text-white transition-colors duration-[var(--dur-fast)] hover:bg-corporate-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
                    >
                      View All Services
                    </Link>
                    <Link
                      href="/client-query"
                      className="rounded-md border border-hairline px-6 py-3 font-medium text-ink transition-colors duration-[var(--dur-fast)] hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
                    >
                      Start an Enquiry
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-6 flex justify-center gap-2 transition-opacity duration-[900ms] motion-reduce:hidden"
              style={{ opacity: entered ? 1 : 0 }}
            >
              {DISCIPLINES.map((d, i) => (
                <span
                  key={d.id}
                  className="h-1.5 rounded-full transition-all duration-[var(--dur-base)]"
                  style={{
                    width: beat === i + 1 ? 28 : 10,
                    background: i < beat ? d.color : "var(--color-hairline)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Thread({
  thread,
  front,
  gather,
}: {
  thread: (typeof THREADS)[number];
  front: MotionValue<number>;
  gather: MotionValue<number>;
}) {
  // Each thread trails the wipe front by its own lag, so the leading edge
  // reads as a braid rather than one hard line. On gather they converge on
  // 50% and their lengths collapse to nothing.
  const leftPct = useTransform([front, gather], ([f, g]: number[]) => {
    const lagged = Math.max(0, f - thread.lag * 100);
    return lagged + (50 - lagged) * g;
  });
  const widthPct = useTransform(gather, [0, 1], [thread.len * 100, 0]);
  const left = useMotionTemplate`${leftPct}%`;
  const width = useMotionTemplate`${widthPct}%`;

  const ref = useRef<HTMLSpanElement>(null);
  useMotionStyles(ref, { left, width });

  return (
    <span
      ref={ref}
      className="absolute h-[6px] -translate-x-full rounded-full"
      style={{
        top: `calc(50% + ${thread.y * 100}%)`,
        left: 0,
        width: 0,
        background: thread.color,
      }}
    />
  );
}
