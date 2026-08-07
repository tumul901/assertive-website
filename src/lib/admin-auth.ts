import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";

/*
 * The whole session mechanism for /admin, in one file so the login route
 * (which writes the cookie) and proxy.ts (which reads it) agree on
 * exactly one format. There is no session store - correct on purpose,
 * not a shortcut: with one shared password and no per-user accounts,
 * "logged in" only ever means "has proven they know ADMIN_PASSWORD", so
 * the cookie can just be a signed, expiring claim of that fact rather
 * than a lookup key into a table of sessions somewhere.
 *
 * Cookie value shape: "<expiryMs>.<hmacHex>", where hmacHex signs
 * expiryMs using ADMIN_PASSWORD as the key. Forging a valid cookie
 * requires knowing ADMIN_PASSWORD - the same thing logging in requires -
 * and the plaintext password itself is never in the cookie.
 */

export const SESSION_COOKIE = "admin_session";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days

function sign(expiryMs: number, password: string): string {
  return createHmac("sha256", password).update(String(expiryMs)).digest("hex");
}

export function verifyPassword(candidate: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false; // fail closed - see proxy.ts
  const a = Buffer.from(candidate);
  const b = Buffer.from(expected);
  // timingSafeEqual throws on length mismatch rather than returning
  // false, and the length itself is not secret here, so pad first.
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function createSessionCookie(): { name: string; value: string; maxAge: number } {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) throw new Error("ADMIN_PASSWORD is not set.");
  const expiryMs = Date.now() + SESSION_MAX_AGE_SECONDS * 1000;
  return {
    name: SESSION_COOKIE,
    value: `${expiryMs}.${sign(expiryMs, password)}`,
    maxAge: SESSION_MAX_AGE_SECONDS,
  };
}

export function isValidSession(cookieValue: string | undefined): boolean {
  const password = process.env.ADMIN_PASSWORD;
  if (!password || !cookieValue) return false;

  const [expiryPart, signaturePart] = cookieValue.split(".");
  if (!expiryPart || !signaturePart) return false;

  const expiryMs = Number(expiryPart);
  if (!Number.isFinite(expiryMs) || expiryMs < Date.now()) return false;

  const expectedSignature = sign(expiryMs, password);
  const a = Buffer.from(signaturePart);
  const b = Buffer.from(expectedSignature);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
