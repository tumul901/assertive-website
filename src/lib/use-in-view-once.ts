"use client";

import { useEffect, useRef, useState } from "react";

/*
 * A minimal, verified replacement for motion/react's useInView.
 *
 * That hook (framer-motion@12.43.0, dist/es/utils/use-in-view.mjs) is a
 * thin wrapper around a real IntersectionObserver - reading its source
 * looked correct - but it never reported true in this app even once the
 * target was comfortably inside the (shrunk, -80px margin) viewport.
 * Isolated by placing a PLAIN, hand-rolled IntersectionObserver next to
 * it on the same element with the same rootMargin: the raw observer
 * correctly fired isIntersecting: true; motion/react's useInView stayed
 * false indefinitely. So the bug is inside that abstraction, not in this
 * app's usage of it or in browser support.
 *
 * This hook is that same proven-working raw observer, exposed as a hook.
 * "Once" semantics: after the first intersection it disconnects and
 * never re-subscribes, matching { once: true } from the library version.
 */
export function useInViewOnce<T extends Element>(margin = "0px") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { rootMargin: margin },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [margin, inView]);

  return { ref, inView } as const;
}
