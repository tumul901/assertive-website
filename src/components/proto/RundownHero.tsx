"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

/*
 * CONCEPT B - "The Call Sheet"
 *
 * The opposite bet to Concept A. Nothing zooms and nothing is spectacle;
 * the headline never moves. Instead the event day runs UNDERNEATH it -
 * five beats on a timeline rail, each one a real production milestone
 * with the photograph that matches it.
 *
 * The pitch it makes: "we are operators, not decorators". Every event
 * agency site shows you the party. Almost none show you the 06:00 rig
 * call, and that is what a corporate buyer at News18 or Royal Enfield is
 * actually shopping for.
 *
 * The five logo hues arrive one per beat, so the brand palette is
 * introduced as a schedule rather than as decoration.
 */

interface Beat {
  time: string;
  phase: string;
  line: string;
  image: string;
  alt: string;
  ink: string;
  mark: string;
  wash: string;
}

const BEATS: Beat[] = [
  {
    time: "06:00",
    phase: "Load in",
    line: "Trucks on site, floor marked out, rig going up.",
    image: "/media/work/agenda-paschim.png",
    alt: "An empty conclave set with a red and gold backdrop, before the audience arrives",
    ink: "text-activation-ink",
    mark: "bg-activation-mark",
    wash: "bg-activation-wash",
  },
  {
    time: "11:00",
    phase: "Build",
    line: "Set built, screens flown, every surface branded.",
    image: "/media/work/wedding.webp",
    alt: "A large illuminated set built as an ornate palace facade",
    ink: "text-content-ink",
    mark: "bg-content-mark",
    wash: "bg-content-wash",
  },
  {
    time: "16:00",
    phase: "Tech",
    line: "Sound checked, cues plotted, run-through called.",
    image: "/media/work/india-pod-day.webp",
    alt: "A lit stage set with armchairs, ready for a panel, before doors open",
    ink: "text-live-ink",
    mark: "bg-live-mark",
    wash: "bg-live-wash",
  },
  {
    time: "19:00",
    phase: "Doors",
    line: "Registration open, hosts briefed, guests moving.",
    image: "/media/work/cleartrip-achievers.webp",
    alt: "Four hosts staffing a branded registration desk as guests arrive",
    ink: "text-corporate-ink",
    mark: "bg-corporate-mark",
    wash: "bg-corporate-wash",
  },
  {
    time: "21:00",
    phase: "Showtime",
    line: "Lights down. Everything you planned, happening.",
    image: "/media/work/india-drives.webp",
    alt: "Folk dancers performing in front of a large illuminated LED stage",
    ink: "text-weddings-ink",
    mark: "bg-weddings-mark",
    wash: "bg-weddings-wash",
  },
];

export function RundownHero() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  const [beat, setBeat] = useState(0);
  useMotionValueEvent(p, "change", (v) => {
    // 12% lead-in so the hero reads as a hero before the day starts.
    const t = Math.max(0, (v - 0.12) / 0.82);
    setBeat(Math.max(0, Math.min(BEATS.length - 1, Math.floor(t * BEATS.length))));
  });

  const railFill = useTransform(p, [0.12, 0.94], [0, 1]);
  const b = BEATS[beat];

  const stage = (
    <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
        <p className="text-eyebrow mb-5 uppercase text-ink-muted">
          Call sheet &#183; 06:00 to 21:00
        </p>

        <h1
          className="text-ink"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2.125rem, 1rem + 4.6vw, 4.25rem)",
            lineHeight: 1.04,
            letterSpacing: "-0.03em",
          }}
        >
          From Concept to Celebration:
          <br />
          <span className="relative inline-block">
            Unforgettable Experiences
            {/* The rule under the headline is the day, filling up. */}
            <motion.span
              aria-hidden="true"
              className={`absolute -bottom-1 left-0 h-[5px] w-full origin-left rounded-full ${b.mark} transition-colors duration-[var(--dur-base)]`}
              style={{ scaleX: railFill }}
            />
          </span>
        </h1>

        {/* ---- the rundown ---- */}
        <div className="mt-12 grid items-end gap-8 md:mt-16 md:grid-cols-[1fr_auto]">
          <div>
            {/* tick rail */}
            <ol className="mb-8 flex items-center gap-0" aria-hidden="true">
              {BEATS.map((x, i) => (
                <li key={x.time} className="flex flex-1 items-center last:flex-none">
                  <span
                    className={`h-2.5 w-2.5 shrink-0 rounded-full transition-colors duration-[var(--dur-base)] ${
                      i <= beat ? x.mark : "bg-hairline"
                    }`}
                  />
                  {i < BEATS.length - 1 && (
                    <span
                      className={`h-px w-full transition-colors duration-[var(--dur-base)] ${
                        i < beat ? x.mark : "bg-hairline"
                      }`}
                    />
                  )}
                </li>
              ))}
            </ol>

            <AnimatePresence mode="wait">
              <motion.div
                key={b.time}
                initial={{ opacity: 0, y: reduce ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduce ? 0 : -14 }}
                transition={{ duration: reduce ? 0.01 : 0.34, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className={`tabular-nums ${b.ink}`}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "clamp(2rem, 1.4rem + 2.4vw, 3.25rem)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {b.time}
                  </span>
                  <span className="text-eyebrow uppercase text-ink">{b.phase}</span>
                </div>
                <p className="text-body-lg mt-2 max-w-[42ch] text-ink-body">{b.line}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex flex-wrap gap-4">
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

          {/* photo, held at close to its native 370px so it stays sharp */}
          <div
            className={`relative hidden aspect-[370/351] w-[min(370px,34vw)] overflow-hidden rounded-lg transition-colors duration-[var(--dur-base)] md:block ${b.wash}`}
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={b.image}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: reduce ? 1 : 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduce ? 0.01 : 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={b.image}
                  alt={b.alt}
                  fill
                  sizes="370px"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );

  if (reduce) return <div className="relative">{stage}</div>;

  return (
    <div ref={wrapRef} className="relative h-[420svh]">
      {stage}
    </div>
  );
}
