"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Send, CheckCheck } from "lucide-react";
import { PILLARS } from "@/lib/data/pillars";
import { PHONE } from "@/lib/data/contact";
import { isValidEmail } from "@/lib/utils";
import {
  ACK_OTHER,
  ASK_CONTACT,
  ASK_EVENT,
  ASK_TIMING,
  EMAIL_FALLBACK,
  GREETING,
  HANDOFF,
  OTHER_EVENT,
  PLAIN_WHATSAPP_URL,
  TIMING_OPTIONS,
  draftMessage,
  eventOption,
  whatsappUrl,
  type FlowOption,
} from "@/lib/data/whatsapp-flow";

/*
 * A WhatsApp-style assistant in the corner of the page. Scripted, not
 * intelligent - see whatsapp-flow.ts for what is real here and what is a
 * stand-in. The short version: the conversation is a four-step state
 * machine (event, timing, contact, handoff), and the ending is a genuine
 * wa.me deep link to the real business number, so this works end to end
 * for a visitor regardless of what happens to the contact step's save.
 *
 * THE CONTACT STEP'S POST TO /api/leads IS FIRE-AND-FORGET ON PURPOSE -
 * see submitContact(). It is awaited far enough to know it was sent, but
 * its result never gates the state transition to the handoff step. A
 * lead-capture widget that makes "can I reach WhatsApp" depend on "did
 * the database write succeed" has its priorities backwards for a corner
 * widget whose entire value proposition is the WhatsApp link.
 *
 * THE BUTTON IS AN <a>, NOT A <button>, and that is the whole no-JS
 * story. Its href is a real WhatsApp link; the click handler
 * preventDefault()s and opens the panel instead. With scripting on you get
 * the assistant, with scripting off you get WhatsApp directly. No noscript
 * stylesheet, no second code path, and the degraded version lands the
 * visitor in exactly the place the enhanced version was going to take
 * them anyway.
 *
 * COLOURS ARE HARD-CODED WhatsApp VALUES, deliberately outside the token
 * system. Every other surface on this site is built from surface/ink so it
 * follows the theme, and doing that here would be actively wrong: the
 * point of this panel is that it is instantly recognisable as WhatsApp,
 * and WhatsApp does not have a light mode that looks like a bone-coloured
 * page. It stays dark in both themes for the same reason --color-chip
 * does (tokens.css) - some things read correctly only when they are
 * allowed to keep their own identity. Contrast was measured against these
 * literals rather than assumed.
 *
 * NON-MODAL, so no backdrop element and no body scroll lock. Both were in
 * the reference implementation this was adapted from, and both are wrong
 * for a corner widget: a full-screen invisible backdrop makes the entire
 * page inert while a 360px panel is open, which is modal behaviour without
 * announcing itself. Escape closes, clicking outside closes, and the page
 * behind stays usable throughout.
 */

const PANEL = {
  bg: "#0b141a",
  chrome: "#202c33",
  edge: "#2a3942",
  botBubble: "#202c33",
  userBubble: "#005c4b",
  ink: "#e9edef",
  inkMuted: "#8696a0",
  action: "#00a884",
  fab: "#25d366",
} as const;

/*
 * The chat wallpaper. The reference implementation pulled WhatsApp's own
 * tile PNG off their CDN, which is someone else's asset served from
 * someone else's host - a request we do not control on every page load.
 * A dot grid at 4.5% is the same visual job, self-contained, and weighs
 * nothing.
 */
const WALLPAPER = {
  backgroundImage:
    "radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.055) 1px, transparent 0)",
  backgroundSize: "22px 22px",
};

/*
 * A literal, not useId(). It only has to be unique on the page, there is
 * exactly one of these mounted (in the root layout), and aria-controls has
 * to resolve on the very first paint - before any hook has run - or the
 * button spends that frame pointing at nothing.
 */
const PANEL_ID = "wa-chat-panel";

