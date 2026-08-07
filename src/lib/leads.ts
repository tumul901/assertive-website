import "server-only";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

/*
 * The one place every captured lead - Enquiry form or WhatsApp widget -
 * actually lands. Storage is a single Redis list, not a relational table:
 * there is no schema to migrate and no query more complex than "give me
 * everything", which is all the admin page needs. Redis.fromEnv() reads
 * UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN, the exact two env
 * vars a Vercel Marketplace "Upstash" storage integration injects into
 * the project automatically - see the setup note in the PR/chat, there is
 * no separate account beyond Vercel itself.
 */
const redis = Redis.fromEnv();

const LEADS_KEY = "leads";
const MAX_LEADS = 1000;

export type LeadSource = "enquiry" | "whatsapp";

export interface Lead {
  id: string;
  source: LeadSource;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  eventType?: string;
  timing?: string;
  message?: string;
  createdAt: string;
}

export type NewLead = Omit<Lead, "id" | "createdAt">;

export async function saveLead(input: NewLead): Promise<Lead> {
  const lead: Lead = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  // Newest first (LPUSH), then trimmed so a scripted flood can not grow
  // this list without bound - 1000 entries is years of headroom for a
  // site this size, not a real limit anyone will hit organically.
  await redis.lpush(LEADS_KEY, JSON.stringify(lead));
  await redis.ltrim(LEADS_KEY, 0, MAX_LEADS - 1);
  return lead;
}

export async function getLeads(): Promise<Lead[]> {
  const raw = await redis.lrange<string | Lead>(LEADS_KEY, 0, -1);
  // Defensive: @upstash/redis has changed its auto-serialization behaviour
  // across versions, so entries may already be parsed objects rather than
  // the JSON strings this module writes. Handling both is cheaper than
  // being wrong about which one the installed version does.
  return raw.map((entry) => (typeof entry === "string" ? (JSON.parse(entry) as Lead) : entry));
}

/*
 * Shared with the /api/leads route so both the Enquiry form and the
 * WhatsApp widget's contact step are covered by one limit, keyed by IP -
 * five submissions per ten minutes is far above any real visitor's rate
 * and low enough to blunt a scripted flood.
 */
export const leadsRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "10 m"),
  prefix: "ratelimit:leads",
});
