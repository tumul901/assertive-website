"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, X } from "lucide-react";
import { PILLARS, type PillarId } from "@/lib/data/pillars";
import { SERVICES, isCoreTo, primaryPillar, type Service } from "@/lib/data/services";
import { cn } from "@/lib/utils";

/*
 * THE WHOLE CATALOGUE, ON ALL FIVE DISCIPLINE PAGES. Not the subset
 * servicesIn() returns - every service, every time. That is the point of
 * the IA: a client landing on Corporate & MICE should be able to see that
 * we also print, also fabricate, also shoot, without having to guess which
 * other page to look on. servicesIn() is not ignored, it just demotes
 * rather than excludes now: the discipline's own capabilities lead the
 * cloud and wear its colour at full strength, the rest follow at a
 * fraction of it. See the note at the top of services.ts.
 *
 * A pill opens a panel below the cloud rather than navigating. There are
 * no per-service pages any more, and the copy that used to fill one is
 * short enough that a page load for it would be the most expensive part of
 * reading it.
 *
 * ---- MOTION BUDGET -------------------------------------------------
 * Three effects, and only one of them ever runs JavaScript per frame:
 *
 *   float    pure CSS keyframes (.pill-float in globals.css), composited,
 *            zero main-thread cost. An idle cloud is free.
 *   magnet   ONE rAF-throttled pointermove listener on the container for
 *            all twenty-one pills, writing two custom properties each.
 *            Runs only while a fine pointer is actually moving over the
 *            cloud, and not at all on touch or under reduced motion.
 *   entrance Motion variants, once, on scroll into view.
 *
 * The version this replaced gave every pill its own Motion animation with
 * repeat: Infinity - twenty-one permanent frame callbacks, on a page whose
 * cloud is usually off screen. If you add a fourth effect here, put it in
 * the first category.
 */

/** Pixels a pill will lean toward the pointer at the very centre. */
const MAGNET_STRENGTH = 11;
/** Beyond this distance, in pixels, a pill is left where it is. */
const MAGNET_RADIUS = 190;

