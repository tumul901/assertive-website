import type { PillarId } from "./pillars";

/*
 * THIS FILE CHANGED AXIS. It used to list sixteen EVENT TYPES - Corporate
 * Events, Live Concerts, Wedding Management, Award Functions - lifted from
 * the legacy nav. Those restated the five pillars almost one for one, so
 * the nav answered a question the pillar cards on the homepage had already
 * answered ("do you do my kind of event?") and never answered the one a
 * prospect actually asks second: "do I have to hire anyone else?"
 *
 * The client's own list, which replaced them, is CAPABILITIES - Creative,
 * Fabrication, AV, LED, Registration, RSVP, Travel, Hotels - and it was
 * handed over with the reason attached: "because clients love one vendor."
 * That is the one-stop pitch, and it only works if the list is legible as
 * one. So: pillars stay exactly as they were (they are the five figures of
 * the actual logo mark - see petals.ts, geometry taken from the supplied
 * vector - and a sixth category is not available without redrawing it),
 * and the services underneath them are now the things we actually deliver.
 *
 * WHICH IS WHY `pillars` IS A LIST. A capability is not owned by one
 * vertical. Photography is a wedding service and a conference service;
 * fabrication builds a mandap and a trade-show stand. Categorising these
 * the old way - one pillar each - forces a lie in four cases out of five.
 *
 * But the honest version of that ("every capability serves every pillar")
 * would render five identical lists, which tells a reader nothing at all.
 * So the rule here is EDITORIAL, not exhaustive:
 *
 *   list a capability under a pillar when a client of that pillar would
 *   expect to see it as a named line on their own quote - not merely
 *   whenever we would end up doing it.
 *
 * A pillar's list is therefore what that pillar leans on hardest, not its
 * full catalogue. Corporate & MICE genuinely uses all twenty-one; it is
 * listed against eight, because a list containing everything is a list
 * that distinguishes nothing. Do not "fix" this by adding every pillar to
 * every service - that is the failure mode this comment exists to prevent,
 * and it looks like an improvement right up until it is rendered.
 *
 * WHERE THAT DISTINCTION IS NOW VISIBLE has changed, and this is worth
 * knowing before assuming `pillars` is decorative. It used to drive the
 * mega menu's five columns. The menu now lists the five DISCIPLINES only -
 * there are five service pages, one per pillar, and no per-capability page
 * at all - and each of those pages shows the WHOLE catalogue as a cloud of
 * floating pills. `servicesIn()` decides which pills lead that cloud and
 * carry the discipline's colour, and which follow in neutral; it is also
 * still what fills the pill row on each beat of the homepage hero. So the
 * editorial call above is now a question of EMPHASIS rather than
 * inclusion, and getting it wrong no longer hides a capability - it just
 * puts it in the wrong half of the cloud.
 */

export interface Service {
  slug: string;
  name: string;
  /**
   * Every pillar this capability is sold under, MOST REPRESENTATIVE FIRST.
   * `pillars[0]` is load-bearing beyond ordering, and still is now that
   * the per-service page is gone: it is the discipline named on the pill's
   * "Led by" cross-link, so opening Merchandise on the Corporate page
   * points a reader at Brand Activation rather than leaving them to guess
   * whose capability it mainly is. The rest of the list decides which
   * pages lead their pill cloud with this service in colour, and which
   * beat of the homepage hero it appears on.
   *
   * Typed as a NON-EMPTY tuple, not PillarId[], and that is doing real
   * work: a service with no pillar has no primary to cross-link to and
   * leads no page's cloud, so it sits at the tail of all five in neutral
   * with nothing pointing at it. This makes that a compile error rather
   * than a capability nobody is steered to.
   */
  pillars: [PillarId, ...PillarId[]];
  /**
   * Only set where this service inherited a legacy page's copy (below).
   * Provenance, not a link: nothing reads this field. Absent means the
   * copy on this entry was written in-house, with no legacy source.
   */
  legacyUrl?: string;
  /**
   * `blurb` is the pill's own line once it is opened; `description` is the
   * paragraph under it. Both are IN-HOUSE COPY on seventeen of the
   * twenty-one - written here the way work.ts's case-study copy was, to be
   * swapped for the client's own words later.
   *
   * The other four inherited a legacy page's copy verbatim, because the
   * new capability is the same offering under a shorter name and that text
   * is already client-approved ("do not rewrite without approval", PLAN.md
   * section 3.7b). Flagged inline at each: Merchandise, Artist Management,
   * Exhibition Stall, Videography.
   *
   * ONE RULE SURVIVES THE HANDOVER, the same one work.ts sets out at
   * length: no numbers. No footfall, no reach, no budgets, no percentage
   * uplift. A number invented as placeholder prose reads as a fact and
   * survives a copy handover unnoticed.
   */
  blurb: string;
  description: string;
}

