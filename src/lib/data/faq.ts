export interface FaqItem {
  /** Stable key. Also the anchor if these ever need to be deep-linked. */
  id: string;
  q: string;
  a: string;
}

/*
 * THE CONSTRAINT THAT SHAPED EVERY ANSWER BELOW.
 *
 * stats.ts records the rule: the live site publishes no numbers anywhere -
 * no events delivered, no cities, no years active, no brands served - and
 * none may be invented. An FAQ is the single most tempting place on a
 * marketing site to break that rule, because the questions people actually
 * ask are exactly the ones a number answers: how long, how much, how big,
 * how many. Every stock FAQ template fills those with "3-6 months",
 * "packages from...", "we have delivered 500+ events". All of that would
 * be fabricated here.
 *
 * So the questions were chosen for what CAN be answered from the record,
 * and the unanswerable ones are answered honestly as unanswerable rather
 * than dropped - "there is no rate card" is a real answer to the cost
 * question, and a more trustworthy one than a made-up range.
 *
 * Provenance for each factual claim, so a future edit knows what is load-
 * bearing and what is voice:
 *
 *   five disciplines / sixteen services
 *       pillars.ts (5) and services.ts (16, from the legacy nav).
 *   set design, stage and show management, lighting, registration,
 *   on-ground hosting
 *       the five `note` fields in work.ts, which describe what was
 *       delivered on named events. Not a capability list someone wrote -
 *       a description of jobs already done.
 *   based in Delhi
 *       the legacy site's own About copy, verbatim: "ASSERTIVE BRAND
 *       COMMUNICATIONS is an event management company based in Delhi"
 *       (extracted/COPY-ALL.md). This is the ONLY geographic claim made
 *       anywhere here; note that q-where deliberately does not say where
 *       the company will or will not travel, because nothing on record
 *       establishes a service area.
 *
 * Everything else is either a statement about how events work in general
 * or a statement of intent about the conversation, neither of which
 * asserts a fact about this company. Keep it that way. If the client later
 * supplies real figures - years active, cities, typical lead times - they
 * belong here AND in stats.ts, not in one of them.
 */
export const FAQ: FaqItem[] = [
  {
    id: "what",
    q: "What kinds of events do you take on?",
    a: "Five disciplines: corporate and MICE, brand activation, live and entertainment, content and digital, and weddings and social — sixteen services in all, listed in full under Services. Most events draw on more than one of them. A conference that also needs a stage built, a launch that also needs a film.",
  },
  {
    id: "production",
    q: "Do you handle production, or only the planning?",
    a: "Both. Set design and construction, stage and show management, lighting, registration desks and on-ground hosting are all part of what we have delivered. The note under each event in Selected Events says which of those applied to it.",
  },
  {
    id: "where",
    q: "Where are you based?",
    a: "Delhi. Where an event runs is a logistics question rather than a yes-or-no one, so tell us the city and the dates and you will get a straight answer about whether we are the right team for it.",
  },
  {
    id: "when",
    q: "How far ahead should we start?",
    a: "Sooner is better, and there is no cut-off past which a brief stops being worth looking at. What shrinks as the date gets closer is the number of options still open — venues, artists, fabrication lead times — rather than whether the event can be done at all.",
  },
  {
    id: "size",
    q: "Is there a minimum event size?",
    a: "None that we publish. Scale changes what a production needs, not whether it deserves to be run properly, so the useful conversation is about the brief rather than a threshold.",
  },
  {
    id: "cost",
    q: "What does an event cost?",
    a: "There is no rate card, and a figure quoted before the brief is understood would be a guess dressed up as a number. Send us what you have, even roughly, and you will get a considered answer instead of a template.",
  },
];
