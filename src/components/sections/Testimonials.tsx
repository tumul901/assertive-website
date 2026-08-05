import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/data/testimonials";
import { PILLARS } from "@/lib/data/pillars";

/*
 * PLAN.md Phase 8. Static 3-column grid, never a carousel. Quotes are
 * verbatim from testimonials.ts (itself verbatim from the legacy site) -
 * do not trim or paraphrase.
 *
 * "Fixes a real bug in the current site: its testimonial cards render
 * the attribution block at inconsistent sizes and weights." Name and org
 * share ONE typography spec across all three cards below - text-h3/
 * font-semibold for the name is deliberately NOT used, since the legacy
 * bug was exactly that kind of per-card inconsistency; every card reads
 * the same two classes off the same two elements.
 */
export function Testimonials() {
  return (
    <Section as="section" className="bg-surface-raised">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <Eyebrow className="text-corporate-ink">What clients say</Eyebrow>
          <h2 className="text-h2 mt-4 text-ink">What Our Clients Say About Us</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => {
            const pillar = PILLARS.find((p) => p.id === t.pillar)!;
            return (
              <Reveal key={t.name} delay={i * 0.08} className="h-full">
                <figure className="flex h-full flex-col rounded-lg bg-surface p-8 shadow-card">
                  <Quote
                    size={32}
                    aria-hidden="true"
                    className={pillar.ink}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                  <blockquote className="text-body mt-5 flex-1 text-ink-body">
                    {t.quote}
                  </blockquote>
                  <div className="mt-6 border-t border-hairline pt-5">
                    <figcaption>
                      <span className="block font-semibold text-ink">{t.name}</span>
                      <span className="text-small block text-ink-muted">{t.org}</span>
                    </figcaption>
                  </div>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