/*
 * THERE WAS AN `image?: Photo` FIELD HERE, with a DEMO_SERVICE_IMAGE flag
 * and an imageFor() resolver that borrowed a real photograph out of WORK
 * whenever a service had none of its own - which was all twenty-one of
 * them, since no per-capability photography exists (PLAN.md Appendix A
 * item 2). Its own comment said "Must not ship", and it only existed to
 * put something beside the description on a per-service page.
 *
 * There is no per-service page any more, so all three went rather than
 * being carried forward unread. If real per-capability photography ever
 * arrives, add the field back against whatever renders it then - do not
 * resurrect the borrow, which put an unrelated discipline's photo on the
 * page under work.ts's alt text describing the wrong event.
 */

export const SERVICES: Service[] = [
  // ---- Idea and build -------------------------------------------------
  {
    slug: "creative",
    name: "Creative",
    pillars: ["activation", "content", "weddings"],
    blurb: "The idea an event is built on - the theme, the look, and the reason a room remembers it.",
    description:
      "Creative is where an event stops being a date in a calendar and becomes something with a point of view. At Assertive Brand Communication, this covers the concept, the theme and the visual language that then runs through every surface a guest actually sees - the set, the invitation, the screens, the signage, the merchandise. We work backwards from what the room is meant to feel like and what the brand needs it to say, then hold that line across every other discipline on this list. Without it, an event ends up as a set of well-executed parts that do not add up to one thing.",
  },
  {
    slug: "branding",
    name: "Branding",
    pillars: ["activation", "corporate"],
    blurb: "Your brand applied to every surface of the event, consistently, from the door onwards.",
    description:
      "Event branding is the difference between a venue with a logo on it and a space that reads as yours the moment someone walks in. At Assertive Brand Communication, we take an existing brand identity and work out how it lives at event scale - entrance arches, stage backdrops, wayfinding, delegate collateral, screen graphics, photo walls, staff and vehicle branding. Most of the work is in the consistency: one set of artwork, one colour reference and one team applying it, so the space looks designed rather than assembled from whatever each supplier had on file.",
  },
  {
    slug: "fabrication",
    name: "Fabrication",
    pillars: ["activation", "weddings"],
    blurb: "Sets, structures and stages, built to drawing and installed inside the venue's window.",
    description:
      "Fabrication is where a rendering becomes something people stand in front of. At Assertive Brand Communication, we build the physical parts of an event - stage sets, entrance structures, backdrops, props, custom installations and exhibition builds - and handle transport, installation and teardown around whatever access the venue gives us. Load-in doors, rigging limits, floor loading and the hours you are allowed on site decide as much about a build as the design does, which is why we plan for them at drawing stage rather than discovering them on the night.",
  },
  {
    slug: "exhibition-stall",
    name: "Exhibition Stall",
    pillars: ["corporate", "activation"],
    // Copy inherited verbatim from the legacy Exhibition page - the same
    // offering, named for the deliverable. See the blurb comment above.
    legacyUrl: "exhibition.php",
    blurb: "Do you know what it takes to make your exhibitions impactful?",
    description:
      "At Assertive Brand Communication, we specialize in designing and managing impactful exhibitions that showcase your brand and engage your audience. Our team brings creativity and strategic planning to every project, ensuring your exhibition stands out and delivers a memorable experience. From booth design and setup to audience interaction and post-event analysis, we handle every detail to maximize your brand's visibility and impact. Partner with us to create an exhibition that effectively communicates your brand's message and drives meaningful connections.",
  },
  {
    slug: "printing",
    name: "Printing",
    pillars: ["activation", "weddings"],
    blurb: "Invitations, collateral and large-format, printed right and delivered on schedule.",
    description:
      "Printing is the discipline where the deadline is genuinely immovable. At Assertive Brand Communication, we manage print end to end - invitations and stationery, delegate kits and collateral, badges, signage, standees, banners and large-format for stage and venue. Artwork is proofed and colour-checked against the substrate it will actually be printed on, and the schedule is built backwards from install, because a banner that is right but late is a banner that did not exist.",
  },
  {
    slug: "merchandise",
    name: "Merchandise",
    pillars: ["activation"],
    // Copy inherited verbatim from the legacy Merchandising page - same
    // offering, shorter name. See the blurb comment above.
    legacyUrl: "merchandising.php",
    blurb: "Create impactful brand merchandises to increase visibility and engagement.",
    description:
      "At Assertive Brand Communication, we specialize in merchandising for events, providing tailored solutions that enhance brand visibility and maximize engagement. Our team manages all aspects, from product selection and design to on-site sales and inventory management. We ensure a seamless integration of merchandising into your event, creating a memorable experience that drives both audience interaction and brand impact.",
  },

  // ---- The show -------------------------------------------------------
  {
    slug: "production",
    name: "Production",
    pillars: ["live", "weddings"],
    blurb: "Technical direction and show-calling, so the running order survives contact with the day.",
    description:
      "Production is the discipline that turns a running order into a show. At Assertive Brand Communication, that means technical direction, stage management and show-calling - the cue sheets, the rehearsals, the crew briefings, and the person on comms deciding what happens when a speaker overruns or a video does not roll. Every event has the schedule on paper and the schedule that actually happens; production is the job of keeping the gap between them invisible to the room.",
  },
  {
    slug: "av",
    name: "AV",
    pillars: ["live"],
    blurb: "Sound, lighting and vision, specified for the room rather than for the invoice.",
    description:
      "Audio-visual is the part of an event people only notice when it is wrong. At Assertive Brand Communication, we specify, supply and operate sound, lighting and vision - arrays and delays sized to the room, lighting a camera can shoot by as well as an audience can see by, and a vision mix that keeps every screen on the same source. We survey the venue first, because a spec written from a floor plan and a spec written from standing in the room are rarely the same spec.",
  },
  {
    slug: "led",
    name: "LED",
    pillars: ["live"],
    blurb: "LED walls and screens, sized, supplied and driven for the space they have to fill.",
    description:
      "An LED wall is the largest thing in most rooms and the easiest to get wrong. At Assertive Brand Communication, we supply and operate LED across stages, backdrops, entrances and delegate-facing screens - choosing pixel pitch for the viewing distance, sizing the wall to the sightlines rather than to the widest part of the stage, and building the structure that safely carries it. Content is prepared against the actual pixel map, so artwork arrives fitting the screen instead of being stretched into it on site.",
  },
  {
    slug: "artist-management",
    name: "Artist Management",
    pillars: ["live", "weddings"],
    // Copy inherited verbatim from the legacy Artist Management page -
    // the one item on the client's list that already had its own page
    // under the same name. See the blurb comment above.
    legacyUrl: "artist-management.php",
    blurb: "From booking to promotions, our artist management service handles it all.",
    description:
      "At Assertive Brand Communication, we provide expert artists management services that ensure smooth and successful engagements. Our team handles all aspects, from bookings and negotiations to logistics and event coordination, allowing artists to focus on their craft. We are dedicated to delivering seamless experiences and maximizing opportunities, enhancing both the artist's and the client's objectives.",
  },

  // ---- Digital --------------------------------------------------------
  {
    slug: "website",
    name: "Website",
    pillars: ["content"],
    blurb: "An event site that carries the announcement, the agenda and the sign-ups.",
    description:
      "Most events need a page of their own before they need anything else. At Assertive Brand Communication, we design and build event websites and microsites - the announcement, the agenda, speaker and sponsor pages, registration or RSVP forms, and the gallery once it is over. They are built so the people running the event can update them without coming back to whoever built the site, because the agenda always changes and it always changes late.",
  },
  {
    slug: "event-app",
    name: "Event App",
    pillars: ["content"],
    blurb: "The agenda, the speakers and the day's changes, in every delegate's pocket.",
    description:
      "An event app is the fastest way to tell a room something after the printed agenda has already been handed out. At Assertive Brand Communication, we build and run apps carrying the schedule, speaker profiles, floor plans, session-level notifications, live polling and Q and A, and feedback capture. The point is not the feature list - it is that when a session moves, everyone knows within the minute, and nobody is working from a programme that stopped being true at breakfast.",
  },
  {
    slug: "registration",
    name: "Registration",
    pillars: ["corporate"],
    blurb: "Delegate check-in that clears the queue before the first session is due to start.",
    description:
      "Registration is the first thing a delegate experiences and the thing most likely to make them late. At Assertive Brand Communication, we run it end to end - pre-event data capture, badge and lanyard production, on-site desks, spot registration for walk-ins, and accreditation where an event needs it. Desks are staffed and laid out for the arrival curve rather than for the headcount, because everyone turning up inside the same quarter hour is the normal case, not the exception.",
  },
  {
    slug: "rsvp",
    name: "RSVP",
    pillars: ["corporate", "weddings"],
    blurb: "Invitations out, replies chased, and a guest list you can actually trust on the day.",
    description:
      "An RSVP process is guest-list management with a deadline attached. At Assertive Brand Communication, we handle invitations and their tracking end to end - digital and printed invites, personalised links, reminders to the people who have not replied, dietary and access requirements, plus-ones, seating inputs, and a final list that matches who is genuinely coming. The value is entirely in that last part: catering, seating and security all price off that list, and every one of them is wrong if it is.",
  },

  // ---- Guests and movement --------------------------------------------
  {
    slug: "venue-booking",
    name: "Venue Booking",
    pillars: ["corporate"],
    blurb: "The right room found, walked, and negotiated before anything else gets planned.",
    description:
      "Every other decision on an event is downstream of the venue, which is why it is the one worth slowing down for. At Assertive Brand Communication, we source and book venues against the brief - capacity and layout, ceiling height and rigging, power, load-in access, breakout and catering space, accommodation nearby - and we negotiate the contract rather than only the room rate. We walk the shortlist instead of working off a sales deck, because a floor plan does not show you the pillar in the middle of the ballroom.",
  },
  {
    slug: "hotels",
    name: "Hotels",
    pillars: ["corporate"],
    blurb: "Room blocks negotiated, allocated and managed through to checkout.",
    description:
      "Accommodation is one of the largest lines on an event budget and one of the easiest to lose control of. At Assertive Brand Communication, we source and negotiate room blocks, manage allocation and rooming lists, handle upgrades and VIP arrangements, and run check-in and checkout so delegates are not queuing at a front desk with their luggage while a session runs without them. Release dates and attrition clauses get read before they are signed, because that is where a block quietly turns into a bill.",
  },
  {
    slug: "travel",
    name: "Travel",
    pillars: ["corporate"],
    blurb: "Flights, transfers and ground movement for everyone who has to be in the room.",
    description:
      "Travel is where a delegate's experience of an event begins, usually days before the event does. At Assertive Brand Communication, we manage flights and rail, visas and documentation, airport transfers, coaches and ground movement for delegates, speakers, artists and crew - including the changes, which arrive constantly and always late. Someone is always rebooked; the job is making sure they still make the session they were flown in for.",
  },
  {
    slug: "logistics",
    name: "Logistics",
    pillars: ["corporate"],
    blurb: "Freight, crew and kit, in the right place at the right hour, in the right order.",
    description:
      "Logistics is the quiet half of an event and the half that decides whether the rest of it is possible. At Assertive Brand Communication, we plan and run the movement of everything an event needs - freight and material, crew, equipment, inventory and on-ground coordination across multiple venues and cities where a programme calls for it. The plan is written around the venue's access windows and the build sequence, so kit arrives in the order it is needed rather than all at once into a bay that cannot take it.",
  },

  // ---- Capture --------------------------------------------------------
  {
    slug: "photography",
    name: "Photography",
    pillars: ["content", "weddings"],
    blurb: "Coverage that leaves you with pictures worth using long after the event.",
    description:
      "Event photography is worth exactly as much as the pictures you can still use once the event is over. At Assertive Brand Communication, we cover events end to end - the stage and the speakers, candid and delegate coverage, group and leadership portraits, branding and set detail, and the sponsor and signage frames somebody always asks for afterwards. We shoot against a brief agreed beforehand and hand over an edited, captioned set, because an unsorted card is not coverage.",
  },
  {
    slug: "videography",
    name: "Videography",
    pillars: ["content", "live"],
    // Copy inherited verbatim from the legacy Video Production & Content
    // Creation page - same offering, named for the deliverable. See the
    // blurb comment above.
    legacyUrl: "video-production.php",
    blurb: "Professional video production for capturing your brand's most memorable moments.",
    description:
      "At Assertive Brand Communication, we offer expert video production and content creation services that bring your brand's story to life. Our team handles every aspect, from concept development and scripting to filming and editing, ensuring high-quality, engaging content. We focus on creating impactful videos that resonate with your audience and enhance your brand's presence.",
  },
  {
    slug: "live-streaming",
    name: "Live Streaming",
    pillars: ["content", "live"],
    blurb: "The room, broadcast to everyone who could not be in it.",
    description:
      "A live stream is a second audience with none of the second chances. At Assertive Brand Communication, we produce and deliver streams to public platforms and private portals - multi-camera capture, a live vision and audio mix, graphics and lower thirds, and redundant encoding and connectivity so one dropped link does not end the broadcast. The stream is run as its own show with its own director, not as a camera left pointing at one that was staged for the room.",
  },
];

/** `pillars[0]`, the one whose colour and petal the service page wears. */
export function primaryPillar(service: Service): PillarId {
  return service.pillars[0];
}

/**
 * The services a pillar LEANS ON HARDEST, in SERVICES order - not the
 * services it is capable of, which is all of them. A service appears in
 * more than one of these lists on purpose; see the note at the top of this
 * file, and read the "where that distinction is now visible" paragraph
 * before treating a short list as an omission to fix.
 *
 * Two callers: the discipline page orders its pill cloud core-first off
 * this, and the homepage hero fills each beat's pill row from it.
 */
export function servicesIn(pillar: PillarId): Service[] {
  return SERVICES.filter((s) => s.pillars.includes(pillar));
}

/** Fast membership test for the pill cloud, which asks once per pill. */
export function isCoreTo(service: Service, pillar: PillarId): boolean {
  return service.pillars.includes(pillar);
}
