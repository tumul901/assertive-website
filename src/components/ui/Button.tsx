import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline";

export interface ButtonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

// outline + outline-offset draws the focus ring OUTSIDE the element, on
// the page background - so corporate-ink (4.53:1 on surface, PLAN.md
// section 2.3) stays a valid ring colour for every variant regardless of
// that variant's own fill.
const base =
  "group inline-flex items-center gap-2 font-medium transition-colors duration-[var(--dur-fast)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink";

const variants: Record<Variant, string> = {
  primary: "rounded-md bg-corporate-fill px-6 py-3 text-white hover:bg-corporate-ink",
  secondary: "text-ink",
  outline: "rounded-md border border-hairline px-5 py-2.5 text-ink hover:border-ink",
};

export function Button({
  variant = "primary",
  children,
  className,
  href,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  const content = (
    <>
      {variant === "secondary" ? (
        <span className="relative">
          {children}
          <span
            className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-[var(--dur-fast)] group-hover:scale-x-100"
            aria-hidden="true"
          />
        </span>
      ) : (
        children
      )}
      {variant === "primary" && (
        <span
          className="inline-block transition-transform duration-[var(--dur-fast)] ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          &#8599;
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
