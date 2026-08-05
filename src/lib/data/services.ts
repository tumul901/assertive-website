import type { PillarId } from "./pillars";

export interface Service {
  slug: string;
  name: string;
  pillar: PillarId;
  legacyUrl: string;
}

// All 16 services from the legacy nav (PLAN.md section 3.2), grouped by
// pillar. This file exists so the landing page (header mega-menu) can
// count and link services; the individual service pages are a later plan.
export const SERVICES: Service[] = [
  // Brand Activation (5)
  {
    slug: "experiential-marketing",
    name: "Experiential Marketing",
    pillar: "activation",
    legacyUrl: "marketing.php",
  },
  {
    slug: "btl-promotions-activations",
    name: "BTL Promotions & Activations",
    pillar: "activation",
    legacyUrl: "promotions-activations.php",
  },
  {
    slug: "brand-launches",
    name: "Brand Launches",
    pillar: "activation",
    legacyUrl: "brand-launches.php",
  },
  {
    slug: "audience-acquisition",
    name: "Audience Acquisition",
    pillar: "activation",
    legacyUrl: "audience-acquisition.php",
  },
  {
    slug: "merchandising",
    name: "Merchandising",
    pillar: "activation",
    legacyUrl: "merchandising.php",
  },

  // Corporate & MICE (4)
  {
    slug: "corporate-events",
    name: "Corporate Events",
    pillar: "corporate",
    legacyUrl: "corporate-events.php",
  },
  {
    slug: "mice-and-logistics",
    name: "MICE and Logistics",
    pillar: "corporate",
    legacyUrl: "logistics.php",
  },
  {
    slug: "exhibition",
    name: "Exhibition",
    pillar: "corporate",
    legacyUrl: "exhibition.php",
  },
  {
    slug: "award-functions",
    name: "Award Functions",
    pillar: "corporate",
    legacyUrl: "award-fuctions.php", // legacy URL is misspelled on the live site
  },

  // Live & Entertainment (4)
  {
    slug: "live-concerts",
    name: "Live Concerts",
    pillar: "live",
    legacyUrl: "live-concerts.php",
  },
  {
    slug: "artist-management",
    name: "Artist Management",
    pillar: "live",
    legacyUrl: "artist-management.php",
  },
  {
    slug: "televised-shows",
    name: "Televised Shows",
    pillar: "live",
    legacyUrl: "televised.php",
  },
  {
    slug: "sports-events",
    name: "Sports Events",
    pillar: "live",
    legacyUrl: "sports-events.php",
  },

  // Content & Digital (2)
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    pillar: "content",
    legacyUrl: "digital-marketing.php",
  },
  {
    slug: "video-production",
    name: "Video Production & Content Creation",
    pillar: "content",
    legacyUrl: "video-production.php",
  },

  // Weddings & Social (1)
  {
    slug: "wedding-management",
    name: "Wedding Management",
    pillar: "weddings",
    legacyUrl: "wedding-management.php",
  },
];
