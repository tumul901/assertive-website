import type { PillarId } from "./pillars";

export interface WorkItem {
  slug: string;
  title: string;
  client: string | null;
  pillar: PillarId;
  image: string;
  alt: string;
  /** One factual line. Nothing here may assert scale, footfall or budget. */
  note: string;
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
    note: "Stage, set and show management for the Amazon Music podcast showcase.",
  },
  {
    slug: "agenda-paschim",
    title: "Agenda Paschim",
    client: "News18 Network",
    pillar: "corporate",
    image: "/media/work/agenda-paschim.png",
    alt: "The News18 Agenda Paschim conclave set, a red and gold backdrop behind a panel seating arrangement",
    note: "Conclave set design and floor management for the News18 regional summit.",
  },
  {
    slug: "achievers",
    title: "Achievers",
    client: "Cleartrip",
    pillar: "corporate",
    image: "/media/work/cleartrip-achievers.webp",
    alt: "The Achievers registration desk, staffed by four hosts in front of a purple branded backdrop",
    note: "Registration, hosting and on-ground delivery for the AgentBox partner awards.",
  },
  {
    slug: "india-drives",
    title: "India Drives",
    client: null,
    pillar: "live",
    image: "/media/work/india-drives.webp",
    alt: "Folk dancers in yellow and orange performing in front of a large illuminated LED stage",
    note: "Live performance programming and stage production.",
  },
  {
    slug: "wedding-social",
    title: "Wedding & Social",
    client: null,
    pillar: "weddings",
    image: "/media/work/wedding.webp",
    alt: "A large illuminated wedding set built as an ornate palace facade, with tiered seating in front",
    note: "Set construction, lighting and guest experience for a large-format wedding.",
  },
];
