"use client";

import {
  Children,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { animate, useInView, type AnimationPlaybackControls } from "motion/react";
import { Reveal } from "@/components/ui/Reveal";

/*
 * The pop stack. The cards sit as a fanned deck on the centre line of the
 * row; when the row reaches mid-screen they fly apart into their real grid
 * positions - two out to the left, two out to the right, the middle one
 * staying where it is. Leave the section in either direction and they
 * gather back into the deck, so every pass plays it again.
 *
 * IT IS TRIGGERED ON ENTRY, NOT TIED TO SCROLL POSITION. Scrubbing the
 * spread against scroll progress is the more obvious build and is wrong
 * here: it would mean the cards are only readable at one exact scroll
 * offset and any scroll away from it takes the copy back out of place.
 * Entry starts it, and it finishes on its own clock whatever the reader
 * does next.
 *
 * WHY THE LAYOUT IS NEVER TOUCHED. Every card renders in its normal grid
 * cell and stays there as far as layout is concerned - the deck is a
 * transform on a wrapper and nothing more. No reflow per frame, no
 * absolute positioning to unwind, and the server HTML is the finished
 * five-across row. With JS off, below the gate, or under
 * prefers-reduced-motion, no transform is ever written and this section is
 * exactly what it was before the file existed.
 */

/*
 * The gate. "two left, one middle, two right" only describes the xl
 * layout - the grid is 1 / 2 / 3 columns below that (see Pillars.tsx),
 * where there is no single middle card and the deck would have to collapse
 * across two rows. Under the gate the cards keep the plain staggered fade
 * they always had.
 */
const SPREAD_AT = "(min-width: 1280px)";

/*
 * TWO BANDS, NOT ONE LINE. Opening and closing cannot share a trigger,
 * because a single line means the deck re-stacks at the exact scroll
 * position where it opened - nudge the wheel back and forth across it and
 * the cards flap. Both are rootMargins, so both read as screen positions:
 *
 *   OPEN  in the middle 20% of the screen. Scrolling down, the row
 *         overlaps it once its top passes 60% of viewport height;
 *         scrolling up, once its bottom passes 40%. Either direction, the
 *         pop starts as the row reaches mid-screen and lands with it
 *         comfortably placed.
 *
 *   SHUT  on leaving the middle 60%, which is to say once the row is on
 *         its way out of frame but still visibly in it - measured, about
 *         60% of the row is still on screen at that moment, which is what
 *         makes the gathering-up something you watch rather than something
 *         that has silently already happened. Off the top and off the
 *         bottom both count.
 *
 * The gap between the two bands is the hysteresis and it is generous on
 * purpose: everywhere a reader would actually stop to read the cards sits
 * inside it, so the deck holds open there and only re-stacks once they
 * have committed to scrolling away.
 */
const OPEN_BAND = "-40% 0px -40% 0px" as const;
const HOLD_BAND = "-20% 0px -20% 0px" as const;

const OPEN_MS = 0.75;
const SHUT_MS = 0.5; // gathering up is a reset; it should not dawdle
const STEP = 0.07; // extra delay per step out from the middle card
const STAGGER = 0.08; // per-card fade delay when the stack is NOT running
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]; // matches Reveal

/*
 * Deck shape, per step out from the middle card.
 *
 * SPLAY is doing most of the work and is the one that is easy to leave
 * out. Five identical cards stacked on a shared centre and rotated are
 * still five identical cards on a shared centre: the top one covers the
 * others almost completely and only the corners escape. Tuned against the
 * LIGHT theme, where a card and the section behind it sit at nearly the
 * same value and a peeking edge is close to invisible - dark has far more
 * separation to spare and reads fine at these numbers too.
 */
const SPLAY = 22; // px sideways, in the direction the card will travel
const TILT = 8; // deg
const DIP = 0.05; // scale
const DROP = 14; // px below the top card

type Cell = {
  el: HTMLDivElement | null;
  /* Where this card sits in the closed deck, relative to where it sits in
     the open row. Measured, not assumed - see place(). */
  dx: number;
  dy: number;
  rot: number;
  sc: number;
  z: number;
  /* 0 = deck, 1 = laid out. Held as a plain number rather than a
     MotionValue so that an interrupted animation can be restarted from
     wherever it actually got to: Motion cannot read x / rotate / scale back
     off an element, because the computed style is one matrix and there is
     no unique decomposition of it. Keeping the scalar ourselves is what
     makes a fast scroll reverse smoothly instead of snapping. */
  t: number;
  /* The target t was last asked for. Both observers fire on scrolls that
     do not change which state the deck should be in, and without this the
     effect would restart an in-flight animation - same destination, fresh
     delay - every time one of them ticked. */
  to: number;
  run: AnimationPlaybackControls | null;
};

const blank = (): Cell => ({
  el: null,
  dx: 0,
  dy: 0,
  rot: 0,
  sc: 1,
  z: 0,
  t: 1,
  to: 1,
  run: null,
});

