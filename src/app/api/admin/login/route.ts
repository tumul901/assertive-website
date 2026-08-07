import { NextResponse } from "next/server";
import { createSessionCookie, verifyPassword } from "@/lib/admin-auth";

/*
 * The only thing this route does is turn a correct password into a
 * signed cookie - see lib/admin-auth.ts for the format both this route
 * and proxy.ts agree on. Rate limiting a login endpoint would normally
 * matter more than a lead form, but there is exactly one password and
 * timingSafeEqual already removes the cheap timing-based shortcut;
 * bringing in Redis here would make the login page's availability
 * depend on the same store the leads feature does, for a small site
 * this is not worth that coupling.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const password = typeof body === "object" && body !== null ? (body as Record<string, unknown>).password : undefined;
  if (typeof password !== "string" || !verifyPassword(password)) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const session = createSessionCookie();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(session.name, session.value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: session.maxAge,
  });
  return res;
}
