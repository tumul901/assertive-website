import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE, isValidSession } from "@/lib/admin-auth";

/*
 * The only gate in front of /admin. Redirects to a real login page
 * (admin/login/page.tsx) rather than the browser's native Basic Auth
 * prompt - see that page's header comment for why the swap happened.
 * The session itself is a signed, expiring cookie with no server-side
 * session store; lib/admin-auth.ts is the one place that format is
 * defined, shared with the login route that issues it.
 *
 * /admin/login IS UNDER THE /admin/:path* MATCHER BELOW and must be
 * explicitly exempted here, or a visitor with no cookie gets redirected
 * to a login page that immediately redirects back to itself.
 *
 * FAILS CLOSED. If ADMIN_PASSWORD was never set, isValidSession() always
 * returns false (see admin-auth.ts) - every request lands on the login
 * page rather than the gate silently opening.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const cookie = request.cookies.get(SESSION_COOKIE)?.value;
  if (!isValidSession(cookie)) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
