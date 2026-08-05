import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

// Vertical section rhythm: clamp(64px, 8vw, 128px) padding-block
// (PLAN.md section 2.8). Deliberately does NOT nest a Container inside -
// some sections (the Hero) need content to bleed to the viewport edge,
// so callers compose <Section><Container>...</Container></Section>
// themselves when they want the standard gutters.
export function Section({
  children,
  className,
  id,
  as: Tag = "section",
}: {
  children: ReactNode;
  className?: string;
  /** In-page anchor target, e.g. the FAQ's link down to the enquiry form. */
  id?: string;
  as?: ElementType;
}) {
  return (
    <Tag id={id} className={cn("py-[clamp(64px,8vw,128px)]", className)}>
      {children}
    </Tag>
  );
}
