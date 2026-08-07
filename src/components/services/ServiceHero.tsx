"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PinwheelMark } from "@/components/brand/PinwheelMark";
import type { PillarId } from "@/lib/data/pillars";
import type { Service } from "@/lib/data/services";

/*
 * Deliberately NOT the `Pillar` type from pillars.ts. This component is
 * "use client", so `pillar` crosses the server -> client boundary as a
 * prop - and Pillar.icon is a LucideIcon (a function component), which
 * React cannot serialize across that boundary at all ("Functions cannot
 * be passed directly to Client Components"). This is the plain-data
 * subset ServiceHero actually reads; page.tsx builds one of these from a
 * real Pillar rather than passing the Pillar straight through.
 */
interface PillarVisual {
  id: PillarId;
  name: string;
  ink: string;
  wash: string;
}

/*
 * ONE HERO FORMAT, PER-SERVICE DATA. Every /services/[slug] page renders
 * this same component; the only thing that changes across all 16 is the
 * `service` and `pillar` passed in from page.tsx. Do not fork this
 * component per service - a copy difference belongs in services.ts, not
 * in a new variant of this file.
 */
export function ServiceHero({ service, pillar }: { service: Service; pillar: PillarVisual }) {
  return (
    <Section as="section" className="overflow-hidden bg-surface">
      {/*
        A centred PAIR, not a stretchy 1fr/420px grid. That was the actual
        problem the last version had: on a wide viewport, an `1fr` text
        column stretches edge to edge even though the text itself caps out
        at max-w-46ch, so the art ends up stranded near the right edge
        with a dead gap between it and the copy. justify-center keeps text
        and art sitting together as one group in the middle of the row
        instead of pinned to opposite sides of it.
      */}
      <Container className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-center lg:gap-16">
        <div className="lg:max-w-[480px]">
          <Reveal>
            <Eyebrow className={pillar.ink}>{pillar.name}</Eyebrow>
            <h1 className="text-display mt-4 text-ink">{service.name}</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-body-lg mt-6 max-w-[46ch] text-ink-body">{service.blurb}</p>
          </Reveal>
          <Reveal delay={0.16} className="mt-8">
            <Button href="/#enquiry" variant="primary">
              Enquire About This Service
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="w-full max-w-[320px] shrink-0 lg:max-w-[420px]">
          <HeroArt pillar={pillar} />
        </Reveal>
      </Container>
    </Section>
  );
}

/*
 * JUST THE MARK - no photo in this component. The photo lives beside the
 * description paragraph further down the page instead (see page.tsx and
 * imageFor() in services.ts): the hero pairs the title with the brand
 * mark, the description pairs the copy with a real photograph, and the
 * two do not share a box. An earlier version inset a photo into the mark
 * here and it did not read as intentional - two different pictures of
 * the same thing competing for one frame - so the pairing was split
 * across the two sections instead of layered into one.
 */
function HeroArt({ pillar }: { pillar: PillarVisual }) {
  const reduce = useReducedMotion();
  // Petal starts hollow and blooms into colour a beat after mount - see
  // the effect below. Starting bloomed would be indistinguishable from a
  // static image; starting hollow and filling in is what makes this read
  // as a deliberate reveal rather than an image that failed to load.
  const [bloom, setBloom] = useState(false);

  useEffect(() => {
    // 0ms for reduced motion rather than an early setBloom(true) in the
    // effect body itself - still fires on the next tick instead of
    // synchronously mid-effect, which is what react-hooks/set-state-in-
    // effect actually objects to (a same-pass render cascade before
    // paint), and PinwheelMark's own duration prop below is already what
    // makes the fade instant for these users, not the timing here.
    const t = setTimeout(() => setBloom(true), reduce ? 0 : 200);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <div className="relative aspect-square w-full">
      <div
        aria-hidden="true"
        className={`absolute inset-[8%] rounded-full opacity-70 blur-3xl ${pillar.wash}`}
      />
      {/*
        Rotation here is a plain CSS-style infinite drift, deliberately
        separate from PinwheelMark's own `rotation` prop (that one steps
        between discrete beats elsewhere on the site - see HeroSequence -
        and animating both at once would fight over the same transform).
        Ambient and slow: 140s per turn is not something a reader tracks,
        only something that makes the mark feel alive rather than static,
        in the corner of the eye.
      */}
      <motion.div
        className="relative h-full w-full"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={reduce ? undefined : { duration: 140, ease: "linear", repeat: Infinity }}
      >
        <PinwheelMark
          filled={bloom ? [pillar.id] : []}
          duration={reduce ? 0.01 : 1.1}
          strokeWidth={7}
          className="h-full w-full"
        />
      </motion.div>
    </div>
  );
}