type Answer = { value: string; label: string } | null;

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState(false);
  const [event, setEvent] = useState<Answer>(null);
  const [timing, setTiming] = useState<Answer>(null);
  const [contact, setContact] = useState<{ name: string; email: string } | null>(null);

  const fabRef = useRef<HTMLAnchorElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /*
   * Read as a function inside handlers and effects rather than through
   * useReducedMotion(). That hook returns false during SSR, so branching
   * render output on it is a hydration mismatch waiting to happen - the
   * pattern this codebase has been bitten by before. Nothing here needs it
   * at render time anyway; it only ever gates a delay and a scroll.
   */
  const reduced = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const close = useCallback(() => {
    setOpen(false);
    fabRef.current?.focus();
  }, []);

  // Escape from anywhere, and a click outside the panel. Both are document
  // listeners rather than a backdrop element - see the header note.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (panelRef.current?.contains(t) || fabRef.current?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open, close]);

  // Keep the newest message in view. The transcript only ever grows
  // downward, so this is a scroll to the bottom, not a scrollIntoView on a
  // node - which would fight the page's own scroll position.
  useEffect(() => {
    const el = logRef.current;
    if (!el || !open) return;
    el.scrollTo({ top: el.scrollHeight, behavior: reduced() ? "auto" : "smooth" });
  }, [open, step, typing]);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  function answer(kind: "event" | "timing", option: FlowOption) {
    const picked = { value: option.value, label: option.label };
    if (kind === "event") setEvent(picked);
    else setTiming(picked);

    // The pause before the reply is the whole illusion. It is also the
    // first thing to go under reduced motion: a deliberate wait is a
    // motion effect even though nothing moves during it.
    setTyping(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(
      () => {
        setTyping(false);
        setStep((s) => s + 1);
      },
      reduced() ? 0 : 750,
    );
  }

  function submitContact(name: string, email: string) {
    setContact({ name, email });

    // Best-effort, not awaited by the state transition below - see the
    // header comment. A failed fetch here is silently swallowed rather
    // than surfaced, because there is nothing useful for the visitor to
    // do about a background save failing; the handoff proceeds either way.
    fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "whatsapp",
        name,
        email,
        eventType: event?.label,
        timing: timing?.label,
      }),
    }).catch(() => {});

    setTyping(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(
      () => {
        setTyping(false);
        setStep((s) => s + 1);
      },
      reduced() ? 0 : 750,
    );
  }

  function toggle(e: React.MouseEvent) {
    e.preventDefault(); // the href is the no-JS fallback, not the JS path
    setOpen((o) => !o);
  }

  const eventOptions: FlowOption[] = [
    ...PILLARS.map((p) => eventOption(p.name)),
    OTHER_EVENT,
  ];

  const ack =
    event === null
      ? null
      : (PILLARS.find((p) => p.name === event.label)?.blurb ?? ACK_OTHER);

  const draft = event && timing ? draftMessage(event.value, timing.value) : "";

  return (
    <div className="pointer-events-none fixed right-4 bottom-4 z-30 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <div
        ref={panelRef}
        id={PANEL_ID}
        role="dialog"
        aria-label="Chat with Assertive on WhatsApp"
        // Hidden from the a11y tree while closed, not merely invisible -
        // an opacity-0 panel is still six paragraphs a screen reader will
        // read out of nowhere. inert also stops the option buttons being
        // reachable by Tab while the panel is shut.
        aria-hidden={!open}
        inert={!open}
        className={`pointer-events-auto flex w-[min(360px,calc(100vw-2rem))] origin-bottom-right flex-col overflow-hidden rounded-2xl border shadow-[0_18px_50px_-12px_rgb(0_0_0/0.55)] transition-[opacity,translate,scale] duration-[var(--dur-base)] ease-out-expo ${
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-4 scale-95 opacity-0"
        }`}
        style={{ backgroundColor: PANEL.bg, borderColor: PANEL.edge }}
      >
        {/* ---- chrome ---- */}
        <div
          className="flex items-center gap-3 border-b px-4 py-3"
          style={{ backgroundColor: PANEL.chrome, borderColor: PANEL.edge }}
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/95">
            <Image src="/logo-mark.png" alt="" width={45} height={44} className="h-6 w-auto" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm font-semibold" style={{ color: PANEL.ink }}>
              Assertive Brand Communications
            </span>
            {/* The real number, in place of the "Online - replies
                instantly" line a WhatsApp mock reaches for by default.
                See whatsapp-flow.ts: that line is a promise nobody made. */}
            <span className="block truncate text-xs" style={{ color: PANEL.inkMuted }}>
              {PHONE}
            </span>
          </span>
          <button
            type="button"
            onClick={close}
            aria-label="Close chat"
            className="grid size-8 shrink-0 place-items-center rounded-full transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ color: PANEL.inkMuted, outlineColor: PANEL.action }}
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {/* ---- transcript ---- */}
        <div
          ref={logRef}
          className="wa-log relative h-[min(52svh,420px)] overflow-y-auto overscroll-contain px-3 py-4"
          style={WALLPAPER}
          // polite, so a bot reply is announced without interrupting
          // whatever the user is doing; the whole log is the live region
          // because messages arrive as a group, not one node at a time.
          aria-live="polite"
        >
          <div className="flex flex-col gap-2">
            <Stamp>Today</Stamp>

            {GREETING.map((line) => (
              <Bubble key={line} from="bot">
                {line}
              </Bubble>
            ))}
            <Bubble from="bot">{ASK_EVENT}</Bubble>

            {step === 0 && !typing && (
              <Options options={eventOptions} onPick={(o) => answer("event", o)} />
            )}

            {event && <Bubble from="user">{event.label}</Bubble>}
            {typing && step === 0 && <Typing />}

            {step >= 1 && (
              <>
                <Bubble from="bot">{ack}</Bubble>
                <Bubble from="bot">{ASK_TIMING}</Bubble>
                {step === 1 && !typing && (
                  <Options options={TIMING_OPTIONS} onPick={(o) => answer("timing", o)} />
                )}
              </>
            )}

            {timing && <Bubble from="user">{timing.label}</Bubble>}
            {typing && step === 1 && <Typing />}

            {step >= 2 && (
              <>
                <Bubble from="bot">{ASK_CONTACT}</Bubble>
                {step === 2 && !typing && <ContactForm onSubmit={submitContact} />}
              </>
            )}

            {contact && <Bubble from="user">{`${contact.name} · ${contact.email}`}</Bubble>}
            {typing && step === 2 && <Typing />}

            {step >= 3 && (
              <>
                {HANDOFF.map((line) => (
                  <Bubble key={line} from="bot">
                    {line}
                  </Bubble>
                ))}

                {/* The draft, shown before it is sent. A widget that fires
                    off a message on the visitor's behalf without showing
                    them the words is doing something they did not agree
                    to; wa.me only ever prefills, so showing it here keeps
                    the UI honest about that. */}
                <p
                  className="mt-1 rounded-lg border border-dashed px-3 py-2 text-xs leading-relaxed"
                  style={{ borderColor: PANEL.edge, color: PANEL.inkMuted }}
                >
                  {draft}
                </p>

                <a
                  href={whatsappUrl(draft)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    fetch("/api/leads", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        source: "whatsapp",
                        eventType: event.label,
                        timing: timing.label,
                        message: draft,
                      }),
                    }).catch(console.error);
                  }}
                  className="mt-1 flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ backgroundColor: PANEL.action, outlineColor: PANEL.fab }}
                >
                  Continue on WhatsApp
                  <Send size={15} aria-hidden="true" />
                </a>

                <Link
                  href="#enquiry"
                  onClick={close}
                  className="mt-1 text-center text-xs underline underline-offset-2 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ color: PANEL.inkMuted, outlineColor: PANEL.action }}
                >
                  {EMAIL_FALLBACK}
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ---- the floating button ---- */}
      <a
        ref={fabRef}
        href={PLAIN_WHATSAPP_URL}
        onClick={toggle}
        aria-expanded={open}
        aria-controls={PANEL_ID}
        aria-label={open ? "Close WhatsApp chat" : "Chat with us on WhatsApp"}
        className="pointer-events-auto grid size-13 place-items-center rounded-full text-white shadow-[0_6px_20px_-2px_rgb(37_211_102/0.5)] transition-transform duration-[var(--dur-base)] ease-out-expo hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:hover:scale-100"
        style={{ backgroundColor: PANEL.fab, outlineColor: PANEL.action }}
      >
        {open ? <X size={24} aria-hidden="true" /> : <WhatsAppGlyph />}
      </a>
    </div>
  );
}

