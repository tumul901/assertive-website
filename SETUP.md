# Pending setup — leads backend

The Enquiry form, WhatsApp widget contact step, and `/admin/leads` are all
built and working. Two things only a human can do are still pending —
until both are done, submissions fail to save and just log a clean error.

## 1. Provision Upstash Redis (storage for leads)

Vercel dashboard → your project → **Storage** tab → **Browse Marketplace**
→ **Upstash** → **Redis** → **Connect**.

This auto-injects `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`
into the project's environment variables. No code change needed once
it's connected — `src/lib/leads.ts` already reads those two vars.

## 2. Set a real `ADMIN_PASSWORD`

`.env.local` currently has a local-only test value
(`ADMIN_PASSWORD=localtest123`) used to verify the `/admin/login` flow.
Before this goes live:

- Pick a real password.
- Set it in Vercel → project → **Settings** → **Environment Variables**
  (`.env.local` is local-only and never ships).
- Update `.env.local` to match if you want local testing to use the same
  real value.

## Once both are set

Nothing else changes in code — reload and both forms will actually save,
and `/admin/leads` (login at `/admin/login`) will show them.

Delete this file once both steps are done.
