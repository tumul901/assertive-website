import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// PLAN.md section 2.7: text-eyebrow. Weight (500) and tracking (0.18em)
// come from the token itself (tokens.css --text-eyebrow--font-weight /
// --letter-spacing) - only uppercase needs a separate utility, text
// transform is not part of that companion-key cluster. Colour defaults
// to ink-muted, overridable per section (e.g. Phase 5 uses corporate-ink
// for the "WHAT WE DO" eyebrow).
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  // text-eyebrow is deliberately OUTSIDE cn()'s merge scope - see the
  // tailwind-merge warning in tokens.css. Passed through cn(), tailwind-
  // merge does not know text-eyebrow is a custom font-size token, treats
  // it as a text-COLOR utility (its fallback for any unrecognized
  // text-{word}), sees it "conflicting" with text-ink-muted, and silently
  // drops one of them - which is exactly what was happening here.
  return <p className={`text-eyebrow ${cn("text-ink-muted uppercase", className)}`}>{children}</p>;
}