/* -------------------------------------------------------------------- */

function Bubble({ from, children }: { from: "bot" | "user"; children: React.ReactNode }) {
  const isBot = from === "bot";
  return (
    <div
      className={`max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
        isBot ? "self-start rounded-tl-sm" : "self-end rounded-br-sm"
      }`}
      style={{
        backgroundColor: isBot ? PANEL.botBubble : PANEL.userBubble,
        color: PANEL.ink,
      }}
    >
      {children}
      {/* Read receipts on the visitor's own messages only, which is where
          WhatsApp puts them. Decorative, hence aria-hidden - a screen
          reader announcing "double check mark" after every answer is
          noise, not information. */}
      {!isBot && (
        <span className="mt-0.5 flex justify-end" style={{ color: "#8fd0c4" }} aria-hidden="true">
          <CheckCheck size={13} />
        </span>
      )}
    </div>
  );
}

function Stamp({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="mx-auto rounded-md px-2.5 py-1 text-[11px] font-medium"
      style={{ backgroundColor: "#182229", color: PANEL.inkMuted }}
    >
      {children}
    </span>
  );
}

function Typing() {
  return (
    <div
      className="flex w-fit items-center gap-1 self-start rounded-xl rounded-tl-sm px-3 py-3"
      style={{ backgroundColor: PANEL.botBubble }}
      aria-label="Typing"
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="wa-dot size-1.5 rounded-full"
          style={{ backgroundColor: PANEL.inkMuted, animationDelay: `${i * 160}ms` }}
        />
      ))}
    </div>
  );
}

