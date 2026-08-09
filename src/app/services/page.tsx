import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SERVICES, servicesIn } from "@/lib/data/services";
import { PILLARS, type Pillar } from "@/lib/data/pillars";

/*
 * THE HUB, NOT THE CATALOGUE. This page used to be five anchored sections,
 * each holding a grid of capability cards - which made it a second copy of
 * the mega menu, at the same length, and it was the only thing standing
 * between a reader and the capability pages themselves.
 *
 * There are five capability pages now (see /services/[slug]), each showing
 * the whole catalogue as a pill cloud, so this page's job shrank to the
 * one thing a hub is for: which of the five do you want. The footer used
 * to link /services#<pillar-id> and those anchors are why every section
 * here once carried an id - it links straight to /services/<pillar-id>
 * now, so the anchors went with the sections.
 *
 * The hero keeps the client's own framing - "one-stop solution", first
 * item on the list they supplied, given with the reason attached: because
 * clients love one vendor. It is not a capability and has no page of its
 * own; it is the argument the five below are the evidence for.
 */

export const metadata: Metadata = {
  title: "Services — Assertive Brand Communications",
  description:
    "One vendor for every moving part of an event - creative, fabrication, production, AV, LED, registration, travel, hotels, photography and more, run in-house.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <Section as="section" className="bg-surface">
          <Container>
            <Reveal className="max-w-[46ch]">
              <Eyebrow className="text-corporate-ink">What we do</Eyebrow>
              <h1 className="text-display mt-4 text-ink">One vendor. Every moving part.</h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-body-lg mt-6 max-w-[62ch] text-ink-body">
                Clients would rather brief one team than five, and that is the
                whole argument for the pages below. The idea, the build, the
                show, the guest list and the footage are all run in-house -
                one contract, one point of contact, and nobody standing in
                the venue explaining that this part is someone else&#39;s
                scope.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              {/* COUNTED, not written out - see HeroSequence's closing
                  beat, which logs why. A numeral cannot go stale when the
                  list changes length; the word it replaced did. */}
              <p className="text-body-lg mt-4 max-w-[62ch] text-ink-body">
                Pick the discipline closest to your brief. All{" "}
                {SERVICES.length} capabilities are on every one of the five
                pages, because the discipline you came in through does not
                change what we can put on the quote.
              </p>
            </Reveal>

            <Reveal delay={0.24} className="mt-9">
              <Button href="/#enquiry" variant="primary">
                Send an Enquiry
              </Button>
            </Reveal>
          </Container>
        </Section>

        <Section as="section" className="bg-surface">
          <Container>
            <Reveal className="grid gap-6 md:grid-cols-2">
              {PILLARS.map((pillar) => (
                <DisciplineCard key={pillar.id} pillar={pillar} />
              ))}
            </Reveal>
          </Container>
        </Section>

        <Section as="section" className="bg-surface">
          <Container>
            <Reveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-h2 text-ink">
                  Not sure which of these you need?
                </h2>
                <p className="text-body-lg mt-3 max-w-[52ch] text-ink-body">
                  Most briefs arrive as an event, not a shopping list. Tell us
                  what you have in mind and we will tell you what it actually
                  takes.
                </p>
              </div>
              <Button href="/#enquiry" variant="primary">
                Send an Enquiry
              </Button>
            </Reveal>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

/*
 * The card names the capabilities this discipline LEANS ON HARDEST, not
 * all of them - servicesIn(), the editorial subset services.ts explains at
 * length. Naming all twenty-one here would print the same list on all five
 * cards and make the choice between them meaningless, which is the exact
 * failure that file's comment warns about. The full list is one click away
 * on the page itself.
 */
function DisciplineCard({ pillar }: { pillar: Pillar }) {
  const leans = servicesIn(pillar.id);
  const Icon = pillar.icon;

  return (
    <Link
      href={`/services/${pillar.id}`}
      className="group flex flex-col rounded-lg bg-surface-raised p-7 shadow-card transition-[translate,box-shadow] duration-[var(--dur-base)] ease-out-expo hover:-translate-y-1 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 sm:p-8"
      style={{ outlineColor: `var(--color-${pillar.id}-ink)` }}
    >
      <span aria-hidden="true" className={`h-1 w-10 rounded-full ${pillar.mark}`} />
      <span className="mt-5 flex items-center gap-3">
        <Icon size={24} aria-hidden="true" className={pillar.ink} />
        <span className="text-h3 text-ink">{pillar.name}</span>
      </span>
      <span className="text-body mt-3 max-w-[46ch] text-ink-body">{pillar.blurb}</span>

      <span className="mt-6 flex flex-wrap gap-2">
        {leans.map((service) => (
          <span
            key={service.slug}
            className="text-sm inline-block rounded-full border px-3 py-1 text-ink-body"
            style={{
              borderColor: `color-mix(in oklab, var(--color-${pillar.id}-mark) 45%, transparent)`,
            }}
          >
            {service.name}
          </span>
        ))}
      </span>

      {/* Label is --color-ink, arrow takes the pillar colour. Pillars.tsx
          logs the measurement - four of the five pillar inks fail
          body-text contrast at small sizes on surface-raised. */}
      <span className="mt-auto inline-flex items-center gap-1.5 pt-7 font-medium text-ink">
        Explore {pillar.name}
        <ArrowRight
          size={14}
          aria-hidden="true"
          className={`transition-transform duration-[var(--dur-base)] ease-out-expo group-hover:translate-x-1 ${pillar.ink}`}
        />
      </span>
    </Link>
  );
}
