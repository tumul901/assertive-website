"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Lightbulb, Target, TrendingUp } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { PILLARS } from "@/lib/data/pillars";
import { galleryFor, type Photo, type WorkItem } from "@/lib/data/work";

/*
 * Two carousels, one inside the other, and they are deliberately NOT the
 * same instrument:
 *
 *   OUTER - one case study at a time. Loud: labelled arrows, a dot per
 *           study, arrow keys, swipe. Never auto-advances. This one holds
 *           three paragraphs of prose, and a panel that moves on its own
 *           while somebody is reading it is a bug, not a feature.
 *
 *   INNER - photographs of the one event. Quiet: dots only, no arrows, no
 *           labels, and it DOES advance on its own every ten seconds. There
 *           is nothing to read, so it costs a reader nothing to move.
 *
 * The pairing is the point. If the inner one grew arrows it would compete
 * with the outer one for the same gesture and the reader would stop being
 * able to tell which carousel a click belongs to.
 */

/* Long enough that a photo is a photo rather than a slideshow, and long
   enough to read the copy beside it without the picture changing mid-
   sentence. Restarted from zero on every manual dot press - see the timer. */
const DWELL = 10_000;

const SLIDE_MS = 520;
const FADE_MS = 700; // the inner crossfade; slower, it should not catch the eye
const SHIFT = 28; // px a case study sits off-centre while it is not the active one
const SWIPE = 44; // px of travel before a touch counts as a swipe, not a tap

