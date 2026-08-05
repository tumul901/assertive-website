"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { PILLARS } from "@/lib/data/pillars";
import { SERVICES } from "@/lib/data/services";
import { cn } from "@/lib/utils";
import { useDropdown } from "@/lib/use-dropdown";

// PLAN.md section 3A: 5 columns, one per pillar. Column header = pillar
// name in its ink colour with a 3px mark rule above. Services listed
// beneath as ink-coloured links. Opens on hover and on focus/click.
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
        <div className="absolute left-1/2 top-full z-50 mt-3 w-[min(90vw,880px)] -translate-x-1/2 rounded-lg border border-hairline bg-surface-raised p-8 shadow-bar">
          <div className="grid grid-cols-5 gap-6">
            {PILLARS.map((pillar) => {
              const services = SERVICES.filter((s) => s.pillar === pillar.id);
              return (
                <div key={pillar.id}>
                  <div className={cn("mb-3 h-[3px] w-8", pillar.mark)} />
                  <p className={cn("text-sm mb-3 font-semibold", pillar.ink)}>{pillar.name}</p>
                  <ul className="space-y-2">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className={`text-small ${cn("hover:underline", pillar.ink)}`}
                          onClick={closeNow}
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
