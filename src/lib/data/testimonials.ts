import type { PillarId } from "./pillars";

export interface Testimonial {
  quote: string;
  name: string;
  org: string;
  pillar: PillarId;
}

// Verbatim from PLAN.md section 3.4 / the legacy site. Do not trim or
// paraphrase - see the Phase 8 acceptance criteria (byte-identical check).
// Pillar assignment (which client's work each maps to) is specified in
// PLAN.md Phase 8: Royal Enfield -> activation, IVM -> live, News18 ->
// corporate.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Assertive brand Communication did an exceptional job with our Bike Display Booth. The design was stunning, and the setup was flawless. Their team's attention to detail and professionalism made the entire process smooth and enjoyable. We highly recommend Assertive Brand Communication for their outstanding work.",
    name: "Talib Anwer",
    org: "Royal Enfield",
    pillar: "activation",
  },
  {
    quote:
      "We were thrilled with Assertive's flawless execution of our televised event. The team's professionalism, attention to detail, and seamless handling of all aspects made the experience exceptional. The positive feedback from our audience says it all. We highly recommend Assertive Brand Communication for their outstanding work.",
    name: "Jenifer Gonsalves",
    org: "IVM Podcast",
    pillar: "live",
  },
  {
    quote:
      "Our Agenda Paschim was a resounding success, thanks to your team's meticulous planning and execution. From the elegant venue to the seamless coordination of activities, everything exceeded our expectations. Our employees are still talking about the fantastic experience. We couldn't have asked for a better event partner!",
    name: "Vinay Kumar",
    org: "News18 Network",
    pillar: "corporate",
  },
];
