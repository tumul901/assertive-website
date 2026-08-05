export interface Client {
  name: string;
  logo: string;
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
 * PLAN.md section 0.1 / 3.3 still applies: these are the ONLY names
 * permitted in the trust bar. Do not add back Google / Microsoft /
 * Amazon / any name not backed by one of these five real logo files.
 */
export const CLIENTS: Client[] = [
  { name: "IVM Podcasts", logo: "/media/clients/ivm-podcasts.png" },
  { name: "News18 Network", logo: "/media/clients/news18.png" },
  { name: "Royal Enfield", logo: "/media/clients/royal-enfield.png" },
  { name: "Reliance Industries", logo: "/media/clients/reliance.png" },
  { name: "anko", logo: "/media/clients/anko.png" },
];
