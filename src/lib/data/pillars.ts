import type { LucideIcon } from "lucide-react";
import { Building2, Megaphone, Music, MonitorPlay, Heart } from "lucide-react";

export type PillarId = "corporate" | "activation" | "live" | "content" | "weddings";

export interface Pillar {
  /**
   * Doubles as the URL slug: /services/corporate, /services/weddings. It
   * is also the class stem below and the petal key in petals.ts, so
   * renaming one breaks a route, a colour and a piece of the logo mark at
   * the same time. There is deliberately no separate `slug` field - a
   * second identifier for the same thing is a second thing to keep in
   * sync, and these five ids already read fine in a URL.
   */
  id: PillarId;
  name: string;
  hue: number;
  blurb: string;
  /**
   * The paragraph under the blurb on this discipline's own page. Longer
   * than `blurb`, which still has to fit a card and a mega-menu row, and
   * written to the same rule work.ts and services.ts both hold: no
   * numbers. No footfall, no reach, no budgets.
   */
  intro: string;
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
    intro:
      "A corporate programme is judged on the parts nobody is meant to notice - the delegate checked in before the first session started, the room walked before the spec was written, the freight that arrived in the order the build needed it. We run those alongside the visible half - the stage, the screens, the branding - so a conference, an incentive trip or a trade-show presence stays one plan with one team behind it, rather than a set of suppliers meeting each other for the first time on site.",
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
    intro:
      "An activation has to earn attention in a space that was never built to give it - a mall concourse, a fairground, an exhibition hall full of stands competing for the same passer-by. We carry the idea through fabrication, branding, print and merchandise ourselves, so what gets built on the ground is what was sold in the deck, down to the colour reference and the finish.",
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
    intro:
      "A live show is a running order that has to survive contact with the day. We handle the technical direction and the show-calling, the sound, lighting and vision that carry it, the LED that frames it and the artists standing on it - specified for the room it is actually happening in rather than for the invoice.",
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
    intro:
      "An event is over in a day and its footage is not. We build the things that carry it before, during and after - the site and the app holding an agenda that always changes late, the photography and film that come out of the room, and the stream that reaches everyone who could not be in it.",
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
    intro:
      "A wedding is the one brief where the guest list, the build and the schedule are all personal at once. We take the design through fabrication and print, run the invitations and chase the replies, book the artists, light the set and cover the whole of it on camera - one team across every function, so nothing gets handed between vendors halfway through the week.",
    ink: "text-weddings-ink",
    mark: "bg-weddings-mark",
    wash: "bg-weddings-wash",
  },
];
