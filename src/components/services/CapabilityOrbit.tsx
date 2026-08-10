import type { CSSProperties } from "react";
import { PinwheelMark } from "@/components/brand/PinwheelMark";
import { SERVICES } from "@/lib/data/services";
import { PILLARS } from "@/lib/data/pillars";

/*
 * The whole catalogue, turning around the mark: one logo at the centre
 * with every capability orbiting it, which is the page's own argument
 * drawn rather than restated.
 *
 * NOT A CLIENT COMPONENT. Every moving piece is a CSS keyframe (see
 * .orbit-cw / .orbit-ccw in globals.css), so this renders on the server
 * and ships no JavaScript of its own. PinwheelMark is a client component
 * and stays one, but importing it here does not drag this file across
 * the boundary.
 *
 * ALL FIVE PETALS FILLED. Everywhere else the mark is drawn partially -
 * HeroSequence lights one petal per beat, DisciplineHero lights only the
 * pillar being viewed. This is the hub, where the whole point is that you
 * do not have to choose, so it is the one place the mark is shown whole.
 *
 * EVERYTHING IS SIZED IN cqw - container query width units - against the
 * square below, which declares container-type: inline-size. Font size,
 * padding, dot and both radii are all percentages of the same number, so
 * the figure is scale-invariant: shrink the column and the chips shrink
 * exactly as fast as the gaps they sit in. Sizing the chips in px instead
 * is what broke the first version of this - see the geometry note below,
 * which only holds because the ratios are fixed.
 */

// Every petal lit. Read off PILLARS rather than written out, so a sixth
// discipline lights its own petal here the day it is added.
const ALL_PILLARS = PILLARS.map((p) => p.id);

/*
 * TWO RINGS, NOT THREE, AND THAT IS A GEOMETRIC RESULT RATHER THAN A
 * TASTE ONE. The first attempt used three and produced nine overlapping
 * pairs, every one of them BETWEEN rings rather than within one.
 *
 * The reason: a chip is far wider than it is tall - "Artist Management"
 * runs about six times its own height - and it stays axis-aligned while
 * it orbits, because it counter-rotates to keep the label level. So near
 * three o'clock a chip does not intrude on its neighbouring ring by half
 * its HEIGHT, it intrudes by half its WIDTH. Two axis-aligned boxes clear
 * each other at every rotation only if their centres are at least
 * sqrt(((w1+w2)/2)^2 + ((h1+h2)/2)^2) apart - the circumradius of the
 * rectangle of forbidden offsets. For the widest pairs here that is a bit
 * under 100 units on a 560-unit square, and three rings cannot buy two
 * gaps that size and still clear the mark in the middle.
 *
 * With two, every constraint clears with room to spare:
 *   inner chord   83 units vs 77 needed
 *   outer chord  136 units vs 118 needed
 *   ring gap     106 units vs  97 needed
 *
 * Directions oppose so the rings read as two rather than one thick band,
 * and the durations share no small common multiple so they never come
 * back into step - the same reasoning behind the pill cloud's durations.
 */
const RINGS = [
  { radius: 26, count: 10, duration: "63s", spin: "orbit-ccw", counter: "orbit-cw" },
  { radius: 45, count: 11, duration: "97s", spin: "orbit-cw", counter: "orbit-ccw" },
];

