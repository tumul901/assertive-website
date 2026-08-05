import Image from "next/image";
import { CLIENTS } from "@/lib/data/clients";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

/*
 * PLAN.md Phase 4. A raised card overlapping the boundary between the
 * hero sequence and the next section, so proof appears immediately as
 * the intro hands off.
 *
 * Each logo sits in its own small "chip" - see the --color-chip /
 * --color-chip-border tokens in tokens.css. This is not decorative: the
 * five real extracted logo PNGs (public/media/clients) were dechromed
 * from solid-white-background originals (tools/dechrome-client-logos.mjs,
 * an edge flood-fill that leaves enclosed white - e.g. News18's white
 * "18" - untouched while clearing the background), and at least one of
 * them (Reliance) uses dark serif text that is close to unreadable once
 * the surrounding card goes dark in the theme system. The chip keeps
 * every logo on the same near-white ground it was designed for,
 * regardless of site theme - client artwork was never made to be
 * theme-aware, so the fix has to live in the container, not the asset.
 */
export function TrustBar() {
  return (
    <div className="relative z-10 px-6 lg:px-10">
      <Reveal className="mx-auto -mt-16 w-full max-w-[1180px]">
        <div className="flex flex-col items-center gap-6 rounded-lg bg-surface-raised px-6 py-8 shadow-bar sm:flex-row sm:gap-10 sm:px-10">
          <Eyebrow className="shrink-0 text-center sm:text-left">Trusted by</Eyebrow>

          <span
            className="hidden h-10 w-px shrink-0 bg-hairline sm:block"
            aria-hidden="true"
          />

          <ul className="grid w-full grid-cols-2 items-center gap-4 sm:flex sm:flex-1 sm:flex-wrap sm:justify-between sm:gap-6">
            {CLIENTS.map((client) => (
              <li key={client.name} className="flex justify-center">
                <div className="flex h-20 w-full items-center justify-center rounded-md border border-chip-border bg-chip px-4 sm:w-auto sm:min-w-[136px]">
                  {/*
                    h-14 against a 90px-tall source is a 0.62x downscale, so
                    these are still being shrunk, not enlarged - there was a
                    lot of headroom at the old h-8 (0.36x).

                    WHAT THIS DOES NOT FIX. object-contain fits the whole
                    140x90 CANVAS, and the five files carry very different
                    amounts of transparent padding: measured ink fills 53%
                    of the canvas height for News18 and 93% for Reliance,
                    with the other three at 59-64%. So identical boxes still
                    render Reliance about 1.8x larger than News18 optically.
                    Growing the box scales that mismatch up rather than
                    curing it. The real fix is to re-crop the source files
                    to their ink, which is an asset change and wants a look
                    at the result per logo, not a blind script run.
                  */}
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={140}
                    height={90}
                    sizes="140px"
                    className="h-14 w-auto object-contain"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