/** The single prop, because everything else is looked up from it here. */
export function ServicePills({ pillarId }: { pillarId: PillarId }) {
  const pillar = PILLARS.find((p) => p.id === pillarId)!;
  const reduce = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);
  const cloudRef = useRef<HTMLUListElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  // False until the opening hash has been read. Guards the effect that
  // writes the URL, which would otherwise wipe an incoming deep link on
  // mount - it fires once with active still null, before the hash has
  // been looked at.
  const hydrated = useRef(false);
  // The slug an incoming deep link opened, if any. The scroll effect
  // skips it: the browser has already jumped to that pill natively, and a
  // smooth scroll racing that jump is how a page ends up landing in the
  // wrong place.
  const openedFromHash = useRef<string | null>(null);

  /*
   * Core first, then the rest, each in SERVICES order. `seed` is the
   * position in SERVICES, NOT in this sorted array, so a pill floats the
   * same way on all five pages - the drift belongs to the service, not to
   * where that service happens to land in this particular order.
   */
  const ordered = useMemo(
    () =>
      SERVICES.map((service, seed) => ({ service, seed, core: isCoreTo(service, pillarId) }))
        .sort((a, b) => Number(b.core) - Number(a.core) || a.seed - b.seed),
    [pillarId],
  );

  const activeService = active ? SERVICES.find((s) => s.slug === active) : undefined;

  /*
   * THE MAGNET. Pills lean toward the pointer, hardest at the centre of
   * the field and not at all past MAGNET_RADIUS.
   *
   * TOWARD the pointer, deliberately, not away from it. A repulsion field
   * looks livelier in isolation and is miserable to use: it slides the
   * thing you are reaching for out from under you. Leaning in makes the
   * pill a slightly larger target than it was.
   *
   * Costs: one listener, one rAF per burst of movement, one rect read per
   * frame, and two setProperty calls per pill. Pill centres are measured
   * ONCE and re-measured only when the cloud actually reflows - reading
   * them per frame would interleave layout reads with style writes and
   * thrash on every pointermove.
   */
  useEffect(() => {
    const el = cloudRef.current;
    if (!el || reduce) return;
    // A coarse pointer has no hover position to lean toward - the listener
    // would only ever fire mid-tap, moving the target during the tap.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let centres: { node: HTMLElement; cx: number; cy: number }[] = [];
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const measure = () => {
      const box = el.getBoundingClientRect();
      centres = Array.from(el.querySelectorAll<HTMLElement>("[data-pill]")).map((node) => {
        const r = node.getBoundingClientRect();
        return {
          node,
          cx: r.left + r.width / 2 - box.left,
          cy: r.top + r.height / 2 - box.top,
        };
      });
    };

    const apply = () => {
      frame = 0;
      const box = el.getBoundingClientRect();
      const x = pointerX - box.left;
      const y = pointerY - box.top;
      for (const p of centres) {
        const dx = x - p.cx;
        const dy = y - p.cy;
        const dist = Math.hypot(dx, dy);
        if (dist > MAGNET_RADIUS) {
          p.node.style.setProperty("--pill-mx", "0px");
          p.node.style.setProperty("--pill-my", "0px");
          continue;
        }
        // Squared falloff, so the field has a soft edge instead of a
        // visible circular boundary sweeping through the cloud.
        const pull = (1 - dist / MAGNET_RADIUS) ** 2 * MAGNET_STRENGTH;
        const unit = dist || 1;
        p.node.style.setProperty("--pill-mx", `${((dx / unit) * pull).toFixed(2)}px`);
        p.node.style.setProperty("--pill-my", `${((dy / unit) * pull).toFixed(2)}px`);
      }
    };

    const onMove = (e: PointerEvent) => {
      pointerX = e.clientX;
      pointerY = e.clientY;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const onLeave = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      for (const p of centres) {
        p.node.style.setProperty("--pill-mx", "0px");
        p.node.style.setProperty("--pill-my", "0px");
      }
    };

    measure();
    // The cloud rewraps at every breakpoint and whenever a pill's own
    // width changes, and either moves every centre after it. Observing the
    // list is more reliable than a window resize listener, which misses a
    // reflow caused by anything other than the viewport.
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce]);

  /*
   * DEEP LINK IN. The homepage hero's discipline pills point here as
   * /services/<pillar>#<service>, so a reader who tapped "Photography" on
   * the wheel lands with Photography already open. Every pill carries
   * id={slug}, so the browser does its own native jump to the pill and
   * this only has to open the panel. Runs once: a later hash change from
   * our own replaceState below must not re-trigger it.
   *
   * Read on a timeout rather than straight in the effect body, the same
   * shape DisciplineHero's bloom uses and for the same reason - what
   * react-hooks/set-state-in-effect objects to is a same-pass render
   * cascade before paint, and a tick's delay is invisible next to the
   * browser's own scroll to the pill.
   */
  useEffect(() => {
    const t = setTimeout(() => {
      const slug = decodeURIComponent(window.location.hash.slice(1));
      if (slug && SERVICES.some((s) => s.slug === slug)) {
        openedFromHash.current = slug;
        setActive(slug);
      }
      hydrated.current = true;
    }, 0);
    return () => clearTimeout(t);
  }, []);

  /*
   * DEEP LINK OUT, via replaceState rather than a router push. The panel
   * is a disclosure, not a destination: pushing would put a history entry
   * behind every pill a reader idly opened and turn Back into a tour of
   * them. This keeps the URL copyable without that.
   */
  useEffect(() => {
    if (!hydrated.current) return;
    const url = active ? `#${active}` : window.location.pathname;
    window.history.replaceState(null, "", url);
  }, [active]);

  // block: "nearest" is doing the work - it scrolls only when the panel is
  // actually out of view, so opening a pill near the bottom of the cloud
  // brings the panel up while opening one near the top moves nothing.
  useEffect(() => {
    if (!active || active === openedFromHash.current || !panelRef.current) return;
    panelRef.current.scrollIntoView({
      block: "nearest",
      behavior: reduce ? "auto" : "smooth",
    });
  }, [active, reduce]);

  const toggle = useCallback((slug: string) => {
    setActive((current) => (current === slug ? null : slug));
  }, []);

  return (
    <div>
      <motion.ul
        ref={cloudRef}
        // gap-y is deliberately larger than gap-x: the pills float
        // vertically far more than horizontally, and this is the clearance
        // the float amplitude in Pill is capped against. See the comment
        // there before changing either number.
        className="flex flex-wrap justify-center gap-x-2.5 gap-y-5 sm:gap-x-3 sm:gap-y-6"
        initial={reduce ? undefined : "hidden"}
        whileInView={reduce ? undefined : "visible"}
        viewport={{ once: true, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.028 } } }}
      >
        {ordered.map(({ service, seed, core }) => (
          <Pill
            key={service.slug}
            service={service}
            seed={seed}
            core={core}
            pillar={pillar}
            selected={active === service.slug}
            onSelect={toggle}
          />
        ))}
      </motion.ul>

      {/*
        mode="wait" so switching between two services does not cross-fade
        one paragraph through another - the panel empties, then refills.
        The height animation is on the wrapper, not the card, so the card's
        own padding does not get squashed on the way in.
      */}
      <AnimatePresence mode="wait" initial={false}>
        {activeService && (
          <motion.div
            key={activeService.slug}
            ref={panelRef}
            className="overflow-hidden"
            initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: reduce ? 0.01 : 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            <ServicePanel
              service={activeService}
              pillar={pillar}
              core={isCoreTo(activeService, pillarId)}
              onClose={() => setActive(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/*
 * Deterministic pseudo-noise, seeded on the service's position in SERVICES.
 * Math.random() would have been simpler and would also have hydrated with a
 * different value than the server rendered on every single pill. This is
 * the standard sin-fract hash: stable across renders, across reloads and
 * across the server/client boundary, while still looking arbitrary enough
 * that no two neighbouring pills float in step.
 */
function noise(seed: number, salt: number): number {
  const x = Math.sin(seed * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function Pill({
  service,
  seed,
  core,
  pillar,
  selected,
  onSelect,
}: {
  service: Service;
  seed: number;
  core: boolean;
  pillar: (typeof PILLARS)[number];
  selected: boolean;
  onSelect: (slug: string) => void;
}) {
  /*
   * The float, as custom properties for the .pill-float keyframes in
   * globals.css. Nothing here runs in JavaScript - these values are
   * written once, into the style attribute, and the compositor does the
   * rest.
   *
   * AMPLITUDE IS CAPPED AGAINST THE ROW GAP, which is the constraint that
   * actually sets it rather than taste. Two vertically adjacent pills can
   * drift towards each other at once, so the worst case closes twice the
   * amplitude - at most sixteen pixels here, against the gap-y-6 the list
   * sets, and the magnet can add a few more. Raising one without the other
   * lets neighbouring rows touch, and it looks correct at rest, which is
   * how it would ship.
   *
   * Durations are all different and irrational-ish relative to each other,
   * which is what keeps the cloud from settling into a visible pulse, and
   * the delay is negative so each pill begins already partway through its
   * own cycle rather than all of them setting off together.
   */
  const style = useMemo(
    () => ({
      "--pill-x": `${(2 + noise(seed, 2) * 3).toFixed(2)}px`,
      "--pill-y": `${(4 + noise(seed, 1) * 4).toFixed(2)}px`,
      "--pill-r": `${(noise(seed, 3) * 1.6 - 0.8).toFixed(2)}deg`,
      "--pill-dur": `${(9 + noise(seed, 4) * 7).toFixed(2)}s`,
      "--pill-delay": `-${(noise(seed, 5) * 9).toFixed(2)}s`,
    }),
    [seed],
  ) as CSSProperties;

  /*
   * COLOUR ACROSS THE WHOLE CLOUD, at two strengths. An earlier version
   * gave the discipline's own capabilities the pillar colour and left the
   * other thirteen on --color-hairline, which was the right hierarchy
   * expressed the wrong way: neutral grey among coloured siblings reads as
   * DISABLED, not as secondary. Every pill is in the discipline's hue now;
   * what changes is how much of it, plus the type size. The order already
   * says which came first.
   */
  const strength = core ? 62 : 24;
  const dot = core
    ? `var(--color-${pillar.id}-mark)`
    : `color-mix(in oklab, var(--color-${pillar.id}-mark) 60%, transparent)`;

  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, scale: 0.86, y: 10 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {/*
        Three transforms, three owners, no collisions. The li above owns
        the entrance; this div's `translate`/`rotate` are the CSS float and
        its `transform` is the pointer magnet (see globals.css for why
        those can share an element); the button's own `scale` is the hover.
        Collapsing any two of them onto one property is how this breaks.
      */}
      <div data-pill className="pill-float" style={style}>
        <button
          type="button"
          id={service.slug}
          onClick={() => onSelect(service.slug)}
          aria-expanded={selected}
          aria-controls={selected ? "service-detail" : undefined}
          // The sticky header is 72px, 110px from lg up. Without the
          // scroll margin, the browser's native jump to a deep-linked pill
          // parks it under the header instead of below it.
          className={cn(
            "inline-flex scroll-mt-[92px] items-center gap-2 rounded-full border font-medium shadow-card transition-[background-color,border-color,color,box-shadow,scale] duration-[var(--dur-fast)] ease-out-expo hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-95 lg:scroll-mt-[130px]",
            core ? "text-base px-5 py-2.5" : "text-sm px-4 py-2",
            selected ? "text-white shadow-card-hover" : "bg-surface-raised text-ink",
          )}
          style={{
            outlineColor: `var(--color-${pillar.id}-ink)`,
            backgroundColor: selected ? `var(--color-${pillar.id}-fill)` : undefined,
            /*
              Colour on the BORDER, never on the label. Pillars.tsx logs
              the measurement behind that: four of the five pillar inks
              fail body-text contrast at small sizes on surface-raised,
              which is exactly this ground at exactly this size. The
              selected state is safe the other way round - --color-*-fill
              is the token defined against a white label at 4.5:1.
            */
            borderColor: selected
              ? `var(--color-${pillar.id}-fill)`
              : `color-mix(in oklab, var(--color-${pillar.id}-mark) ${strength}%, transparent)`,
          }}
        >
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-[var(--dur-fast)]"
            style={{ backgroundColor: selected ? "currentColor" : dot }}
          />
          {service.name}
        </button>
      </div>
    </motion.li>
  );
}

function ServicePanel({
  service,
  pillar,
  core,
  onClose,
}: {
  service: Service;
  pillar: (typeof PILLARS)[number];
  core: boolean;
  onClose: () => void;
}) {
  // Only meaningful when this service is NOT one of the discipline's own -
  // pointing a Corporate reader at Corporate would be a link to the page
  // they are already standing on.
  const led = core ? undefined : PILLARS.find((p) => p.id === primaryPillar(service));

  return (
    <div
      id="service-detail"
      className="mt-8 rounded-lg border border-hairline bg-surface-raised p-6 shadow-card sm:p-8"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <span
            aria-hidden="true"
            className={cn("block h-1 w-10 rounded-full", pillar.mark)}
          />
          <h3 className="text-h3 mt-4 text-ink">{service.name}</h3>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label={`Close ${service.name}`}
          className="-mr-1 -mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-muted transition-colors duration-[var(--dur-fast)] hover:bg-surface hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
        >
          <X size={18} aria-hidden="true" />
        </button>
      </div>

      <p className="text-body-lg mt-4 max-w-[62ch] text-ink-body">{service.blurb}</p>
      <p className="text-body mt-4 max-w-[72ch] text-ink-body">{service.description}</p>

      {led && (
        <Link
          href={`/services/${led.id}#${service.slug}`}
          className="group mt-6 inline-flex items-center gap-1.5 font-medium text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
        >
          Mostly briefed as {led.name}
          <ArrowRight
            size={14}
            aria-hidden="true"
            className={cn(
              "transition-transform duration-[var(--dur-base)] ease-out-expo group-hover:translate-x-1",
              led.ink,
            )}
          />
        </Link>
      )}
    </div>
  );
}
