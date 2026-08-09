"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
// ArrowLeft/ArrowRight here are the carousel's own prev/next buttons, not
// a link affordance - the "read the full case study" Link that used to
// share this import is gone.
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
      /*
       * overflow-x-clip contains the parked slides. The inactive ones are
       * translated sideways by design (see the note on the slide below), so
       * the slide waiting on the right genuinely sticks out past this box -
       * enough to give the whole PAGE a few pixels of horizontal scroll on
       * a phone, which is the kind of thing that reads as a broken layout
       * rather than as an offset.
       *
       * CLIP, NOT HIDDEN. overflow:hidden would make this a scroll
       * container, and a scroll container cannot have visible overflow on
       * the other axis - the card shadow and the focus rings would be cut
       * off at the top and bottom edges. overflow-x:clip pairs legally with
       * a visible y, so it trims only the parked slides.
       */
      className="overflow-x-clip"
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
      {/*
       * grid-cols-[minmax(0,1fr)] IS NOT DECORATION - a bare `grid` here
       * scrolled the whole homepage sideways on a phone.
       *
       * The stack above puts every slide in ONE implicit column, and an
       * implicit column is auto-sized while a grid item's min-width
       * defaults to auto - meaning the column refuses to go narrower than
       * its widest item's MAX-CONTENT width. Max-content for a case study
       * is its longest paragraph set on a single line, so at 390px the
       * column came out at about six hundred pixels and took the document
       * with it: measured fifty-two pixels of horizontal page scroll,
       * traced to this element by hiding sections one at a time.
       *
       * minmax(0, 1fr) pins the column to the container and lets the text
       * wrap, which is what it looked like it was doing all along on
       * desktop, where the copy happens to be narrow enough not to notice.
       * Same min-width:auto trap the `minmax(0,40%)` on the article guards
       * against, and the reason the photo dots carry min-w-0.
       */}
      <div
        className="grid grid-cols-[minmax(0,1fr)]"
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

      {/*
        ---- outer controls: arrow, dots, arrow ----

        THE DOT RAIL MUST BE ABLE TO SHRINK. There is one dot per case
        study and the list grows over time, so this row's natural width is
        not a fixed quantity - it is a function of how much work the agency
        has published. At thirteen studies it stopped fitting a small phone
        and pushed the whole PAGE sideways: fifty-two pixels of horizontal
        scroll at 375px, with the arrows sitting off the right edge.

        min-w-0 lets the rail shrink below its content width (a flex item
        refuses to by default) and shrink on each dot lets the hit areas
        give way evenly instead of the last few being pushed out. The
        VISIBLE dot inside each button keeps its size; only the invisible
        tap area narrows, which is the same trade the photo dots make - see
        the note on PhotoStrip's row.

        The arrows are shrink-0 so they never give up their forty-four
        pixels: they are the control most likely to be used on a phone, and
        a squashed arrow is worse than tighter dots.
      */}
      <div data-cs-controls="" className="mt-8 flex items-center justify-center gap-4">
        <Arrow label="Previous case study" onClick={() => go(active - 1)}>
          <ArrowLeft size={18} aria-hidden="true" />
        </Arrow>

        <div className="flex min-w-0 items-center gap-2">
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
                className="group grid h-11 w-6 min-w-0 shrink place-items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
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
      /* shrink-0: the dot rail beside these is the part that gives when the
         row runs out of width - see the note on the controls row. */
      className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-hairline text-ink transition-[background-color,border-color] duration-[var(--dur-base)] ease-out-expo hover:border-ink/30 hover:bg-surface-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
    >
      {children}
    </button>
  );
}

