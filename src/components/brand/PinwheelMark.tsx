"use client";

import { motion } from "motion/react";
import { MARK_VIEWBOX, PETALS } from "@/lib/data/petals";
import type { PillarId } from "@/lib/data/pillars";

/*
 * The logo mark, drawable in two states at once: a hollow outline that is
 * always present, and a solid colour fill per petal that can be switched
 * on independently.
 *
 * Rotation rides on a motion.g with the default 50%/50% origin. That is
 * correct here BY MEASUREMENT, not by luck: the mark's bounding-box centre
 * is (807.1, 800.8) and the five head centres average to (810.0, 825.5) -
 * the same axis to within a few units at a 1727-unit scale. Do not add an
 * explicit transformOrigin; SVG transform-origin resolution differs
 * between transform-box values and it is easy to introduce a wobble.
 *
 * The rotation is TIME-based (it animates when the beat prop changes), not
 * bound to a scroll MotionValue, so it does not go anywhere near the
 * ViewTimeline hand-off problem documented in use-motion-styles.ts.
 */

export function PinwheelMark({
  rotation = 0,
  filled = [],
  // Derived from the ink token so the outline follows the theme without
  // the caller having to know which theme is active.
  hollowColor = "color-mix(in oklab, var(--color-ink) 30%, transparent)",
  strokeWidth = 9,
  className,
  duration = 0.9,
}: {
  rotation?: number;
  filled?: PillarId[];
  hollowColor?: string;
  strokeWidth?: number;
  className?: string;
  duration?: number;
}) {
  return (
    <svg
      viewBox={MARK_VIEWBOX}
      className={className}
      aria-hidden="true"
      overflow="visible"
    >
      <motion.g
        animate={{ rotate: rotation }}
        transition={{ duration, ease: [0.16, 1, 0.3, 1] }}
      >
        {PETALS.map((petal) => {
          const isFilled = filled.includes(petal.id);
          return (
            <g key={petal.id}>
              {/* Hollow outline - always drawn, so the mark reads as a
                  complete shape before any petal is claimed. */}
              <path
                d={petal.body}
                fill="none"
                stroke={hollowColor}
                strokeWidth={strokeWidth}
                strokeLinejoin="round"
              />
              <ellipse
                cx={petal.head.cx}
                cy={petal.head.cy}
                rx={petal.head.rx}
                ry={petal.head.ry}
                transform={petal.head.transform}
                fill="none"
                stroke={hollowColor}
                strokeWidth={strokeWidth}
              />

              {/* Solid fill, in the colour authored in the real artwork. */}
              <motion.g
                initial={false}
                animate={{ opacity: isFilled ? 1 : 0 }}
                transition={{ duration: duration * 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <path d={petal.body} fill={petal.color} />
                <ellipse
                  cx={petal.head.cx}
                  cy={petal.head.cy}
                  rx={petal.head.rx}
                  ry={petal.head.ry}
                  transform={petal.head.transform}
                  fill={petal.color}
                />
              </motion.g>
            </g>
          );
        })}
      </motion.g>
    </svg>
  );
}
