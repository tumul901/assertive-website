"use client";

import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "assertive-theme";

/*
 * The theme lives on <html data-theme>, written by the blocking script in
 * layout.tsx BEFORE first paint. React never owns the initial value - if
 * it did, the server would always render light and the page would flash
 * white for one frame on a dark-preferring device.
 *
 * So this hook READS the attribute the script already set rather than
 * deriving it, and starts as null until mounted. Anything rendering from
 * it has to tolerate null on the server (render a neutral state), or it
 * reintroduces the hydration mismatch documented in HeroSequence.tsx.
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme | null>(null);

  useEffect(() => {
    const read = () =>
      setThemeState(
        (document.documentElement.dataset.theme as Theme | undefined) ?? "light",
      );
    read();

    // Follow the OS only while the visitor has not made a choice.
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      try {
        if (localStorage.getItem(THEME_STORAGE_KEY)) return;
      } catch {
        /* storage blocked - fall through and follow the OS */
      }
      document.documentElement.dataset.theme = mq.matches ? "dark" : "light";
      read();
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const applyTheme = useCallback((next: Theme) => {
    document.documentElement.dataset.theme = next;
    setThemeState(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* private mode - the theme still applies for this session */
    }
  }, []);

  return { theme, applyTheme };
}
