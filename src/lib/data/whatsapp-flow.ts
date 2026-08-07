import { WHATSAPP_NUMBER } from "./contact";

export interface FlowOption {
  /*
   * Dropped straight into the drafted message, so it carries its own
   * article and its own capitalisation - "a Corporate & MICE event", not
   * "corporate & mice". The caller must not lower-case it (MICE is an
   * acronym) and must not prepend "a" (one of these options is already
   * "an event", which would come out as "a an event").
   */
  value: string;
  /** Goes on the button and into the transcript. */
  label: string;
}

/*
 * Script for the WhatsApp widget's assistant.
 *
 * WHAT IS REAL AND WHAT IS NOT. The conversation is scripted - there is no
 * model behind it. What IS real: the handoff opens wa.me against the
 * actual business number with the answers already written into the
 * message, so a visitor who uses this lands in a genuine WhatsApp thread
 * with the company. The contact step (name + email, asked last) is also
 * real - it POSTs to /api/leads and lands on the same admin page as the
 * Enquiry form - but that save is best-effort: it never blocks or delays
 * the WhatsApp handoff itself, so a backend hiccup costs a database row,
 * never the one thing the visitor actually came for. See WhatsAppWidget's
 * submitContact().
 *
 * NO CLAIMS. Same rule as faq.ts and stats.ts: nothing here may assert a
 * fact the site cannot support. Two things a WhatsApp mock reaches for by
 * default were cut for this reason:
 *
 *   "Online - replies instantly"   a response-time promise nobody made.
 *                                  The panel shows the real phone number
 *                                  instead, which is a fact.
 *   the green presence dot         means "a person is at the other end
 *                                  right now" as unambiguously as the
 *                                  words would. Also cut.
 *
 * The per-event acknowledgement reuses each pillar's own blurb verbatim
 * from pillars.ts rather than writing fresh descriptions here, so the
 * assistant cannot end up describing the business differently from the
 * page behind it.
 */

export const GREETING = [
  "Hi there 👋",
  "This is the Assertive desk. A few quick questions, then I will hand you over on WhatsApp with your answers already written out.",
];

export const ASK_EVENT = "What kind of event are you planning?";
export const ASK_TIMING = "Roughly when is it?";
export const ASK_CONTACT =
  "Last thing - what's your name and email? Our team can reach you directly, even if this chat does not end up getting sent.";

/** Offered alongside the five pillars, so nobody is forced into a bad fit. */
export const OTHER_EVENT: FlowOption = {
  value: "an event",
  label: "Something else",
};

/** The five pillars as options. Article included - see FlowOption.value. */
export function eventOption(pillarName: string): FlowOption {
  return { value: `a ${pillarName} event`, label: pillarName };
}

export const ACK_OTHER = "Understood - you can describe it in the message.";

export const TIMING_OPTIONS: FlowOption[] = [
  { value: "within a month", label: "Within a month" },
  { value: "one to three months", label: "1-3 months" },
  { value: "later this year", label: "Later this year" },
  { value: "not settled yet", label: "Still deciding" },
];

export const HANDOFF = [
  "That is everything I need.",
  "Tap below and WhatsApp opens with this already written out. The team picks it up from there.",
];

/** Shown under the handoff button for anyone who would rather not use WhatsApp. */
export const EMAIL_FALLBACK = "Prefer email? Send an enquiry instead";

/**
 * The message the visitor arrives in WhatsApp with. Written in their voice,
 * not the company's, because it is their outgoing message - a draft they
 * can still edit before sending, which is worth leaving room for.
 */
export function draftMessage(event: string, timing: string) {
  return `Hi Assertive, I am planning ${event}. Timing: ${timing}. (Sent from your website.)`;
}

/** wa.me deep link. Opens the app on mobile, web.whatsapp.com on desktop. */
export function whatsappUrl(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * Where the floating button goes with no JavaScript, and the href it
 * carries even when JavaScript does take over the click. No answers to
 * draft from at that point, so it opens an empty-handed but real chat.
 */
export const PLAIN_WHATSAPP_URL = whatsappUrl("Hi Assertive, I have an enquiry.");
