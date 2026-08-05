"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

// The one scroll-reveal wrapper used by every section (PLAN.md section
// 2.6). Animates opacity + a small y-offset only, never gates text
// content - if JS fails, children are already in the DOM and readable.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: reduce ? 0.01 : 0.7,
        delay: reduce ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
