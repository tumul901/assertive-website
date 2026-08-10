export interface Client {
  name: string;
  logo: string;
  /*
   * The file's real pixel size. These used to be hardcoded as 140x90 at
   * the <Image> in TrustBar, which was true of the original five and is
   * not true of anything added since.
   *
   * next/image uses width/height only for the intrinsic ASPECT RATIO it
   * reserves before the file loads - the rendered size comes from the
   * Tailwind classes. So a wrong pair here does not resize anything, it
   * reserves a box of the wrong shape and then reflows when the real
   * image arrives. With logos ranging from 1.45:1 to 6.72:1 that is a
   * visible jump in a row of eight, which is why this is per-client now
   * rather than one number for all of them.
   */
  width: number;
  height: number;
}

/*
 * Supersedes the earlier version of this file, which reconstructed six
 * names from testimonial mentions and the homepage's "recent events"
 * carousel captions (Royal Enfield, News18, IVM Podcast, Cleartrip,
 * Nasdiya, E-Formula). Three of those six had no logo asset at all and
 * would have rendered as text wordmarks; the carousel captions for the
 * other three later proved unreliable - extract-legacy-site.cjs's own
 * photo content contradicts at least two of them (see the comment atop
 * work.ts: "Nasdiya" was captioned on what the photo shows is an Amazon
 * Music / IVM Podcasts stage; "News18" was captioned on the Agenda
 * Paschim set, itself News18-branded but a different image).
 *
 * These five are stronger evidence: real logo files, extracted with
 * alt="Client 1" through alt="Client 5" directly from the homepage's
 * actual client-logo section (extracted/copy/index.md, the "## Our
 * Clients" heading) - the real asset the legacy site served as a client
 * logo, not a caption on an unrelated carousel.
 *
 * PLAN.md section 0.1 / 3.3 still applies: THE RULE IS THAT A NAME NEEDS
 * A REAL LOGO FILE BEHIND IT. Do not add Google / Microsoft / Amazon or
 * anything else on the strength of a mention.
 *
 * Three more were added later from artwork the client supplied directly -
 * a Cloudflare cue card, a MongoDB tent card and a Montra Electric
 * lockup, i.e. collateral produced for those events. That is stronger
 * evidence than the legacy homepage's own logo strip, not weaker, so the
 * rule above is satisfied rather than bent. tools/build-client-logos.mjs
 * documents how each was isolated from its print piece.
 *
 * DELIBERATELY NOT ADDED: Lenskart. It appears on the MongoDB tent card,
 * but as the employer printed under a delegate's name on a place card -
 * plain text on a name badge, not a logo, and evidence of who attended
 * rather than of whose event we ran. It is exactly the kind of inference
 * from a caption this file's history warns about.
 *
 * ORDER IS VISUAL, not a ranking. The row is four across on a wide
 * screen, and the eight fall into two groups: compact marks around
 * 1.5-2.8:1 and wide wordmarks at 3.7-6.7:1. Alternating them keeps
 * either row from being all one shape, which is what stops the wide
 * lockups reading as a mistake beside the square ones.
 */
export const CLIENTS: Client[] = [
  { name: "IVM Podcasts", logo: "/media/clients/ivm-podcasts.png", width: 140, height: 90 },
  { name: "Cloudflare", logo: "/media/clients/cloudflare.png", width: 618, height: 107 },
  { name: "News18 Network", logo: "/media/clients/news18.png", width: 140, height: 90 },
  { name: "MongoDB", logo: "/media/clients/mongodb.png", width: 632, height: 192 },
  { name: "Royal Enfield", logo: "/media/clients/royal-enfield.png", width: 140, height: 90 },
  { name: "Montra Electric", logo: "/media/clients/montra-electric.png", width: 626, height: 157 },
  { name: "Reliance Industries", logo: "/media/clients/reliance.png", width: 140, height: 90 },
  { name: "anko", logo: "/media/clients/anko.png", width: 140, height: 90 },
];
