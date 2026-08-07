import type { PillarId } from "./pillars";

export interface Photo {
  src: string;
  alt: string;
}

export interface WorkItem {
  slug: string;
  title: string;
  client: string | null;
  pillar: PillarId;
  /** The lead photograph. Cards and thumbnails use only this one. */
  image: string;
  alt: string;
  /**
   * FURTHER photographs of the same event, lead excluded - the case-study
   * carousel shows `[{image, alt}, ...gallery]`. Empty for all five today:
   * we have exactly one real frame per event. See DEMO_FILL below.
   */
  gallery: Photo[];
  /** One factual line. Nothing here may assert scale, footfall or budget. */
  note: string;
  /**
   * The case study. PLACEHOLDER COPY - written in-house so the section can
   * be built and reviewed, to be replaced wholesale when the client sends
   * theirs. Every line is grounded in what is actually visible in the
   * photograph or corroborated by a named testimonial in testimonials.ts.
   *
   * NO NUMBERS ANYWHERE, and none may be added here. Footfall, reach,
   * budget and percentage uplift are the claims that survive a copy
   * handover unnoticed and end up being defended in a client meeting. The
   * same rule already governs `note` above; it matters more here, because
   * an "Impact" heading is exactly where a reader expects a metric and
   * exactly where inventing one does the most damage.
   */
  headline: string;
  problem: string;
  solution: string;
  impact: string;
}

/*
 * The five events on the legacy homepage carousel, re-labelled from what
 * is actually visible IN the photographs rather than from the legacy
 * captions, which do not match their own images:
 *
 *   nsindia.webp   captioned "Nasdiya"    -> shows Amazon Music INDIA POD
 *                                            DAY, with IVM Podcasts and
 *                                            Westland Books branding
 *   e3.png         captioned "News18"     -> shows the AGENDA PASCHIM set,
 *                                            News18-branded
 *   sa.webp        captioned "Wedding"    -> a wedding set, correct
 *   clear.webp     captioned "Clear Trip" -> ACHIEVERS, AgentBox by
 *                                            Cleartrip
 *   e-formula.webp captioned "E formula"  -> INDIA DRIVES stage
 *
 * Two of these are directly corroborated by named testimonials in
 * PLAN.md section 3.4 (IVM Podcast / India Pod Day, News18 / Agenda
 * Paschim), so the photographs are the reliable source and the captions
 * are the defect. Raised in Appendix A - do not silently "correct" this
 * back to the legacy captions.
 *
 * Source files are 370x351. Never render one wider than about 420 CSS px:
 * beyond that they visibly soften. Real high-res masters are a launch
 * blocker (Appendix A).
 */
