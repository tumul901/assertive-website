import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { PILLARS, type Pillar } from "@/lib/data/pillars";

/*
 * PLAN.md Phase 5. A card per pillar, mapped from PILLARS - never
 * hardcoded, so a sixth pillar or a renamed one needs no change here.
 *
 * THE INTRO IS ABOVE THE CARDS, not beside them, and that is a departure
 * from Phase 5's "left intro column" for a measured reason. With the intro
 * at lg:col-span-3, the five cards shared col-span-9 - 1012px at the
 * container's 1440px cap, so 186px per card and 138px of text inside the
 * p-6. "Entertainment" sets at 161px in text-h3, so the title was CLIPPED
 * (the card is overflow-hidden for its rounded corners, which turns the
 * overflow into a silent cut rather than a visible spill). It clipped at
 * every desktop width; at 1280 four of the five titles did.
 *
 * That is not fixable by nudging the split. Fitting the word needs 209px
 * cards, which needs col-span-10, which leaves the intro 200px - narrower
 * than its own h2 wants. Full container width gives 256px cards at 1440
 * and 224px at 1280, both clear, and the blurbs stop setting 2-3 words to
 * a line. Five across also survives, which is worth keeping: five equal
 * cards is the same count as the five petals of the mark.
 *
 * The header block is deliberately the same shape as SelectedWork's -
 * heading left, "View All" right - since they are now the same kind of
 * section.
 *
 * DO NOT colour the "Explore" label. Section 2.5's link-colour rule:
 * four of the five pillar inks fail body-text contrast at small sizes
 * against surface-raised, verified during the Phase 1 palette pass. The
 * label stays --color-ink; only the mark rule, icon and arrow take the
 * pillar's own colour, all of which were solved to a 3:1 (mark) or
 * 4.5:1 (ink) target specifically because they are NOT the primary
 * reading text.
 */
export function Pillars() {
  return (
    <Section as="section" className="bg-surface">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow className="text-corporate-ink">What we do</Eyebrow>
            <h2 className="text-h2 mt-4 text-ink">Services That Drive Impact</h2>
            <p className="text-body-lg mt-4 max-w-[52ch] text-ink-body">
              From large-scale events to brand activations, we create
              experiences that connect brands with people.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 font-medium text-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
          >
            View All Services
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.id} delay={i * 0.08}>
              <PillarCard pillar={pillar} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function PillarCard({ pillar }: { pillar: Pillar }) {
  const Icon = pillar.icon;
  return (
    <Link
      href={`/services#${pillar.id}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-lg bg-surface-raised shadow-card transition-[transform,box-shadow] duration-[var(--dur-base)] ease-in-out hover:-translate-y-1 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2"
      style={{ outlineColor: `var(--color-${pillar.id}-ink)` }}
    >
      <span className={`h-1 w-full shrink-0 ${pillar.mark}`} aria-hidden="true" />
      <span className="flex flex-1 flex-col p-6">
        <span className="inline-block w-fit transition-transform duration-[var(--dur-base)] ease-out-expo group-hover:scale-[1.08]">
          <Icon size={28} aria-hidden="true" className={pillar.ink} />
        </span>
        {/* hyphens-auto is the safety net, not the fix - the widths above
            already clear the longest current name. It is here so that a
            pillar renamed to something longer breaks across lines instead
            of being silently cut off by the card's overflow-hidden, which
            is exactly how the last one went unnoticed. Needs a lang to
            hyphenate against; <html lang="en"> supplies it. */}
        <span className="text-h3 mt-5 hyphens-auto text-ink">{pillar.name}</span>
        <span className="text-small mt-2 text-ink-body">{pillar.blurb}</span>
        {/* mt-auto pins Explore to the bottom of the flex-col card
            regardless of blurb length - Weddings & Social's one-line
            blurb and Corporate & MICE's two-line one otherwise land
            Explore at different heights, breaking row alignment. */}
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-medium text-ink">
          Explore
          <ArrowRight
            size={16}
            aria-hidden="true"
            className={`transition-transform duration-[var(--dur-base)] ease-out-expo group-hover:translate-x-1 ${pillar.ink}`}
          />
        </span>
      </span>
    </Link>
  );
}
