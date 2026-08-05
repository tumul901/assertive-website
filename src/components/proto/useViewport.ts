"use client";

import { useEffect, useState } from "react";

// The scrollytelling heroes draw their headline as real SVG <text> so it
// can be used as a mask. SVG needs the stage size in user units, so we
// track the viewport instead of guessing a fixed viewBox - a single
// hardcoded viewBox cannot survive both a 390px phone and a 1920px
// desktop (preserveAspectRatio="slice" crops one of them badly).
//
// Returns a sane desktop default on the server so the SSR markup is
// still a readable hero before hydration.
export function useViewport() {
  const [vp, setVp] = useState({ w: 1440, h: 860, ready: false });

  useEffect(() => {
    const read = () =>
      setVp({ w: window.innerWidth, h: window.innerHeight, ready: true });
    read();
    window.addEventListener("resize", read);
    return () => window.removeEventListener("resize", read);
  }, []);

  return vp;
}
