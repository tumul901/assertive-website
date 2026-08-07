import type { PillarId } from "./pillars";
import { WORK, type Photo } from "./work";

export interface Service {
  slug: string;
  name: string;
  pillar: PillarId;
  legacyUrl: string;
  /**
   * The one-line card blurb. REAL COPY for 14 of the 16 - extracted
   * verbatim from the "Other services" grid repeated on every legacy page
   * (PLAN.md section 3.7b, "do not rewrite without approval"). That grid
   * never carried a card for Experiential Marketing or Audience
   * Acquisition - both had a nav entry and a page but no card, one of the
   * two content defects PLAN.md logs rather than silently fixes - so
   * those two blurbs are distilled from this service's own `description`
   * below instead of lifted from a source that never had them. Flagged
   * inline at each of those two entries.
   */
  blurb: string;
  /**
   * The one body paragraph from the legacy service page -
   * extracted/copy/<slug>.md, reused per PLAN.md section 3.7b ("reusable
   * for the later service-page build"). Verbatim for 14 of 16. The other
   * two are legacy content defects, not something to perpetuate silently,
   * flagged inline at the entry:
   *   wedding-management  - the extracted paragraph names the wrong
   *                          company ("At Royal Rasm, we..."); corrected
   *                          to Assertive here, nothing else changed.
   *   mice-and-logistics  - the extracted paragraph is not its own copy
   *                          at all. logistics.php's body text is
   *                          experiential-marketing's paragraph, pasted in
   *                          wholesale, word for word - a legacy
   *                          copy-paste error, not alternate phrasing.
   *                          Using it here would put marketing.php's text
   *                          on two different service pages. Replaced with
   *                          a placeholder paragraph, written in-house
   *                          exactly as work.ts's case-study copy was, to
   *                          be swapped for real client copy later.
   */
  description: string;
  /**
   * The REAL photograph for this service, once the client supplies one -
   * shown beside `description` on the page (ServiceHero stays photo-free,
   * paired with the brand mark instead; see its file comment). Unset for
   * all 16 today - no per-service photography exists (PLAN.md Appendix A
   * item 2: the entire legacy library is 60 files, the largest real
   * photograph is 811x517, and what IS per-service is the same 15 generic
   * nav-thumbnails recycled across every legacy page, not a unique photo
   * for any one service). Read through `imageFor()` below, never
   * directly - that is what applies the temporary DEMO_SERVICE_IMAGE
   * borrow while this is unset, and what makes "the client sent a real
   * photo" a one-line edit here with no other change needed anywhere.
   */
  image?: Photo;
}

