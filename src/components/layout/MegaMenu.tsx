"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { PILLARS } from "@/lib/data/pillars";
import { cn } from "@/lib/utils";
import { useDropdown } from "@/lib/use-dropdown";

/*
 * FIVE DISCIPLINES, AND NOTHING UNDER THEM. This menu used to be five
 * columns of capabilities - twenty-one names spread across five headings,
 * most of them repeated in two or three columns because a capability is
 * genuinely sold under more than one discipline (see services.ts). It was
 * accurate and it was unreadable: the widest thing on the page, mostly
 * duplicates, and it asked a reader to pick a capability before they had
 * picked a discipline.
 *
 * The capabilities did not disappear - every one of them is on every
 * discipline page now, as the pill cloud in ServicePills. So this menu
 * answers only the question it is actually good at ("which kind of work?")
 * and hands off the rest to a page with room for it.
 *
 * Opens on hover and on focus/click, same as before.
 */
export function MegaMenu() {
  const { open, rootProps, triggerProps, closeNow } = useDropdown();

  return (
    <div className="relative" {...rootProps}>
      <button
        type="button"
        className="text-base inline-flex items-center gap-1 font-medium text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
        {...triggerProps}
      >
        Services
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={cn("transition-transform duration-[var(--dur-fast)]", open && "rotate-180")}
        />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 mt-3 w-[min(92vw,440px)] -translate-x-1/2 rounded-lg border border-hairline bg-surface-raised p-3 shadow-bar">
          <ul>
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <li key={pillar.id}>
                  <Link
                    href={`/services/${pillar.id}`}
                    onClick={closeNow}
                    className="group flex gap-3.5 rounded-md p-3 transition-colors duration-[var(--dur-fast)] hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ outlineColor: `var(--color-${pillar.id}-ink)` }}
                  >
                    {/* Icon carries the pillar colour; the NAME does not.
                        Pillars.tsx logs the measurement - four of the five
                        pillar inks fail body-text contrast at small sizes,
                        and this is small text on a raised surface. */}
                    <Icon
                      size={20}
                      aria-hidden="true"
                      className={cn("mt-0.5 shrink-0", pillar.ink)}
                    />
                    <span className="min-w-0">
                      <span className="text-base flex items-center gap-1.5 font-semibold text-ink">
                        {pillar.name}
                        <ArrowRight
                          size={13}
                          aria-hidden="true"
                          className={cn(
                            "shrink-0 opacity-0 transition-[opacity,transform] duration-[var(--dur-base)] ease-out-expo group-hover:translate-x-0.5 group-hover:opacity-100",
                            pillar.ink,
                          )}
                        />
                      </span>
                      <span className="text-small mt-0.5 block text-ink-body">{pillar.blurb}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-1 border-t border-hairline pt-1">
            <Link
              href="/services"
              onClick={closeNow}
              className="text-small group flex items-center gap-1.5 rounded-md p-3 font-medium text-ink transition-colors duration-[var(--dur-fast)] hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
            >
              Everything we run in-house
              <ArrowRight
                size={13}
                aria-hidden="true"
                className="transition-transform duration-[var(--dur-base)] ease-out-expo group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