export function CaseStudyCarousel({ items }: { items: WorkItem[] }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const touchX = useRef<number | null>(null);

  /* Wraps in both directions. A five-item carousel with dead ends means the
     arrow a reader is already using goes inert exactly when they have seen
     enough to want the next one. */
  const go = (n: number) => setActive((n + items.length) % items.length);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Case studies"
      /* Fires for whichever control has focus, so the arrow keys work
         without this wrapper needing a tab stop of its own. */
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(active - 1);
        else if (e.key === "ArrowRight") go(active + 1);
        else return;
        e.preventDefault();
      }}
    >
      {/*
       * Every case study is in the DOM at every moment and only its opacity
       * changes. Two reasons, both structural rather than cosmetic: the
       * copy is the substance of this section, so it has to be present for
       * search and for a reader with no JS; and stacking all five in ONE
       * grid cell means the cell is as tall as the tallest of them, so
       * moving between studies of different lengths cannot jog the page.
       * The alternative - mounting one at a time - re-introduces both
       * problems and buys nothing.
       */}
      <div
        className="grid"
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          const from = touchX.current;
          touchX.current = null;
          if (from === null) return;
          const d = e.changedTouches[0].clientX - from;
          if (Math.abs(d) > SWIPE) go(active + (d < 0 ? 1 : -1));
        }}
      >
        {items.map((item, i) => {
          const on = i === active;
          return (
            <div
              key={item.slug}
              className="col-start-1 row-start-1 transition-[opacity,transform] ease-out-expo"
              /*
               * A slide that has been scrolled PAST sits to the left and one
               * still to come sits to the right, so travel direction falls
               * out of the indices and nothing has to remember which way the
               * reader last went.
               *
               * transform here is a real inline transform, so naming it in
               * the transition list above is correct - unlike a Tailwind
               * -translate-x utility, which v4 compiles to the discrete
               * `translate` property instead. See the note in Pillars.tsx.
               */
              style={{
                opacity: on ? 1 : 0,
                transform: on ? "none" : `translateX(${i < active ? -SHIFT : SHIFT}px)`,
                transitionDuration: reduce ? "0ms" : `${SLIDE_MS}ms`,
                pointerEvents: on ? "auto" : "none",
              }}
              /* Takes the inactive studies out of the tab order and out of
                 the accessibility tree in one attribute - they are stacked
                 on top of each other and invisible, so their links must not
                 be reachable. React 19 takes this as a boolean. */
              inert={!on}
              /* Hooks for the no-JS fallback in layout.tsx, which hides the
                 four inactive slides and the controls outright. Without
                 them the blanket "unhide anything with opacity:0" rule
                 there stacks all five studies in this one cell. */
              data-cs-slide=""
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${items.length}`}
            >
              <Study item={item} live={on} />
            </div>
          );
        })}
      </div>

      {/* ---- outer controls: arrow, dots, arrow ---- */}
      <div data-cs-controls="" className="mt-8 flex items-center justify-center gap-4">
        <Arrow label="Previous case study" onClick={() => go(active - 1)}>
          <ArrowLeft size={18} aria-hidden="true" />
        </Arrow>

        <div className="flex items-center gap-2">
          {items.map((item, i) => {
            const on = i === active;
            const pillar = PILLARS.find((p) => p.id === item.pillar)!;
            return (
              <button
                key={item.slug}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Case study ${i + 1}: ${item.title}`}
                aria-current={on}
                /* The hit area is a constant 44x44 no matter how wide the
                   visible dot is - the dot itself is the child span. A 6px
                   tap target is not a tap target. */
                className="group grid h-11 w-6 place-items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
              >
                <span
                  /* Width and colour both animate, and both are plain CSS
                     properties here rather than transforms, so naming them
                     literally is safe - see the Pillars.tsx note for the
                     case where it is not. */
                  className={`h-1.5 rounded-full transition-[width,background-color] duration-[var(--dur-base)] ease-out-expo ${
                    on ? `w-6 ${pillar.mark}` : "w-1.5 bg-ink/25 group-hover:bg-ink/40"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <Arrow label="Next case study" onClick={() => go(active + 1)}>
          <ArrowRight size={18} aria-hidden="true" />
        </Arrow>
      </div>

      {/* Announces the change to a screen reader without moving focus, which
          is what a live region is for. The visible slide count above is
          decorative by comparison. */}
      <p aria-live="polite" className="sr-only">
        {`Case study ${active + 1} of ${items.length}: ${items[active].title}`}
      </p>
    </div>
  );
}

function Arrow({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-hairline text-ink transition-[background-color,border-color] duration-[var(--dur-base)] ease-out-expo hover:border-ink/30 hover:bg-surface-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
    >
      {children}
    </button>
  );
}

function Study({ item, live }: { item: WorkItem; live: boolean }) {
  const pillar = PILLARS.find((p) => p.id === item.pillar)!;
  const photos = galleryFor(item);

  return (
    <article className="grid h-full overflow-hidden rounded-lg bg-surface-raised shadow-card lg:grid-cols-[minmax(0,44%)_1fr]">
      {/* ---- media side, with the nested photo carousel ---- */}
      <div className="relative aspect-[16/11] lg:aspect-auto">
        <PhotoStrip photos={photos} live={live} title={item.title} />

        {/*
         * The scrim has to be dark in BOTH themes, because white type sits
         * on it - so it cannot be built out of surface/ink, which invert.
         * Literal black at a low alpha over a photograph is theme-agnostic
         * by construction. Same reasoning the accordion this replaced used
         * for its own overlay colour.
         */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/5"
        />

        <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
          <p className="text-eyebrow uppercase text-white/80">
            {item.client ?? pillar.name}
          </p>
          {/* text-h3, not h2: the section heading above is the h2 and this
              is one of five peers under it. */}
          <h3 className="text-h3 mt-3 max-w-[18ch] text-white">{item.headline}</h3>
          <p className="text-small mt-3 text-white/70">
            {item.title}
            <span aria-hidden="true"> · </span>
            {pillar.name}
          </p>
        </div>
      </div>

      {/* ---- copy side ---- */}
      <div className="flex flex-col gap-6 p-6 sm:p-8 lg:p-10">
        <Block icon={Target} tint={pillar.ink} label="Problem" body={item.problem} />
        <Block icon={Lightbulb} tint={pillar.ink} label="Solution" body={item.solution} />

        {/* Impact sits in a tinted box rather than as a third identical
            block: it is the part a skim-reader should land on, and the wash
            token is the one piece of pillar colour that can carry body text
            behind it at full contrast in both themes. */}
        <div className={`mt-auto rounded-md p-5 ${pillar.wash}`}>
          <Block icon={TrendingUp} tint={pillar.ink} label="Impact" body={item.impact} />
          <Link
            href={`/work/${item.slug}`}
            className={`text-small mt-4 inline-flex items-center gap-1.5 font-medium ${pillar.ink} hover:underline focus-visible:outline-2 focus-visible:outline-offset-2`}
          >
            Read the full case study
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function Block({
  icon: Icon,
  tint,
  label,
  body,
}: {
  icon: typeof Target;
  tint: string;
  label: string;
  body: string;
}) {
  return (
    <div>
      <p className="flex items-center gap-2">
        <Icon size={16} aria-hidden="true" className={tint} />
        <span className="text-eyebrow uppercase text-ink">{label}</span>
      </p>
      <p className="text-small mt-2 text-ink-body">{body}</p>
    </div>
  );
}

/*
 * The nested one. Crossfade only - no movement at all, which is what keeps
 * it from reading as a second carousel competing with the outer one.
 */
function PhotoStrip({
  photos,
  live,
  title,
}: {
  photos: Photo[];
  live: boolean;
  title: string;
}) {
  const [i, setI] = useState(0);
  const [held, setHeld] = useState(false);
  const reduce = useReducedMotion();
  const many = photos.length > 1;

  /*
   * setTimeout keyed on `i`, not setInterval. Two consequences, both
   * wanted: pressing a dot restarts the full ten seconds rather than
   * dropping the reader into whatever was left of the current tick, and the
   * timer simply does not exist while the study is off-screen - four
   * hidden strips are not quietly cycling photographs nobody can see.
   */
  useEffect(() => {
    if (!live || held || reduce || !many) return;
    const t = setTimeout(() => setI((n) => (n + 1) % photos.length), DWELL);
    return () => clearTimeout(t);
  }, [live, held, reduce, many, photos.length, i]);

  return (
    <>
      {photos.map((p, n) => (
        <Image
          key={`${p.src}-${n}`}
          src={p.src}
          /* Only the lead frame of each study is described. The rest are
             further views of the same event, and an empty alt is what marks
             them decorative - three descriptions of one scene is worse for
             a screen reader than one. */
          alt={n === 0 ? p.alt : ""}
          fill
          sizes="(max-width: 1024px) 100vw, 520px"
          /* Source frames are 370x351 and soften past roughly 420 CSS px
             (see work.ts). At the 44% column this box lands near 520px
             wide, an upscale close to what the section it replaced already
             ran at. Real masters remain a launch blocker. */
          className="object-cover transition-opacity ease-out-expo"
          style={{
            opacity: n === i ? 1 : 0,
            transitionDuration: reduce ? "0ms" : `${FADE_MS}ms`,
          }}
          /* See layout.tsx. These are absolutely stacked, so with no JS the
             blanket unhide rule leaves the LAST one painted rather than the
             lead frame - the only photo with real alt text. */
          data-cs-photo=""
        />
      ))}

      {many && (
        <div
          /* Hover OR keyboard focus anywhere in the dot group holds the
             timer. Without the focus half, tabbing to a dot and reading the
             labels would be interrupted by the photo changing underneath. */
          onMouseEnter={() => setHeld(true)}
          onMouseLeave={() => setHeld(false)}
          onFocusCapture={() => setHeld(true)}
          onBlurCapture={() => setHeld(false)}
          data-cs-dots=""
          /*
           * z-10 IS LOAD-BEARING, not polish. These dots are rendered from
           * inside PhotoStrip, which the media panel places FIRST - before
           * the scrim and before the title block. Both of those are
           * absolutely positioned siblings that come later, so at z-auto
           * they paint over the dots and, more to the point, take the
           * clicks: the title block is inset-x-0 bottom-0, so its BOX
           * covers this corner even though its text stops well short of it.
           * The scrim is pointer-events-none and was never the problem on
           * its own, but at from-black/85 down here it was also most of the
           * reason the dots were hard to see.
           *
           * Raising the dots fixes both at once. The alternative - moving
           * them after the title block in the markup - would mean lifting
           * PhotoStrip's state up into Study for no other reason.
           */
          className="absolute right-4 bottom-4 z-10 flex items-center gap-1.5 lg:right-6 lg:bottom-6"
        >
          {photos.map((p, n) => (
            <button
              key={`${p.src}-${n}`}
              type="button"
              onClick={() => setI(n)}
              aria-label={`Photo ${n + 1} of ${photos.length}, ${title}`}
              aria-current={n === i}
              className="grid h-8 w-5 place-items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {/* White at two alphas, not a theme token: these sit on a
                  photograph, which is not part of either theme's surface.
                  `scale`, not `transform`, in the transition list - v4
                  compiles scale-125 to the discrete property and naming the
                  shorthand would silently animate nothing. */}
              <span
                className={`h-1.5 w-1.5 rounded-full transition-[background-color,scale] duration-[var(--dur-base)] ease-out-expo ${
                  n === i ? "scale-125 bg-white" : "bg-white/45 hover:bg-white/70"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </>
  );
}
