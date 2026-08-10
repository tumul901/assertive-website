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
    /*
      THE NAV TARGET, and it is on THIS element rather than on the card
      for a measured reason.

      "Clients" in the header and in the footer both resolve to
      /#trusted-by and land here. Renaming the id breaks both silently - a
      fragment matching nothing scrolls nowhere and throws nothing.

      WHY NOT ON THE CARD. The card is inside Reveal, which enters from
      translateY(24px). A fragment jump positions the target by its
      rendered box, transform included - so the browser scrolls to a card
      that is still sitting 24px low, the reveal then lifts it those 24px,
      and the clearance this scroll-mt was asked to reserve is exactly
      cancelled. Measured at 390px, with the id on the card: 24px of
      requested air became a 0.1px overlap with the header. Desktop hid it,
      because the header shrinks 110px -> 84px on the same scroll and hands
      back 26px by luck.

      This wrapper is outside Reveal, so it carries no transform - and the
      -mt-16 on the Reveal collapses through it, so its top is the card's
      top to the pixel (both measured at 71.9). Same landing point, immune
      to the entrance animation.

      scroll-mt clears the sticky header the way Enquiry's #enquiry target
      does, plus 24px so the card is not flush against the header edge.
    */
    <div
      id="trusted-by"
      className="relative z-10 scroll-mt-[calc(var(--header-h)+24px)] px-6 lg:px-10"
    >
      <Reveal className="mx-auto -mt-16 w-full max-w-[1180px]">
        <div className="flex flex-col items-center gap-6 rounded-lg bg-surface-raised px-6 py-8 shadow-bar sm:flex-row sm:gap-10 sm:px-10">
          <Eyebrow className="shrink-0 text-center sm:text-left">Trusted by</Eyebrow>

          <span
            className="hidden h-10 w-px shrink-0 bg-hairline sm:block"
            aria-hidden="true"
          />

          {/*
            A GRID, NOT flex-wrap + justify-between, and that swap is what
            makes a second row possible at all.

            With five logos the row never wrapped, so justify-between just
            spread them. At eight it wraps - and justify-between spaces
            each row by its OWN item count, so a 5+3 break renders three
            chips stretched across the full width under five tight ones,
            which reads as a layout error rather than as a second row.

            Fixed columns give both rows the same rhythm regardless of how
            many logos there are: two up on a phone, four from sm, so eight
            is 4+4 and a ninth would start a clean third row rather than
            re-spacing everything below it.
          */}
          <ul className="grid w-full flex-1 grid-cols-2 items-center gap-4 sm:grid-cols-4 sm:gap-5">
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
                <div className="flex h-26 w-full items-center justify-center rounded-md border border-chip-border bg-chip px-4 sm:h-20 xl:h-26">
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
                  {/*
                    max-w-full IS WHAT BALANCES THE ROW, and it is the one
                    class doing real work here.

                    h-* alone sets the height and lets the width follow the
                    aspect ratio, which is fine while every logo is roughly
                    as wide as it is tall. These are not: the eight run from
                    1.45:1 (Reliance) to 6.72:1 (Cloudflare), and at a fixed
                    80px height that last one wants 538px of width - four
                    times its chip, so it would either overflow or force the
                    column open and wreck the grid.

                    With a width cap and object-contain, each logo takes
                    whichever limit binds first: the compact marks hit the
                    height and fill their chip, the wide lockups hit the
                    width and settle shorter, centred, at their true aspect.
                    That is the correct outcome rather than a compromise -
                    a wordmark SHOULD read wider and shorter than a
                    roundel, and nothing is cropped or distorted either way.
                  */}
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    /* Chips are a quarter of an 1180px bar at the top end
                       and about half a phone at the bottom, so a single
                       fixed hint would over-fetch on one and under-fetch
                       on the other. */
                    sizes="(max-width: 640px) 45vw, 240px"
                    /* 88%, not full. A width-capped logo would otherwise
                       run right into the chip's px-4, while the compact
                       marks - which cap on HEIGHT and never reach the
                       sides - sit with obvious air around them. Measured
                       at 1440: Cloudflare filled all 185px of the inner
                       width while News18 used 90px of it, so the two chips
                       read as different treatments rather than as the same
                       one holding different logos. */
                    className="max-h-20 w-auto max-w-[88%] object-contain sm:max-h-12 xl:max-h-20"
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
