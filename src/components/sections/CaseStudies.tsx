import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyCarousel } from "@/components/ui/CaseStudyCarousel";
import { WORK } from "@/lib/data/work";

/*
 * Replaces the Selected Events accordion (PLAN.md Phase 6, now superseded).
 *
 * WHAT CHANGED AND WHY IT IS A DIFFERENT SECTION, not a restyle. The
 * accordion showed five photographs and one line of label each: it proved
 * the agency turns up at big events, which the Trust Bar directly above
 * already proves with client logos. It could not say what was actually
 * difficult about any of them. Challenge / Solution / Impact is the format
 * that answers the question a prospect is really asking, and it needs room
 * for prose - which is why this is one study at a time rather than five
 * across.
 *
 * THE COPY IS PLACEHOLDER. Every headline, problem, solution and impact
 * line in work.ts was written here to be replaced by the client's own. See
 * the block comment on WorkItem for the one rule that must survive the
 * handover: no numbers.
 *
 * NO "VIEW ALL WORK" LINK. The header used to carry one on the right, the
 * same shape Pillars' header has. It pointed at /work, which has never been
 * built - and unlike a missing sub-page it had nothing to promise anyway,
 * because the carousel below is already the whole of WORK rather than a
 * selection from it. So it advertised a bigger archive that does not exist
 * and 404d on the way there. If /work is ever built, bring the link back
 * with the justify-between row it used to sit in.
 */
export function CaseStudies() {
  return (
    <Section as="section" className="bg-surface">
      <Container>
        <div>
          <Eyebrow className="text-corporate-ink">Our work</Eyebrow>
          <h2 className="text-h2 mt-4 text-ink">Case Studies</h2>
          <p className="text-body-lg mt-4 max-w-[52ch] text-ink-body">
            The brief, what we built for it, and what it did on the night.
          </p>
        </div>

        {/*
         * Narrower than the Container it sits in, and that is deliberate on
         * two counts. A single card running the full 1440 sets the copy
         * column past 700px, well beyond a comfortable measure for three
         * stacked paragraphs. And the media column is a fraction of this
         * width, so capping it is what keeps the 370px source frames from
         * being upscaled further than the section this replaced already
         * upscaled them - see the note at the <Image> in the carousel.
         */}
        <Reveal className="mx-auto mt-10 max-w-[1180px]">
          <CaseStudyCarousel items={WORK} />
        </Reveal>
      </Container>
    </Section>
  );
}