/*
 * Quick replies. Buttons rather than a text input on purpose: a free-text
 * box promises comprehension this has none of, and the first thing anyone
 * would type into it is a question the script cannot answer. Three taps
 * with no typing is also simply faster on a phone.
 */
function Options({
  options,
  onPick,
}: {
  options: FlowOption[];
  onPick: (o: FlowOption) => void;
}) {
  return (
    <div className="mt-1 flex flex-wrap justify-end gap-1.5">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onPick(o)}
          className="rounded-full border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ borderColor: PANEL.action, color: PANEL.action, outlineColor: PANEL.action }}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

/*
 * The one free-text step in an otherwise tap-only flow - name and email
 * are not the kind of thing Options' pill buttons can offer. Validated
 * on submit, not on every keystroke: an error under an input the visitor
 * has not finished typing into yet reads as the widget getting ahead of
 * itself.
 */
function ContactForm({ onSubmit }: { onSubmit: (name: string, email: string) => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);

  const valid = name.trim().length > 0 && isValidEmail(email);
  const fieldStyle = {
    backgroundColor: PANEL.chrome,
    borderColor: PANEL.edge,
    color: PANEL.ink,
  };

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) {
      setTouched(true);
      return;
    }
    onSubmit(name.trim(), email.trim());
  }

  return (
    <form onSubmit={submit} className="mt-1 flex w-full flex-col gap-2 self-end">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        aria-label="Your name"
        className="rounded-lg border px-3 py-2 text-sm outline-none focus-visible:outline-2 focus-visible:outline-offset-1"
        style={{ ...fieldStyle, outlineColor: PANEL.action }}
      />
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Your email"
        className="rounded-lg border px-3 py-2 text-sm outline-none focus-visible:outline-2 focus-visible:outline-offset-1"
        style={{ ...fieldStyle, outlineColor: PANEL.action }}
      />
      {touched && !valid && (
        <p className="text-xs" style={{ color: "#f15c6d" }}>
          A name and a valid email are needed to continue.
        </p>
      )}
      <button
        type="submit"
        className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
        style={{ backgroundColor: PANEL.action, outlineColor: PANEL.fab }}
      >
        Continue
      </button>
    </form>
  );
}

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 16 16" className="size-7" fill="currentColor" aria-hidden="true">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
    </svg>
  );
}