// All 16 services from the legacy nav (PLAN.md section 3.2), grouped by
// pillar. This file backs both the header mega-menu / footer links and
// the /services/[slug] page template - one format, per-service copy read
// from here (see ServiceHero.tsx and app/services/[slug]/page.tsx).
export const SERVICES: Service[] = [
  // Brand Activation (5)
  {
    slug: "experiential-marketing",
    name: "Experiential Marketing",
    pillar: "activation",
    legacyUrl: "marketing.php",
    // Distilled from `description` below, not lifted from the legacy
    // one-liner grid - see the interface comment above.
    blurb: "Face-to-face brand experiences that cut through digital noise and build real connection.",
    description:
      "In a world saturated with digital content and advertisements, experiential marketing offers a powerful way to cut through the noise by creating meaningful, face-to-face interactions between brands and consumers. Assertive Brand Communication brings brands to life, enabling people to experience their values, personality, and products in a dynamic and engaging setting. Whether through live events, brand activations, or immersive pop-ups, experiential marketing invites consumers to participate, interact, and form personal connections with the brand, resulting in experiences that are not just seen but felt. This deep emotional engagement is key to building long-term brand loyalty and driving authentic word-of-mouth promotion.",
  },
  {
    slug: "btl-promotions-activations",
    name: "BTL Promotions & Activations",
    pillar: "activation",
    legacyUrl: "promotions-activations.php",
    blurb: "We help make intelligent and informed purchasing decisions for your customers.",
    description:
      "At Assertive Brand Communication, we excel in BTL (Below-The-Line) promotions and activations that drive direct engagement and boost brand visibility. Our team delivers creative and targeted campaigns, from concept development to execution, ensuring impactful interactions with your audience. We focus on maximizing reach and creating memorable experiences that enhance brand connection and drive results.",
  },
  {
    slug: "brand-launches",
    name: "Brand Launches",
    pillar: "activation",
    legacyUrl: "brand-launches.php",
    blurb: "From press events to elegant invites, we innovate and showcase your brand.",
    description:
      "At Assertive Brand Communication, we excel at crafting impactful brand launches that introduce your brand to the market with a lasting impression. Our team combines strategic planning, creative design, and flawless execution to create memorable experiences that resonate with your target audience. From concept to completion, we handle every detail, ensuring your brand launch not only captures attention but also builds excitement and drives loyalty. Trust us to deliver a bold, innovative launch that positions your brand for success.",
  },
  {
    slug: "audience-acquisition",
    name: "Audience Acquisition",
    pillar: "activation",
    legacyUrl: "audience-acquisition.php",
    // Distilled from `description` below - see the interface comment above.
    blurb: "Market research and targeted outreach that bring the right audience to your event.",
    description:
      "At Assertive Brand Communication, our approach to audience acquisition is designed to ensure optimal engagement and impact for every event. We employ a strategic blend of market research, targeted outreach, and data-driven insights to attract and retain a relevant audience. By leveraging our industry expertise and utilizing advanced analytics, we create tailored strategies that enhance event visibility, maximize attendance, and drive meaningful interactions. Our commitment to understanding audience needs and preferences allows us to deliver exceptional event experiences that achieve our clients' goals and exceed expectations.",
  },
  {
    slug: "merchandising",
    name: "Merchandising",
    pillar: "activation",
    legacyUrl: "merchandising.php",
    blurb: "Create impactful brand merchandises to increase visibility and engagement.",
    description:
      "At Assertive Brand Communication, we specialize in merchandising for events, providing tailored solutions that enhance brand visibility and maximize engagement. Our team manages all aspects, from product selection and design to on-site sales and inventory management. We ensure a seamless integration of merchandising into your event, creating a memorable experience that drives both audience interaction and brand impact.",
  },

  // Corporate & MICE (4)
  {
    slug: "corporate-events",
    name: "Corporate Events",
    pillar: "corporate",
    legacyUrl: "corporate-events.php",
    blurb: "Conferences are the ideal way to create a platform for networking.",
    description:
      "Corporate events are pivotal moments that bring together key stakeholders to align on goals, celebrate achievements, and foster a sense of community within a professional setting. Whether it's an annual meeting, a team-building retreat, or a client appreciation event, these occasions provide invaluable opportunities to enhance brand image, share knowledge, and strengthen relationships. At Assertive Brand Communication, we believe that with careful planning and attention to detail, corporate events can be transformed into memorable experiences that motivate employees, impress clients, and reinforce the company's vision and values. By creating an environment that encourages engagement and collaboration, Assertive Brand Communication helps drive business growth and build a stronger, more connected corporate culture.",
  },
  {
    slug: "mice-and-logistics",
    name: "MICE and Logistics",
    pillar: "corporate",
    legacyUrl: "logistics.php",
    blurb: "Rewarding and motivating employees are essential for the growth of any company.",
    // PLACEHOLDER - written in-house, not extracted. See the interface
    // comment above: the legacy page's own paragraph is experiential-
    // marketing's copy, pasted in wholesale. No numbers anywhere, same
    // rule as work.ts's case-study copy - to be replaced wholesale once
    // real client copy exists.
    description:
      "At Assertive Brand Communication, we manage the MICE and logistics behind conferences, incentive trips and large-scale trade shows - venue sourcing, delegate travel, on-ground coordination and the dozens of moving parts a multi-day corporate gathering depends on. Our team plans for the schedule that will actually happen, not the one on paper, so speakers start on time and delegates are never the ones solving a logistics problem. The goal is the same one good MICE planning always has: an event substantial enough to matter to the people attending it, run so smoothly that none of the planning is visible.",
  },
  {
    slug: "exhibition",
    name: "Exhibition",
    pillar: "corporate",
    legacyUrl: "exhibition.php",
    blurb: "Do you know what it takes to make your exhibitions impactful?",
    description:
      "At Assertive Brand Communication, we specialize in designing and managing impactful exhibitions that showcase your brand and engage your audience. Our team brings creativity and strategic planning to every project, ensuring your exhibition stands out and delivers a memorable experience. From booth design and setup to audience interaction and post-event analysis, we handle every detail to maximize your brand's visibility and impact. Partner with us to create an exhibition that effectively communicates your brand's message and drives meaningful connections.",
  },
  {
    slug: "award-functions",
    name: "Award Functions",
    pillar: "corporate",
    legacyUrl: "award-fuctions.php", // legacy URL is misspelled on the live site
    blurb: "Extend your organization's reach and influence through motivating award functions.",
    description:
      "At Assertive Brand Communication, we specialize in organizing awards functions that celebrate excellence and create memorable experiences. Our team handles every detail, from event planning and design to execution and production, ensuring a seamless and impactful event. With a focus on professionalism and creativity, we deliver award functions that honor achievements and enhance your brand's prestige. Partner with us to create a distinguished event that leaves a lasting impression.",
  },

  // Live & Entertainment (4)
  {
    slug: "live-concerts",
    name: "Live Concerts",
    pillar: "live",
    legacyUrl: "live-concerts.php",
    blurb: "When you're looking for a crowd-pleasing event, live concerts are a surefire success.",
    description:
      "At Assertive Brand Communication, we create and manage live concerts that deliver unforgettable experiences and elevate your brand. From planning and staging to promotion and execution, our team ensures a seamless production that captivates audiences and highlights your brand's presence. With a commitment to excellence and creativity, we turn live concerts into spectacular events that leave a lasting impact.",
  },
  {
    slug: "artist-management",
    name: "Artist Management",
    pillar: "live",
    legacyUrl: "artist-management.php",
    blurb: "From booking to promotions, our artist management service handles it all.",
    description:
      "At Assertive Brand Communication, we provide expert artists management services that ensure smooth and successful engagements. Our team handles all aspects, from bookings and negotiations to logistics and event coordination, allowing artists to focus on their craft. We are dedicated to delivering seamless experiences and maximizing opportunities, enhancing both the artist's and the client's objectives.",
  },
  {
    slug: "televised-shows",
    name: "Televised Shows",
    pillar: "live",
    legacyUrl: "televised.php",
    blurb: "We are one of the few event management agencies to organize and manage televised shows.",
    description:
      "At Assertive Brand Communication, we excel in managing televised events that capture attention and deliver your brand's message to a wide audience. From planning and production to live broadcast, our team ensures a flawless execution that engages viewers and elevates your brand. With a focus on creativity and technical expertise, we create televised events that leave a lasting impression. Trust us to turn your vision into a dynamic, memorable broadcast.",
  },
  {
    slug: "sports-events",
    name: "Sports Events",
    pillar: "live",
    legacyUrl: "sports-events.php",
    blurb: "We organize adrenaline-filled sports events with top-notch thrill and precision.",
    description:
      "At Assertive Brand Communication, we design and manage sports events that captivate audiences and enhance brand visibility. Our team oversees every detail, from event planning and logistics to execution and promotion, ensuring a dynamic and engaging experience. With a focus on precision and creativity, we deliver sports events that highlight your brand and create memorable moments for participants and spectators alike.",
  },

  // Content & Digital (2)
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    pillar: "content",
    legacyUrl: "digital-marketing.php",
    blurb: "Innovative digital marketing strategies to increase brand visibility.",
    description:
      "At Assertive Brand Communication, we leverage digital marketing to amplify event impact and drive engagement. Our team crafts targeted strategies, including social media campaigns, email marketing, and online promotions, to boost event visibility and connect with your audience. We focus on maximizing reach and interaction, ensuring your event achieves its full potential in the digital landscape.",
  },
  {
    slug: "video-production",
    name: "Video Production & Content Creation",
    pillar: "content",
    legacyUrl: "video-production.php",
    blurb: "Professional video production for capturing your brand's most memorable moments.",
    description:
      "At Assertive Brand Communication, we offer expert video production and content creation services that bring your brand's story to life. Our team handles every aspect, from concept development and scripting to filming and editing, ensuring high-quality, engaging content. We focus on creating impactful videos that resonate with your audience and enhance your brand's presence.",
  },

  // Weddings & Social (1)
  {
    slug: "wedding-management",
    name: "Wedding Management",
    pillar: "weddings",
    legacyUrl: "wedding-management.php",
    blurb: "Comprising of a team of qualified and experienced Wedding Industry experts.",
    // "At Royal Rasm" in the extracted source -> corrected to Assertive.
    // See the interface comment above; nothing else in this paragraph
    // was rewritten.
    description:
      "Wedding management is the art of transforming a couple's dream day into a seamless and unforgettable experience. At Assertive Brand Communication, we ensure that every detail, from the initial planning stages to the final \"I do,\" is carefully orchestrated to reflect the couple's unique vision and style. Our wedding management services cover everything from venue selection, décor design, and vendor coordination to timeline management and guest experience. We focus on making every moment flow effortlessly, allowing the couple and their guests to fully enjoy the celebration without worrying about the logistics. With Assertive Brand Communication's expert guidance and meticulous attention to detail, we turn a once-in-a-lifetime event into a flawless and joyous occasion.",
  },
];

