import { NextResponse } from "next/server";
import { isValidEmail } from "@/lib/utils";
import { saveLead, leadsRateLimit, type LeadSource } from "@/lib/leads";

/*
 * The one place a submission from either form actually lands. Both the
 * Enquiry section and the WhatsApp widget's contact step POST here with a
 * different `source` and a different subset of the optional fields - see
 * Lead in lib/leads.ts for the full shape. Never cached (route handlers
 * default to uncached for everything but GET, per Next's own docs), and
 * there is no GET here at all: the admin page imports getLeads() directly
 * from lib/leads.ts instead of round-tripping through this route, so
 * there is nothing else to expose publicly.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { source, name, email, phone, company, eventType, timing, message } =
    body as Record<string, unknown>;

  if (source !== "enquiry" && source !== "whatsapp") {
    return NextResponse.json({ error: "Invalid source." }, { status: 400 });
  }
  if (source === "enquiry") {
    if (typeof name !== "string" || name.trim().length === 0 || name.length > 100) {
      return NextResponse.json({ error: "A name is required." }, { status: 400 });
    }
    if (typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }
  }

  // Rate limiting is a secondary control and fails OPEN: a Redis hiccup
  // (or, in local dev, storage that has not been provisioned yet) should
  // degrade to "temporarily unlimited", never take the entire endpoint
  // down for every visitor. The primary save below has its own try/catch
  // and is what actually needs Redis to be reachable.
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const { success } = await leadsRateLimit.limit(ip);
    if (!success) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 },
      );
    }
  } catch (err) {
    console.error("[api/leads] rate limit check failed, proceeding without it:", err);
  }

  const asOptionalString = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : undefined);

  try {
    await saveLead({
      source: source as LeadSource,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: asOptionalString(phone),
      company: asOptionalString(company),
      eventType: asOptionalString(eventType),
      timing: asOptionalString(timing),
      message: asOptionalString(message),
    });
  } catch (err) {
    console.error("[api/leads] failed to save lead:", err);
    return NextResponse.json({ error: "Could not save your details right now." }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