export function CapabilityOrbit() {
  /*
   * SORTED BY LABEL LENGTH, shortest ring first. Not cosmetic ordering -
   * it is what makes the figure fit. A ring's room per chip is its chord,
   * 2r·sin(180/n), and the inner ring has the least of it while the labels
   * run from "AV" to "Artist Management". Dealing them out in source order
   * drops the longest labels onto the tightest ring; shortest-first pairs
   * the narrowest chips with the narrowest gaps.
   *
   * It also survives the catalogue changing: add a capability and the
   * rings rebalance rather than the last one overflowing.
   */
  const byLength = [...SERVICES].sort((a, b) => a.name.length - b.name.length);

  /*
   * Each ring's slice, resolved up front. This was a running cursor
   * mutated inside the map below, which react-hooks/immutability rejects
   * outright rather than merely grumbling about: a variable reassigned
   * during render is only correct while the renderer walks the list
   * exactly once, in order, and nothing guarantees that.
   */
  const ringItems = RINGS.map((ring, i) => {
    const start = RINGS.slice(0, i).reduce((n, r) => n + r.count, 0);
    return byLength.slice(start, start + ring.count);
  });

  return (
    /*
     * aria-hidden, like the mark itself. These are real capability names,
     * but they are not new information here - the five cards below name
     * what each discipline leans on, and every capability page lists the
     * catalogue in full and in a fixed order. Exposing a rotating wheel of
     * twenty-one unordered words would add noise to a screen reader
     * without adding one fact it cannot already reach.
     */
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[560px]"
      style={
        {
          containerType: "inline-size",
          /*
           * CLIPPED, and this is not decoration - it is load-bearing.
           * Each ring and each chip's angle layer is a full-size square
           * carrying a rotate, and a rotated square's BOUNDING BOX is
           * bigger than the square: up to sqrt(2) times at 45 degrees,
           * which turns this 560 box into 792 and pushed 125px of
           * horizontal scroll onto the whole page at 1280 and 1440.
           *
           * `clip` rather than `hidden`: hidden would make this a scroll
           * container, which cannot then show anything outside itself on
           * either axis. The clip margin is what lets the outer ring's
           * widest chips keep their real 19px of bleed past the square
           * while the empty rotated corners are still cut away. Where
           * overflow-clip-margin is unsupported the figure simply clips
           * flush instead, which costs a few pixels of one chip and no
           * layout.
           */
          overflow: "clip",
          overflowClipMargin: "40px",
        } as CSSProperties
      }
    >
      {RINGS.map((ring, ringIndex) => {
        const items = ringItems[ringIndex];
        if (items.length === 0) return null;

        return (
          <div
            key={ring.radius}
            className={`absolute inset-0 ${ring.spin}`}
            style={{ "--orbit-dur": ring.duration } as CSSProperties}
          >
            {items.map((service, i) => {
              // The outer ring starts half a step round from the inner
              // one, so the two never line up into spokes.
              const angle = (360 / items.length) * i + ringIndex * 18;
              const pillar = service.pillars[0];

              return (
                // Full-size layer turned to the chip's angle; the chip
                // itself then only has to sit at the top of the circle.
                <div
                  key={service.slug}
                  className="absolute inset-0"
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  <div
                    className="absolute left-1/2"
                    style={{
                      top: `${50 - ring.radius}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Undoes the angle, so the label is level again... */}
                    <div style={{ transform: `rotate(${-angle}deg)` }}>
                      {/* ...and this undoes the ring's spin: same duration,
                          opposite direction, both started at page load, so
                          they cancel exactly and the label stays upright
                          the whole way round instead of tumbling. */}
                      <div
                        className={ring.counter}
                        style={{ "--orbit-dur": ring.duration } as CSSProperties}
                      >
                        <span
                          className="inline-flex items-center whitespace-nowrap rounded-full border bg-surface-raised font-medium text-ink shadow-card"
                          style={{
                            /*
                             * Colour on the border and the dot, never on
                             * the label - the constraint ServicePills.tsx
                             * logs the measurement for. Four of the five
                             * pillar inks fail body-text contrast at small
                             * sizes on surface-raised, and this is that
                             * ground at a smaller size still.
                             */
                            borderColor: `color-mix(in oklab, var(--color-${pillar}-mark) 45%, transparent)`,
                            fontSize: "1.75cqw",
                            gap: "0.7cqw",
                            padding: "0.62cqw 1.5cqw",
                          }}
                        >
                          <span
                            className="shrink-0 rounded-full"
                            style={{
                              background: `var(--color-${pillar}-mark)`,
                              width: "1cqw",
                              height: "1cqw",
                            }}
                          />
                          {service.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}

      {/*
       * The mark, turning against the inner ring.
       *
       * Sized off the inner ring's NEAREST APPROACH, not its radius. A
       * chip is wide and axis-aligned, so the closest corner of one
       * sitting at 45 degrees comes in a good deal nearer the centre than
       * its own radius suggests - measured at 111 units against a ring
       * radius of 146. The mark is sized to clear that, not the ring.
       */}
      <div
        className="orbit-cw absolute inset-0 grid place-items-center"
        style={{ "--orbit-dur": "78s" } as CSSProperties}
      >
        <PinwheelMark filled={ALL_PILLARS} className="w-[34%]" duration={0} />
      </div>
    </div>
  );
}