/*
 * TEMPORARY - REMOVE BEFORE LAUNCH. Same shape as work.ts's own
 * DEMO_FILL, and for the same reason: no `image` above is set, because no
 * per-service photography exists at all yet (see the field comment). With
 * this on, a service without its own photo borrows one from WORK - same
 * pillar where a real one exists (Corporate & MICE, Live & Entertainment
 * and Weddings & Social each have at least one WORK entry), and ANY real
 * WORK photograph, picked deterministically by this service's position in
 * SERVICES, where it does not (Brand Activation and Content & Digital
 * have zero WORK entries between them today).
 *
 * Every borrowed photo is real Assertive event photography, and its `alt`
 * is left exactly as work.ts wrote it - describing what the photo actually
 * shows, not this service - rather than inventing alt text that pretends
 * otherwise. For the two pillars with no same-pillar match this can put an
 * unrelated discipline's photo on a service page (a conclave set on the
 * Digital Marketing page, say), which is the same caption-accuracy
 * compromise work.ts already logs for its own DEMO_FILL. Must not ship.
 * Once real per-service photography exists, set `image` on the services
 * that have it and flip this to false - the rest just stop showing a
 * photo next to their description, same as the copy-only state this
 * whole file started from.
 */
export const DEMO_SERVICE_IMAGE = true;

export function imageFor(service: Service): Photo | undefined {
  if (service.image) return service.image;
  if (!DEMO_SERVICE_IMAGE) return undefined;

  const samePillar = WORK.find((w) => w.pillar === service.pillar);
  if (samePillar) return { src: samePillar.image, alt: samePillar.alt };

  // No WORK entry in this pillar at all - borrow deterministically by
  // SLUG POSITION, not object identity. See the "matched on slug, not
  // identity" note on work.ts's own galleryFor: an RSC-boundary re-fetch
  // of `service` would break an indexOf(service) lookup here the same way.
  const i = Math.max(0, SERVICES.findIndex((s) => s.slug === service.slug));
  const borrowed = WORK[i % WORK.length];
  return { src: borrowed.image, alt: borrowed.alt };
}
