import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { DisciplineHero } from "@/components/services/DisciplineHero";
import { ServicePills } from "@/components/services/ServicePills";
import { SERVICES, primaryPillar } from "@/lib/data/services";
import { PILLARS, type Pillar } from "@/lib/data/pillars";

/*
 * FIVE PAGES, NOT TWENTY-ONE. This route used to be /services/[service] -
 * one page per capability, each one a title, a paragraph and a grid of
 * links to its siblings. That is a lot of pages carrying one paragraph
 * each, and it split the one-vendor argument across twenty-one URLs: a
 * reader on Photography had no way to see that we also build the set.
 *
 * The slug is a PillarId now, so the five URLs are /services/corporate,
 * /services/activation, /services/live, /services/content and
 * /services/weddings - the same ids the footer, the mega menu and the
 * homepage wheel already use, and the same ids the colour tokens and the
 * petals in the logo mark are keyed on. Each page carries the WHOLE
 * capability list as a floating pill cloud (ServicePills), with the
 * discipline's own capabilities leading it in the discipline's colour.
 *
 * THE OLD PER-CAPABILITY URLS STILL RESOLVE, in the one place that can
 * still tell them apart from a typo: this route, below, where a slug that
 * is not a pillar gets checked against SERVICES before 404ing. They land
 * on /services/<primary pillar>#<slug>, which opens that capability's own
 * copy in the pill cloud - the same words at a different address rather
 * than a dead end. Kept here instead of in next.config redirects so the
 * mapping lives next to the data that defines it and cannot drift from it.
 */

export function generateStaticParams() {
  return PILLARS.map((pillar) => ({ slug: pillar.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const pillar = PILLARS.find((p) => p.id === slug);
  if (!pillar) return {};
  return {
    title: `${pillar.name} — Assertive Brand Communications`,
    description: pillar.blurb,
  };
}

export default async function DisciplinePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const pillar = PILLARS.find((p) => p.id === slug);
  if (!pillar) {
    // An old /services/<capability> URL, not a typo - forward it to the
    // discipline that carries that capability, with its pill pre-opened.
    const service = SERVICES.find((s) => s.slug === slug);
    if (service) redirect(`/services/${primaryPillar(service)}#${service.slug}`);
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        {/*
          Only the plain-data fields, not the Pillar object itself -
          DisciplineHero is a Client Component and Pillar.icon is a
          function (a LucideIcon), which cannot cross the server -> client
          boundary. See the PillarVisual comment in DisciplineHero.tsx.
        */}
        <DisciplineHero
          pillar={{
            id: pillar.id,
            name: pillar.name,
            intro: pillar.intro,
            ink: pillar.ink,
            wash: pillar.wash,
          }}
        />

        {/*
          The tinted band is what makes this read as the discipline's own
          page rather than a generic one. `pillar.wash` is a whole literal
          class string from pillars.ts, not a constructed one - Tailwind
          finds classes by scanning source text and cannot resolve
          `bg-${id}-wash`. Both themes define the wash token, so this is a
          light tint on light and a raised dark tint on dark.
        */}
        <Section as="section" className={pillar.wash}>
          <Container>
            <Reveal className="mx-auto max-w-[62ch] text-center">
              <Eyebrow className={pillar.ink}>Capabilities</Eyebrow>
              {/*
                COUNTED, not written out - the same rule HeroSequence's
                closing beat follows. This read a fixed number for as long
                as the list was that length and stayed reading it after
                the list changed. A numeral cannot go stale.
              */}
              <h2 className="text-h2 mt-4 text-ink">
                All {SERVICES.length} of them, on this page
              </h2>
              <p className="text-body-lg mt-5 text-ink-body">
                Everything below is run in-house, whichever discipline you
                came in through. The ones {pillar.name} leans on hardest come
                first. Tap any of them to see what it covers.
              </p>
            </Reveal>

            <div className="mt-12">
              <ServicePills pillarId={pillar.id} />
            </div>
          </Container>
        </Section>

        <OtherDisciplines current={pillar} />

        <Section as="section" className="bg-surface">
          <Container>
            <Reveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-h2 text-ink">Ready to talk about {pillar.name}?</h2>
                <p className="text-body-lg mt-3 max-w-[46ch] text-ink-body">
                  Tell us what you have in mind and you will get a straight answer, not a
                  template.
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

// The other four, always - this replaced "Related Services", which listed
// sibling capabilities and could be empty. Four peers is a fixed, non-empty
// set, so no guard is needed and the row never renders as a heading over
// nothing.
function OtherDisciplines({ current }: { current: Pillar }) {
  const others = PILLARS.filter((p) => p.id !== current.id);

  return (
    <Section as="section" className="bg-surface">
      <Container>
        <Reveal>
          <Eyebrow className={current.ink}>The rest of the wheel</Eyebrow>
          <h2 className="text-h2 mt-4 text-ink">Other Disciplines</h2>
        </Reveal>
        <Reveal delay={0.08} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.id}
                href={`/services/${p.id}`}
                className="group flex flex-col rounded-lg bg-surface-raised p-6 shadow-card transition-[translate,box-shadow] duration-[var(--dur-base)] ease-out-expo hover:-translate-y-1 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ outlineColor: `var(--color-${p.id}-ink)` }}
              >
                <span aria-hidden="true" className={`h-1 w-8 rounded-full ${p.mark}`} />
                <Icon size={22} aria-hidden="true" className={`mt-4 ${p.ink}`} />
                <span className="text-h3 mt-3 text-ink">{p.name}</span>
                <span className="text-small mt-2 text-ink-body">{p.blurb}</span>
                {/* Label is --color-ink, arrow takes the pillar colour. Not
                    a style preference: Pillars.tsx logs the measurement -
                    four of the five pillar inks fail body-text contrast at
                    small sizes on surface-raised, which is the same ground
                    and the same size as this. */}
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-medium text-ink">
                  Explore
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    className={`transition-transform duration-[var(--dur-base)] ease-out-expo group-hover:translate-x-1 ${p.ink}`}
                  />
                </span>
              </Link>
            );
          })}
        </Reveal>
      </Container>
    </Section>
  );
}
