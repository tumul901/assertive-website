import type { LucideIcon } from "lucide-react";
import { Building2, Megaphone, Music, MonitorPlay, Heart } from "lucide-react";

export type PillarId = "corporate" | "activation" | "live" | "content" | "weddings";

export interface Pillar {
  id: PillarId;
  name: string;
  hue: number;
  blurb: string;
  icon: LucideIcon;
  // Tailwind v4 exposes @theme keys as utilities; these are the class
  // stems, stored as FULL literal strings on purpose. Tailwind's compiler
  // finds classes via static text scanning - it cannot resolve a
  // constructed string like `bg-${pillar.id}-wash` at build time, since
  // no complete class name ever appears literally in the source for it
  // to find. Every field here must stay a whole, greppable class name.
  ink: string; // e.g. 'text-corporate-ink'
  mark: string; // e.g. 'bg-corporate-mark'
  wash: string; // e.g. 'bg-corporate-wash'
}

// Order is deliberate: Corporate first, the credibility play for the
// News18 / Royal Enfield audience. Matches the mockup's teal-first row.
//
// corporate/content/weddings blurbs are phrased from "assertive brand pitch
// deck final" (Google Slides, slide 5 - "A Full-Spectrum Event Ecosystem"),
// which is newer than the legacy-site copy the rest of this file was built
// from. That deck lists six ribbons, not five: its Corporate Events + MICE
// & Exhibitions fold into our single "Corporate & MICE" pillar below; its
// Government Events line has no home in the current five-petal wheel and
// was deliberately dropped, not merged; its Event Activation & Concerts
// line spans what this site keeps as two separate pillars (activation,
// live), so those two blurbs were left as-is rather than force-split.
export const PILLARS: Pillar[] = [
  {
    id: "corporate",
    name: "Corporate & MICE",
    hue: 220,
    icon: Building2,
    blurb: "Seamless, high-impact conferences, incentive trips and large-scale trade shows.",
    ink: "text-corporate-ink",
    mark: "bg-corporate-mark",
    wash: "bg-corporate-wash",
  },
  {
    id: "activation",
    name: "Brand Activation",
    hue: 26,
    icon: Megaphone,
    blurb:
      "Experiential marketing and BTL activations that bring brands to life where it matters.",
    ink: "text-activation-ink",
    mark: "bg-activation-mark",
    wash: "bg-activation-wash",
  },
  {
    id: "live",
    name: "Live & Entertainment",
    hue: 146,
    icon: Music,
    blurb: "Concerts, televised shows, sports events and artist management.",
    ink: "text-live-ink",
    mark: "bg-live-mark",
    wash: "bg-live-wash",
  },
  {
    id: "content",
    name: "Content & Digital",
    hue: 79,
    icon: MonitorPlay,
    blurb:
      "Strategic video, content and digital campaigns that carry the story onward.",
    ink: "text-content-ink",
    mark: "bg-content-mark",
    wash: "bg-content-wash",
  },
  {
    id: "weddings",
    name: "Weddings & Social",
    hue: 314,
    icon: Heart,
    blurb: "Premium, detail-oriented weddings designed and delivered end to end, at any scale.",
    ink: "text-weddings-ink",
    mark: "bg-weddings-mark",
    wash: "bg-weddings-wash",
  },
];
