import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { FAQ as ITEMS } from "@/lib/data/faq";

/*
 * BUILT ON <details>/<summary>, NOT ON A useState DISCLOSURE.
 *
 * This section ships zero client JavaScript, and that is the point rather
 * than a nice side effect. Everything a hand-rolled accordion has to
 * implement and keep correct - Enter and Space, focus, aria-expanded
 * wired to aria-controls, the expanded state exposed to assistive tech -
 * the element already does, in every browser, and cannot drift from. It
 * also means browser find-in-page can open a collapsed answer to show a
 * match, which no JS accordion on this site would do.
 *
 * The no-JS story is the same argument from the other end. Compare what
 * the accordion gallery two sections up needed: a bespoke noscript
 * stylesheet in layout.tsx, undoing three separate JS-dependent states,
 * found only by rendering the page with javaScriptEnabled:false. This
 * section needs nothing. It is already correct.
 *
 * NOT AN EXCLUSIVE ACCORDION. Giving every <details> the same `name`
 * attribute would make the browser close the others for free, and it was
 * tempting for the tidiness. It is not used because closing an item that
 * sits ABOVE the viewport yanks the page under the reader - a real
 * scroll jump, caused by content the user was not looking at. Several
 * answers open at once costs nothing here; these are short.
 *
 * The first item is open on load so the section does not read as six
 * closed bars, and so there is real answer text in the initial paint.
 */

/*
 * The open/close animation is CSS-only and lives in globals.css keyed off
 * this class. ::details-content is not supported everywhere yet (Firefox
 * has no implementation at time of writing), so this is progressive
 * enhancement in the strict sense: where it is missing the panel snaps
 * open, which is exactly what a <details> has always done.
 */
const ITEM = "faq-item group border-b border-hairline";

export function FAQ() {
  /*
   * FAQPage structured data, generated from the same array that renders,
   * so the two cannot describe different answers.
   *
   * HONEST NOTE ON WHAT THIS DOES AND DOES NOT BUY: Google restricted FAQ
   * rich results in 2023 to well-known government and health sites, so do
   * not expect expandable Q&A in Google's SERP from this. It is here
   * because it is still correct, machine-readable description of the page
   * for everything else that reads schema.org - Bing, and the answer
   * engines that increasingly source from it - and it costs one script
   * tag generated from data we already have.
   *
   * Google's own requirement that the answer be visible on the page is
   * met: every answer is in the DOM at load, collapsed rather than
   * withheld.
   */
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
    // Escaping < is the standard defence against a stray "</script>" inside
    // string content ending the tag early. Nothing in faq.ts contains one
    // today; this is so nothing has to remember that when editing it.
  }).replace(/</g, "\\u003c");

  return (
    <Section as="section" id="faq" className="bg-surface">
      <Container>
        {/*
          Narrower than the page grid on purpose. An FAQ is read as prose,
          and a question set on a 1360px row scans as a menu bar rather
          than as something to read.
        */}
        <div className="mx-auto max-w-[820px]">
          <Reveal className="text-center">
            {/* Plain, not clever. Every other h2 on this page is
                descriptive title case - "Selected Events", "What Our
                Clients Say About Us" - and an oblique one here would be
                the only heading a visitor has to decode. */}
            <Eyebrow className="text-corporate-ink">Good to know</Eyebrow>
            <h2 className="text-h2 mt-4 text-ink">Questions We Get Asked</h2>
          </Reveal>

          <Reveal delay={0.08} className="mt-12 border-t border-hairline">
            {ITEMS.map((item, i) => (
              <details key={item.id} className={ITEM} open={i === 0}>
                {/*
                  list-none plus the -webkit- rule removes the default
                  disclosure triangle: Chrome and Firefox drop it for
                  list-style-type:none, Safari needs its own pseudo-element
                  hidden. Both are required, neither is redundant.

                  py-5 on the summary rather than on a wrapper keeps the
                  whole row inside the click and focus target - a question
                  you can only open by hitting the text itself is a
                  needlessly small hit area on touch.
                */}
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink [&::-webkit-details-marker]:hidden">
                  <h3 className="text-h3 text-ink">{item.q}</h3>
                  <Plus
                    size={20}
                    aria-hidden="true"
                    className="shrink-0 text-corporate-ink transition-transform duration-[var(--dur-base)] ease-out-expo group-open:rotate-45"
                  />
                </summary>
                {/*
                  pb lives on this inner element, not on ::details-content.
                  The animation collapses that pseudo-element's block-size
                  to 0, and padding on the thing being collapsed would
                  either be animated away too or leave a gap at height 0.
                */}
                <p className="text-body max-w-[62ch] pb-6 text-ink-body">{item.a}</p>
              </details>
            ))}

            <p className="text-body mt-10 text-ink-body">
              Anything else, ask directly.{" "}
              <Link
                href="#enquiry"
                className="inline-flex items-center gap-1.5 font-medium text-ink underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
              >
                Send an enquiry
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </p>
          </Reveal>
        </div>
      </Container>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </Section>
  );
}
