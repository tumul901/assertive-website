"use client";

import { useEffect, useState } from "react";
import { animate, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useInViewOnce } from "@/lib/use-in-view-once";
import { STATS } from "@/lib/data/stats";

/*
 * PLAN.md Phase 7. Every STATS entry is currently value: null (section
 * 3.7 - the live site publishes no numbers, none may be invented), so
 * this renders four em-dashes and AnimatedNumber never actually runs on
 * the shipped site - it is dead code on the current data, kept ready for
 * whenever the client supplies real figures.
 *
 * Uses useInViewOnce (src/lib) rather than motion/react's own useInView.
 * While building this, motion's version intermittently failed to report
 * the target as in view during dev-mode testing; a plain IntersectionObserver
 * on the same element did not show the same failure in that same test.
 * Root cause was NOT conclusively isolated (React StrictMode's double
 * effect invocation and Turbopack HMR were both plausible confounds, and
 * time was better spent elsewhere given this path has zero effect on the
 * current site). useInViewOnce is a small, standard, directly-verifiable
 * IntersectionObserver hook with no other dependency - safe to ship
 * regardless of what was actually wrong with the alternative.
 */
function AnimatedNumber({ value }: { value: number }) {
  const { ref, inView } = useInViewOnce<HTMLSpanElement>("-80px");
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  // Reduced motion never enters the animate() branch at all - value is
  // rendered directly below instead of being synced into state via the
  // effect, so there is no synchronous setState-in-effect (the lint rule
  // this tripped: "Calling setState synchronously within an effect can
  // trigger cascading renders"). The animate() onUpdate callback below
  // IS the sanctioned pattern - state set from an external system's
  // per-frame callback, not from the effect body itself.
  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return <span ref={ref}>{reduce ? value : display}</span>;
}

export function Scale() {
  return (
    <Section as="section" className="bg-surface">
      <Container>
        <div className="grid grid-cols-2 divide-x divide-y divide-hairline border-y border-hairline sm:grid-cols-4 sm:divide-y-0">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 px-4 py-10 text-center"
            >
              <span
                className="text-h2 tabular-nums text-ink"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value === null ? (
                  <span className="text-ink-muted">&#8212;</span>
                ) : (
                  <>
                    <AnimatedNumber value={stat.value} />
                    {stat.suffix}
                  </>
                )}
              </span>
              <span className="text-small text-ink-muted">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