// useLayoutEffect warns when a client component is server-rendered; the
// measurement genuinely has to happen before paint, so swap the hook rather
// than the timing.
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export function CardStack({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const count = Children.count(children);
  const gridRef = useRef<HTMLDivElement>(null);
  const cells = useRef<Cell[]>([]);
  // Set up by the layout effect below, which owns the geometry; the
  // in-view effect only says which way to go.
  const driver = useRef<((i: number, to: number) => void) | null>(null);
  const [armed, setArmed] = useState(false);
  const open = useRef(false);
  const midScreen = useInView(gridRef, { margin: OPEN_BAND });
  const inFrame = useInView(gridRef, { margin: HOLD_BAND });

  const cell = (i: number) => (cells.current[i] ??= blank());

  useIsoLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const mid = (count - 1) / 2;

    /* Interpolate the whole deck from one scalar. At rest in the open
       state the transform is dropped entirely rather than written as an
       identity, which keeps the finished DOM clean. */
    const paint = (c: Cell) => {
      if (!c.el) return;
      const k = 1 - c.t;
      const flat = k < 0.001;
      c.el.style.transform = flat
        ? ""
        : `translateX(${(c.dx * k).toFixed(2)}px) translateY(${(c.dy * k).toFixed(2)}px)` +
          ` scale(${(1 - (1 - c.sc) * k).toFixed(4)}) rotate(${(c.rot * k).toFixed(2)}deg)`;
      /* Deck order only means anything while the cards overlap. Held past
         that it outlives its purpose and starts costing something: the
         card hover paints a 40px-blur shadow well into its neighbours'
         boxes, and a card left on a lower layer has that shadow drawn
         UNDER them. Cleared with the transform, restored with it. */
      c.el.style.zIndex = flat ? "" : String(c.z);
    };

    const off = () => {
      for (const c of cells.current) {
        if (!c) continue;
        c.run?.stop();
        c.run = null;
        c.t = c.to = 1;
        c.dx = c.dy = c.rot = 0;
        c.sc = 1;
        if (c.el) {
          c.el.style.transform = "";
          c.el.style.zIndex = "";
          c.el.style.willChange = "";
        }
      }
      return false;
    };

    const place = () => {
      if (
        !window.matchMedia(SPREAD_AT).matches ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return off();
      }

      /*
       * Measure from identity. getBoundingClientRect reports the
       * TRANSFORMED box, so on a resize mid-deck the cards are already
       * displaced and reading them where they sit would compound the
       * offset every time. Clearing first costs one extra layout pass on
       * mount and on resize, and nothing at all per frame.
       *
       * Rects rather than offsetLeft: offsetLeft is relative to whatever
       * the offsetParent happens to be, which would make this component
       * silently depend on its caller having set `position: relative`.
       */
      for (const c of cells.current) if (c?.el) c.el.style.transform = "";
      const box = grid.getBoundingClientRect();
      const line = box.left + box.width / 2;

      cells.current.forEach((c, i) => {
        if (!c?.el) return;
        const r = c.el.getBoundingClientRect();
        const step = i - mid;
        const away = Math.abs(step);
        c.dx = line - (r.left + r.width / 2) + step * SPLAY;
        c.dy = away * DROP;
        c.rot = step * TILT;
        c.sc = 1 - away * DIP;
        // Grid items honour z-index without being positioned, so the
        // middle card can be the top of the deck with no stacking context.
        // paint() is what actually writes it - see the note there.
        c.z = count - away;
        /* Promoted for as long as the stack is live, not just while a
           given pop runs. These transforms are written from JS, so the
           compositor never adopts them on its own the way it would a CSS
           or WAAPI animation - without this every frame repaints five
           cards of text on the main thread. Promoting and demoting around
           each pass would rebuild the layers on every scroll through the
           section, which costs more than holding five card-sized layers
           on a desktop-only breakpoint. */
        c.el.style.willChange = "transform";
        paint(c);
      });
      return true;
    };

    const on = place();
    if (on) {
      // First paint is the closed deck. Deliberately not conditioned on
      // whether the row is already in view: if it is, the observer fires a
      // moment later and the pop simply plays at once, which is the right
      // thing to see when a reader lands mid-page.
      for (const c of cells.current) {
        if (!c) continue;
        c.t = c.to = 0;
        paint(c);
      }
      open.current = false;
    }
    setArmed(on);

    // A resize moves the columns, so the offsets that put each card on the
    // centre line move with them. place() rewrites them and repaints at
    // whatever t the deck is currently sitting at, open, shut or mid-flight.
    const ro = new ResizeObserver(() => setArmed(place()));
    ro.observe(grid);

    // paint lives in this closure, so the animation effect below drives the
    // cards through it rather than duplicating the maths.
    driver.current = (i, to) => {
      const c = cells.current[i];
      if (!c?.el || c.to === to) return;
      c.to = to;
      c.run?.stop();
      const away = Math.abs(i - mid);
      c.run = animate(c.t, to, {
        duration: to === 1 ? OPEN_MS : SHUT_MS,
        // Opening, the pair nearest the middle leaves first and the outer
        // pair chases it. Closing runs the other way, so the far cards
        // come home first - it reads as a hand gathering them up.
        delay: (to === 1 ? away : mid - away) * STEP,
        ease: EASE,
        onUpdate: (v) => {
          c.t = v;
          paint(c);
        },
      });
    };

    return () => {
      ro.disconnect();
      driver.current = null;
      off();
    };
  }, [count]);

  useEffect(() => {
    if (!armed || !driver.current) return;
    // Between the two bands the deck holds whatever state it is in; that
    // gap is where a reader sits while actually reading the cards.
    if (midScreen) open.current = true;
    else if (!inFrame) open.current = false;
    const to = open.current ? 1 : 0;
    for (let i = 0; i < count; i++) driver.current(i, to);
  }, [armed, midScreen, inFrame, count]);

  return (
    <div ref={gridRef} className={className}>
      {Children.map(children, (child, i) => (
        <div
          ref={(el) => {
            cell(i).el = el;
          }}
          className="h-full"
        >
          {/* The fade is still Reveal's job. Its stagger is dropped once
              the deck is armed: staggering cards that are sitting on top of
              each other only makes the deck assemble itself in front of you
              before the real animation begins. */}
          <Reveal className="h-full" delay={armed ? 0 : i * STAGGER}>
            {child}
          </Reveal>
        </div>
      ))}
    </div>
  );
}
