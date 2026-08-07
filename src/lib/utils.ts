import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/*
 * The one email check, used client-side (Enquiry, WhatsAppWidget) and
 * server-side (/api/leads) alike - three copies of the same regex is a
 * regex that eventually disagrees with itself, same reasoning as PHONE
 * living in one place in contact.ts. Deliberately loose (shape, not
 * deliverability): rejecting a real address over a strict pattern costs a
 * lead, accepting a typo costs nothing except a bounced follow-up.
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
