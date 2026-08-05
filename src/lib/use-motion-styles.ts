"use client";

import { useEffect, type RefObject } from "react";
import type { MotionValue } from "motion/react";

/*
 * Bind MotionValues straight to an element's inline style.
 *
 * WHY THIS EXISTS - do not replace it with `style={{ opacity: mv }}` on a
 * motion.div. When a MotionValue comes from useScroll({ target }), Motion
 * tries to hand the animation to the compositor as a native CSS
 * scroll-driven animation. Verified in the browser: it emits a WAAPI
 * Animation whose timeline is a **ViewTimeline**, with keyframes at the
 * offsets from the useTransform input range.
 *
 * Those two things do not describe the same progress. A ViewTimeline runs
 * 0 -> 1 as the element enters and then leaves the viewport; useScroll
 * with offset ["start start", "end end"] runs 0 -> 1 as the element
 * scrolls through its own height. For a 340svh sticky-pinned stage they
 * are wildly different curves, so the painted result drifts away from the
 * MotionValue - the MotionValue reads 0 while the element paints at 0.38.
 *
 * The failure is silent and quite convincing at a glance: layers that are
 * supposed to be long gone fade back in near the end of the pin. It was
 * caught by dumping el.getAnimations() and comparing against .get(), not
 * by looking at it.
 *
 * Writing the style directly means no keyframes exist for the browser to
 * run on the wrong timeline. MotionValue identities are stable for the
 * life of the component, so subscribing once on mount is correct and the
 * empty dependency array is deliberate.
 *
 * KEYS ARE CSS PROPERTY NAMES, KEBAB-CASE. This goes through
 * CSSStyleDeclaration.setProperty, which does not accept camelCase - pass
 * "clip-path", not "clipPath". A camelCase key fails silently.
 */
export function useMotionStyles(
  ref: RefObject<HTMLElement | SVGElement | null>,
  styles: Record<string, MotionValue<number> | MotionValue<string>>,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const unsubscribe = Object.entries(styles).map(([prop, value]) => {
      const write = (v: number | string) => el.style.setProperty(prop, String(v));
      write(value.get());
      return value.on("change", write);
    });
    return () => unsubscribe.forEach((u) => u());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
