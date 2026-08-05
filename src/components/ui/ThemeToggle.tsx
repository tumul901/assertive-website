"use client";

import { useRef } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme, type Theme } from "@/lib/use-theme";
import { coverRadius, liquidFrames } from "@/lib/liquid-reveal";

/*
 * WHY THE VIEW TRANSITIONS API AND NOT AN OVERLAY DIV.
 *
 * The naive version is a full-screen element painted in the incoming
 * theme colour that grows over the page. It always looks wrong, because
 * it is a flat colour: the moment it covers anything, that content
 * vanishes, and the swap at the end pops the text back in.
 *
 * startViewTransition snapshots the real OLD and NEW renderings of the
 * page as images and stacks them. Clipping the NEW snapshot means the
 * blob reveals the genuinely re-themed page - text, images, the lot -
 * spreading over the old one. Nothing disappears at any point.
 *
 * Support is Chrome/Edge/Safari; Firefox has not shipped it. There the
 * theme still switches, with the short colour crossfade below instead of
 * the spread. Same for prefers-reduced-motion, where an expanding
 * full-viewport shape is exactly what the setting exists to suppress.
 */

// document.startViewTransition and ViewTransition are already in lib.dom -
// do not re-declare them here, the local shape will not match and tsc
// rejects it (TS2717 / TS2687).
const CROSSFADE_MS = 380;

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, applyTheme } = useTheme();
  const btnRef = useRef<HTMLButtonElement>(null);

  // theme is null until mounted (see use-theme.ts) - render the neutral
  // state so the server and the client agree.
  const next: Theme = theme === "dark" ? "light" : "dark";
  const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  function crossfade() {
    document.documentElement.classList.add("theme-crossfade");
    window.setTimeout(
      () => document.documentElement.classList.remove("theme-crossfade"),
      CROSSFADE_MS,
    );
  }

  async function onClick() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!document.startViewTransition || reduce) {
      if (!reduce) crossfade();
      applyTheme(next);
      return;
    }

    const rect = btnRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : 0;
    const r = coverRadius(x, y, window.innerWidth, window.innerHeight);

    const transition = document.startViewTransition(() => applyTheme(next));
    try {
      await transition.ready;
    } catch {
      return; // a second toggle interrupted this one
    }
    document.documentElement.animate(
      { clipPath: liquidFrames(x, y, r) },
      {
        duration: 900,
        easing: "linear", // the ease is baked into the radius, see liquid-reveal
        pseudoElement: "::view-transition-new(root)",
      },
    );
  }

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-ink transition-colors duration-[var(--dur-fast)] hover:bg-surface-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink ${className ?? ""}`}
    >
      {/* Both icons are always in the DOM and CSS picks one, so the server
          markup does not depend on the theme and there is nothing for
          hydration to disagree about. */}
      <Sun size={19} aria-hidden="true" className="hidden dark:block" />
      <Moon size={19} aria-hidden="true" className="dark:hidden" />
    </button>
  );
}