export const WORK: WorkItem[] = [
  {
    slug: "india-pod-day",
    title: "India Pod Day",
    client: "IVM Podcasts",
    pillar: "live",
    image: "/media/work/india-pod-day.webp",
    alt: "The Amazon Music India Pod Day stage, lit magenta, with seven armchairs set for a panel",
    gallery: [],
    note: "Stage, set and show management for the Amazon Music podcast showcase.",
    headline: "A Podcast Festival, Staged Like Live Television",
    problem:
      "Podcasting is an audio medium with no natural stage presence. India Pod Day had to work twice over - as a live event for the audience in the room, and as a set that would still read on camera in everything cut from it afterwards.",
    solution:
      "We built a panel set that holds up from every angle a camera could take it from, lit magenta so the brand reads even in a wide shot, and ran the day to broadcast timings so recording, audience changeover and stage resets never collided.",
    impact:
      "The showcase ran as one continuous programme rather than a series of separate recordings, and came away with a stage that photographed as well as it sounded.",
  },
  {
    slug: "agenda-paschim",
    title: "Agenda Paschim",
    client: "News18 Network",
    pillar: "corporate",
    image: "/media/work/agenda-paschim.png",
    alt: "The News18 Agenda Paschim conclave set, a red and gold backdrop behind a panel seating arrangement",
    gallery: [],
    note: "Conclave set design and floor management for the News18 regional summit.",
    headline: "A Regional Conclave With National Polish",
    problem:
      "A news conclave lives or dies on its optics. Agenda Paschim needed a set carrying the authority of the network's national programming, built to a regional summit's schedule and travelling to its venue.",
    solution:
      "A modular red-and-gold set drawn from the channel's on-air identity, with a seating plan that keeps every wide shot populated and a floor process that moves speakers on and off between segments without breaking the recording.",
    impact:
      "The conclave held its published running order from first session to last, and the set carried the network's look consistently across every panel staged on it.",
  },
  {
    slug: "achievers",
    title: "Achievers",
    client: "Cleartrip",
    pillar: "corporate",
    image: "/media/work/cleartrip-achievers.webp",
    alt: "The Achievers registration desk, staffed by four hosts in front of a purple branded backdrop",
    gallery: [],
    note: "Registration, hosting and on-ground delivery for the AgentBox partner awards.",
    headline: "An Awards Night That Starts At The Door",
    problem:
      "AgentBox partners arrive from across the country inside one narrow window. On a partner awards night the door is the first thing anyone experiences, and a queue there sets the tone for the whole evening.",
    solution:
      "A registration line built for throughput rather than decoration - credentials prepared ahead, four host positions working in parallel, and the branded backdrop placed so that even the queue reads as part of the event in photographs.",
    impact:
      "Guests moved from the door to their tables without a bottleneck, and the programme opened to a room that was already seated.",
  },
  {
    slug: "india-drives",
    title: "India Drives",
    client: null,
    pillar: "live",
    image: "/media/work/india-drives.webp",
    alt: "Folk dancers in yellow and orange performing in front of a large illuminated LED stage",
    gallery: [],
    note: "Live performance programming and stage production.",
    headline: "Folk Tradition On A Broadcast Stage",
    problem:
      "The opening had to read as unmistakably Indian without tipping into tourism-brochure shorthand, on a stage whose scale and LED wall were built for a very different kind of act.",
    solution:
      "Live folk performance programmed against the lighting and screen cues rather than in front of them, so the choreography and the stage move as a single piece and the wall works as part of the costume, not as wallpaper behind it.",
    impact:
      "The opening set the register for everything that followed on the stage that night, and gave the event its most-used sequence of footage.",
  },
  {
    slug: "wedding-social",
    title: "Wedding & Social",
    client: null,
    pillar: "weddings",
    image: "/media/work/wedding.webp",
    alt: "A large illuminated wedding set built as an ornate palace facade, with tiered seating in front",
    gallery: [],
    note: "Set construction, lighting and guest experience for a large-format wedding.",
    headline: "A Palace Built To Stand For One Night",
    problem:
      "The brief asked for a facade with the presence of a real building - at a scale that still had to be trucked in, built, lit, used and struck inside a single weekend.",
    solution:
      "A sectional palace set engineered around the load-in and lit to hold its detail all the way to the top of the frame, with tiered seating placed so guests read the whole facade from where they are sitting rather than only the middle of it.",
    impact:
      "The set carried the ceremony as its backdrop and the reception as its centrepiece, and came down on schedule the next morning.",
  },
];

/*
 * TEMPORARY - REMOVE BEFORE LAUNCH, along with the call in
 * CaseStudyCarousel. Every `gallery` above is empty because there is
 * exactly one real photograph of each event, so the nested photo carousel
 * has nothing to page through and renders no dots at all.
 *
 * With this on, each case study borrows two frames from OTHER events so
 * the sub-carousel can be seen and judged. They are real photographs of
 * real Assertive work, but they are NOT photographs of the event whose
 * case study they appear in - which is a caption error of exactly the kind
 * already logged against the legacy site at the top of this file. It must
 * not ship.
 *
 * The fix is not code: it is asking the client for the real galleries.
 * Once they arrive, fill in `gallery` above and set this to false.
 */
export const DEMO_FILL = true;

export function galleryFor(item: WorkItem): Photo[] {
  const own: Photo[] = [{ src: item.image, alt: item.alt }, ...item.gallery];
  if (!DEMO_FILL || own.length > 1) return own;

  /*
   * Matched on SLUG, not by identity. This runs inside a client component
   * whose items were handed over the server boundary, so they arrive as
   * fresh objects deserialized from the RSC payload - never the same
   * references this module's own WORK array holds. indexOf found nothing,
   * returned -1, and -1 % 4 is -1 in JS rather than 3, so the fill picked
   * an undefined entry and took the prerender down with it.
   */
  const others = WORK.filter((w) => w.slug !== item.slug);
  if (!others.length) return own;
  const at = Math.max(0, WORK.findIndex((w) => w.slug === item.slug));
  const borrowed = [others[at % others.length], others[(at + 2) % others.length]];
  return [...own, ...borrowed.map((w) => ({ src: w.image, alt: w.alt }))];
}
