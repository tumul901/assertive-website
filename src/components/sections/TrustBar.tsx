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
                {/*
                  Sizes are NOT monotonic with viewport, and that is not a
                  typo. The eyebrow, divider and gaps eat a fixed ~190px out
                  of the row, and the bar is capped at max-w-1180 - so the
                  tightest layout is not mobile, it is the sm-to-lg row.
                  Measured space for the five chips: 673px at 1024, but
                  909px at 1280 and above (where the cap makes it constant).
                  Mobile is a 2-column grid with no eyebrow beside it, so it
                  has room for the big size too.

                  At 1024 that allows ~115px per chip; anything larger wraps
                  to a second row and doubles the bar's height - it went to
                  296px before this was split, which is how the wrap was
                  caught.
                */}
                <div className="flex h-26 w-full items-center justify-center rounded-md border border-chip-border bg-chip px-4 sm:h-20 sm:w-auto sm:min-w-[112px] xl:h-26 xl:min-w-[160px]">
                  {/*
                    h-20 against a 90px-tall source is 0.89x - very close to
                    1:1, and that is the ceiling. Past 90px these start
                    being upscaled and will soften, the same trap work.ts
                    documents for the event photography. If they need to be
                    bigger than this, the answer is higher-resolution logo
                    files from the client, not a larger number here.

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
                    className="h-20 w-auto object-contain sm:h-12 xl:h-20"
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