function Study({ item, live }: { item: WorkItem; live: boolean }) {
  const pillar = PILLARS.find((p) => p.id === item.pillar)!;
  const photos = galleryFor(item);
  // Same test PhotoStrip uses to decide whether to render its dots at all.
  // Computed here too because the title block below has to reserve the row
  // those dots sit in - and must not reserve it when there are none.
  const many = photos.length > 1;

  return (
    /*
      THE MEDIA COLUMN IS 40%, DOWN FROM 44%, AND THAT IS A HEIGHT FIX
      RATHER THAN A WIDTH PREFERENCE.

      Every study is stacked in one grid cell, so all thirteen cards are as
      tall as the longest copy among them - and on lg the photograph does
      not set the height at all, it STRETCHES to whatever the copy needs.
      So the only way to shorten the section is to make the copy need less
      height, and the cheapest way to do that is to give it more width:
      narrowing this column widens the prose, which costs it lines.

      Measured at 1440: 44% needed 744px, 40% needs 649px. Going further to
      38% bought nothing at all - still 649px - while shaving the photograph
      for free, which is why it stopped here.

      IT ALSO IMPROVES THE CROP, counter-intuitively. The media box is
      portrait (roughly 0.7 wide-to-tall) while most of these photographs
      are 16:9, so object-cover throws away a lot of their width. A shorter
      card is a less portrait box: this change takes the ratio from 0.70 to
      0.73, so the frames lose slightly less of themselves.

      THE BASE grid-cols-[minmax(0,1fr)] IS THE MOBILE HALF OF THE SAME
      min-width:auto TRAP the track above carries, and it is needed here
      separately: below lg this article is a single IMPLICIT column, which
      auto-sizes to its widest item's max-content width. That let the media
      div render about six hundred pixels wide inside a three-hundred-pixel
      card - clipped by overflow-hidden, so it looked merely mis-cropped
      rather than broken. Fixing the track alone corrected the card and
      left this; both are needed.
    */
    <article className="grid h-full grid-cols-[minmax(0,1fr)] overflow-hidden rounded-lg bg-surface-raised shadow-card lg:grid-cols-[minmax(0,40%)_1fr]">
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

        {/*
          THE EXTRA BOTTOM PADDING IS THE FIX, not spacing taste. This block
          is inset-x-0 bottom-0 and PhotoStrip's dots are absolutely placed
          inside the same corner, so the two only ever cleared each other by
          luck - while galleries were short enough that a right-aligned dot
          row ended before this text began. Wedding Design Library arrived
          with fifteen frames, the row grew past the panel's width, and it
          landed straight on the title line.
          Reserving the row here means they cannot collide at ANY count. If
          you change the dot row's height or offset in PhotoStrip, change
          this to match - they are one measurement in two places.
        */}
        <div
          className={`absolute inset-x-0 bottom-0 p-6 lg:p-8 ${many ? "pb-14 lg:pb-16" : ""}`}
        >
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

      {/*
        ---- copy side ----
        justify-center, and NOT the mt-auto this used to rely on.

        The three blocks are set by their own content, and the column is
        stretched to whatever height the photograph beside it needs - so on
        most studies there is spare vertical space. Where that space GOES is
        the whole question. Pushing Impact to the bottom with mt-auto put
        all of it into a single gap in the middle of the reading order,
        which read as a hole between Solution and Impact while Challenge and
        Solution sat a normal gap-6 apart - three paragraphs, two very
        different gaps. Centring the group keeps all three gaps equal and
        splits the slack above and below, where it reads as padding.

        Safe against long copy: the article is a grid row, so if the copy
        outgrows the photograph the row grows with it and justify-center has
        nothing left to centre.

        NO lg:p-10 ANY MORE - it stops at sm:p-8. Padding is doubled into
        the card height (top and bottom both), so the last step of it was
        costing sixty-odd pixels on every one of the thirteen cards to buy
        eight pixels of margin on one of them. See the note on the article
        above for the rest of the height budget.
      */}
      <div className="flex flex-col justify-center gap-6 p-6 sm:p-8">
        <Block icon={Target} tint={pillar.ink} label="Challenge" body={item.problem} />
        <Block icon={Lightbulb} tint={pillar.ink} label="Solution" body={item.solution} />

        {/* Impact sits in a tinted box rather than as a third identical
            block: it is the part a skim-reader should land on, and the wash
            token is the one piece of pillar colour that can carry body text
            behind it at full contrast in both themes. */}
        {/* NO "READ THE FULL CASE STUDY" LINK. It pointed at
            /work/<slug>, a route that does not exist - and there is no
            fuller version of any of these to read: Challenge, Solution
            and Impact plus the gallery IS the whole case study, all of it
            already on this card. So it promised more depth than exists
            and 404d on the way to it. Removed with the same-shaped links
            on the About section and the Case Studies header. Bring it
            back only alongside a real /work/[slug] route. */}
        <div className={`rounded-md p-5 ${pillar.wash}`}>
          <Block icon={TrendingUp} tint={pillar.ink} label="Impact" body={item.impact} />
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
      {/* text-body, not text-small. This is the case study itself, not a
          caption - at 0.875rem it was set two steps below the section's
          own intro paragraph while carrying far more words, which is what
          left the column looking thin and spaced out.

          leading-[1.5] overrides the token's own 1.65, and only here. That
          ratio is right for a paragraph running the width of a page; in a
          narrow column of three stacked blocks it just adds height, and
          height in this card is expensive - the photograph beside it
          stretches to match, so every extra line of prose makes the image
          taller and more severely cropped. Measured: 1.65 -> 1.5 took the
          card from 649px to 610px for nothing. */}
      <p className="text-body mt-2 leading-[1.5] text-ink-body">{body}</p>
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
           *
           * A FULL-WIDTH ROW ALONG THE BOTTOM, not a right-aligned cluster.
           * Right-aligned worked while every gallery was a handful of
           * frames; at fifteen the row is wider than the panel, so it ran
           * back under the title text. Now it owns a strip of its own that
           * the title block above reserves with matching bottom padding -
           * see the comment there, and keep the two measurements in step.
           *
           * min-w-0 + shrink on the buttons is what keeps a long row inside
           * the panel instead of overflowing it: the dots tighten up as the
           * count grows rather than running off the edge.
           */
          className="absolute inset-x-0 bottom-0 z-10 flex min-w-0 items-center gap-1 px-5 pb-3 lg:px-7 lg:pb-4"
        >
          {photos.map((p, n) => (
            <button
              key={`${p.src}-${n}`}
              type="button"
              onClick={() => setI(n)}
              aria-label={`Photo ${n + 1} of ${photos.length}, ${title}`}
              aria-current={n === i}
              className="grid h-8 w-5 min-w-0 shrink place-items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
