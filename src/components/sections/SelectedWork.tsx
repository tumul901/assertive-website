import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import AccordionGallery from "@/components/ui/AccordionGallery";
import { WORK } from "@/lib/data/work";

/*
 * PLAN.md Phase 6. An expanding accordion gallery (React Bits, vendored at
 * components/ui/AccordionGallery.tsx) in place of the previous bento grid,
 * which itself replaced the legacy thumbnail carousel.
 *
 * WHAT THIS SECTION GAVE UP, on purpose. The bento cards carried a pillar
 * chip, the title, the client and a one-line note each. An accordion panel
 * has room for one line of type, so the chip and the note are gone from
 * this section - the note now lives only on /work/[slug], and the pillar
 * taxonomy is already established by the Pillars section directly above.
 * The CLIENT names were the one thing worth fighting for on an agency page
 * (News18, Cleartrip, IVM Podcasts are the whole credibility claim), so
 * they ride along in the label; see LABEL below.
 *
 * THE NUMBERS BELOW ARE MEASURED, NOT PICKED. Every photo in work.ts is
 * 370x351 native and that file's header puts the softening point around
 * 420 CSS px. The gallery does not scale its image to the panel - it sizes
 * one fixed media box, `usable * expandRatio * 1.22`, and lets each panel
 * crop it. So the upscale is set by expandRatio and height together, and
 * it is worth doing the arithmetic before touching either:
 *
 *   Container inner at 1440       1360px  (max-w-1440, px-10)
 *   usable = inner - gap*(n-1)    1320px
 *   media box = 1320*0.40*1.22     644px
 *   upscale = max(644/370, 420/351) = 1.74x
 *
 * For reference the bento this replaced ran 1.81x on its wide pair, and
 * the carousel before that 2.54x. Raising expandRatio to the component's
 * 0.52 default would put it back at 2.26x - worse than either. The
 * grayscale treatment on inactive panels also hides softness well, which
 * is a reason to keep `grayscale` on beyond the look of it.
 *
 * This is still mitigation, not a fix. Real high-res masters remain a
 * launch blocker (Appendix A) - do not keep shrinking things instead.
 *
 * At 0.40 the active panel takes 40% of the row (528px) against 198px for
 * each of the other four: enough contrast to read as "one open, four
 * closed" without the closed ones becoming unrecognisable slivers.
 */
const EXPAND_RATIO = 0.4;
const HEIGHT = 420;

/*
 * defaultIndex 1 = Agenda Paschim / News18. What a visitor sees before
 * they touch anything, so it should be the strongest single credential in
 * the set - and this one is corroborated by a named testimonial in
 * PLAN.md 3.4 rather than only by its own caption.
 */
const DEFAULT_INDEX = 1;

/*
 * LABEL: an em dash, not a middot or a bullet. The component reuses this
 * one string for BOTH the visible caption and the link's aria-label (the
 * caption span is aria-hidden), so it has to survive being read aloud.
 * Screen readers pause on an em dash; they announce "middle dot".
 */
const label = (title: string, client: string | null) =>
  client ? `${title} — ${client}` : title;

export function SelectedWork() {
  const items = WORK.map((item) => ({
    image: item.image,
    alt: item.alt,
    label: label(item.title, item.client),
    link: `/work/${item.slug}`,
  }));

  return (
    <Section as="section" className="bg-surface">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow className="text-corporate-ink">Our work</Eyebrow>
            <h2 className="text-h2 mt-4 text-ink">Selected Events</h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 font-medium text-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
          >
            View All Work
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <Reveal className="mt-10">
          <AccordionGallery
            items={items}
            defaultIndex={DEFAULT_INDEX}
            expandRatio={EXPAND_RATIO}
            height={HEIGHT}
            trigger="hover"
            grayscale
            /*
             * The overlay has to stay dark in BOTH themes - white caption
             * type sits on it - so it cannot be built from surface/ink,
             * which invert. --color-footer-bg is the one "deep" in the
             * token set that is dark either way (17% light / 12% dark),
             * which is exactly the property needed here. accentColor and
             * textColor stay white for the same reason: they are on
             * photography, not on the page.
             */
            overlayColor="var(--color-footer-bg)"
            /*
             * The component writes `height` as an inline style, so this is
             * the only way to make it responsive - an important utility
             * beats a non-important inline declaration. 520px is the
             * component's own breakpoint for switching to a stacked
             * column; at 420px tall a five-panel stack leaves the open
             * panel just 84px, i.e. no visible accordion at all. 608px
             * gives it 232px against 84px for the four closed ones.
             */
            className="max-[520px]:!h-[38rem]"
          />
        </Reveal>
      </Container>
    </Section>
  );
}
