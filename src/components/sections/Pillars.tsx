import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { PILLARS, type Pillar } from "@/lib/data/pillars";

/*
 * PLAN.md Phase 5. Left intro column + a card per pillar, mapped from
 * PILLARS - never hardcoded, so a sixth pillar or a renamed one needs no
 * change here.
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
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-3">
          <Eyebrow className="text-corporate-ink">What we do</Eyebrow>
          <h2 className="text-h2 mt-4 text-ink">Services That Drive Impact</h2>
          <p className="text-body-lg mt-4 max-w-[42ch] text-ink-body">
            From large-scale events to brand activations, we create
            experiences that connect brands with people.
          </p>
          <Link
            href="/services"
            className="mt-6 inline-flex items-center gap-1.5 font-medium text-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
          >
            View All Services
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3 xl:grid-cols-5">
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
        <span className="text-h3 mt-5 text-ink">{pillar.name}</span>
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
