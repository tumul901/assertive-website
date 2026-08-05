import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// 12-column grid, max-width 1440px, gutter 24px mobile / 40px >=1024px
// (PLAN.md section 2.8).
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto w-full max-w-[1440px] px-6 lg:px-10", className)}>{children}</div>;
}
