import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ServiceHero } from "@/components/services/ServiceHero";
import { SERVICES, imageFor, type Service } from "@/lib/data/services";
import { PILLARS, type Pillar } from "@/lib/data/pillars";

// Every one of the 16 known slugs is prerendered at build time. An
// unknown slug still resolves this route (dynamicParams defaults to
// true) and falls through to the notFound() call below rather than
// 404ing before the page even runs.
export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} — Assertive Brand Communications`,
    description: service.blurb,
  };
}

/*
 * THE ONE SERVICE-PAGE TEMPLATE. All 16 services render through this same
 * file; the per-service delta is entirely in services.ts (name, blurb,
 * description, pillar, and eventually image). Adding a 17th service or
 * changing a service's copy is a data edit here, never a new page.
 */
export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();
  const pillar = PILLARS.find((p) => p.id === service.pillar)!;
  // imageFor resolves the real photo once services.ts sets one; until then
  // it applies services.ts's temporary DEMO_SERVICE_IMAGE borrow. Shown
  // beside the description below, not in the hero - see ServiceHero.tsx.
  const image = imageFor(service);

  return (
    <>
      <Header />
      <main>
        {/*
          Only the plain-data fields, not the Pillar object itself -
          ServiceHero is a Client Component and Pillar.icon is a function
          (a LucideIcon), which cannot cross the server -> client boundary.
          See the PillarVisual comment in ServiceHero.tsx.
        */}
        <ServiceHero
          service={service}
          pillar={{ id: pillar.id, name: pillar.name, ink: pillar.ink, wash: pillar.wash }}
        />

        <Section as="section" className="bg-surface">
          <Container
            className={
              image
                ? "grid gap-10 lg:grid-cols-[420px_1fr] lg:items-center lg:gap-16"
                : undefined
            }
          >
            {image && (
              <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-card">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
              </Reveal>
            )}
            <Reveal delay={image ? 0.08 : 0} className={image ? undefined : "mx-auto max-w-[68ch]"}>
              <p className="text-body-lg text-ink-body">{service.description}</p>
            </Reveal>
          </Container>
        </Section>

        <RelatedServices current={service} pillar={pillar} />

        <Section as="section" className="bg-surface">
          <Container>
            <Reveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-h2 text-ink">Ready to talk about {service.name}?</h2>
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

// Weddings & Social has exactly one service (see services.ts), so this
// renders nothing there rather than a section with an empty grid under it.
function RelatedServices({ current, pillar }: { current: Service; pillar: Pillar }) {
  const others = SERVICES.filter((s) => s.pillar === pillar.id && s.slug !== current.slug);
  if (others.length === 0) return null;

  return (
    <Section as="section" className="bg-surface">
      <Container>
        <Reveal>
          <Eyebrow className={pillar.ink}>Also in {pillar.name}</Eyebrow>
          <h2 className="text-h2 mt-4 text-ink">Related Services</h2>
        </Reveal>
        <Reveal delay={0.08} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col rounded-lg bg-surface-raised p-6 shadow-card transition-[translate,box-shadow] duration-[var(--dur-base)] ease-out-expo hover:-translate-y-1 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
            >
              <span aria-hidden="true" className={`h-1 w-8 rounded-full ${pillar.mark}`} />
              <span className="text-h3 mt-4 text-ink">{s.name}</span>
              <span className="text-small mt-2 text-ink-body">{s.blurb}</span>
              <span
                className={`mt-auto inline-flex items-center gap-1.5 pt-5 font-medium ${pillar.ink}`}
              >
                Learn more
                <ArrowRight
                  size={14}
                  aria-hidden="true"
                  className="transition-transform duration-[var(--dur-base)] ease-out-expo group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
