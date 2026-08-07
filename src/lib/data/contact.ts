/*
 * The one place the real contact details live. Extracted from Enquiry.tsx
 * when the WhatsApp widget needed the same phone number: two literals of
 * the same number in two files is a number that eventually disagrees with
 * itself, and the failing version is the one nobody is looking at.
 *
 * The phone number is the one the client supplied for this site (it
 * replaced the legacy site's published number); the email is the legacy
 * site's own. Neither is invented.
 */
export const PHONE = "+91 95605 01246";
export const PHONE_HREF = "tel:+919560501246";
export const EMAIL = "info@assertivebrand.co.in";

/*
 * Same number again, in the only format wa.me accepts: country code first,
 * digits only, no +, no spaces. Kept beside PHONE rather than derived from
 * it with a .replace() so the shape it has to be is visible at a glance -
 * a stray space in the display string silently producing a dead chat link
 * is not a failure worth being clever for.
 */
export const WHATSAPP_NUMBER = "919560501246";
