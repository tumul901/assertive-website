"use client";

import { useId, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/*
 * Replaces the browser's native Basic Auth prompt - functional, but
 * unstyled chrome the site has no control over, and the first thing a
 * client sees when you hand them the leads URL. This is the same "prove
 * you know the one password" check, just as a page that looks like it
 * belongs here instead of a browser dialog. See lib/admin-auth.ts for
 * what actually issues the session, and proxy.ts for what checks it.
 *
 * `next` is read from window.location rather than useSearchParams() on
 * purpose - the hook forces a Suspense boundary around anything that
 * reads it in the App Router, which is a lot of ceremony for one
 * redirect target on a page this small.
 */
export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const passwordId = useId();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setError("Incorrect password.");
        setSubmitting(false);
        return;
      }
      const next = new URLSearchParams(window.location.search).get("next") || "/admin/leads";
      // Full navigation, not router.push - the freshly-set cookie needs
      // to be present for proxy.ts's very next check, and a hard
      // navigation is the simplest way to guarantee no stale RSC cache
      // renders the leads page as if it were still logged out.
      window.location.href = next;
    } catch {
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-surface py-12">
      <Container className="max-w-[400px]">
        <div className="rounded-lg bg-surface-raised p-6 shadow-card sm:p-8">
          <h1 className="text-h3 text-ink">Assertive Admin</h1>
          <p className="text-body mt-2 text-ink-body">Enter the admin password to view leads.</p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4" noValidate>
            <div className="flex flex-col gap-1.5">
              <label htmlFor={passwordId} className="text-small font-medium text-ink">
                Password
              </label>
              <input
                id={passwordId}
                name="password"
                type="password"
                required
                autoFocus
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-body rounded-md border border-hairline bg-surface px-3.5 py-2.5 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
              />
            </div>

            {error && (
              // See Enquiry.tsx's error message for why this is a
              // literal colour via style rather than a Tailwind class.
              <p role="alert" className="text-small" style={{ color: "#dc2626" }}>
                {error}
              </p>
            )}

            <Button
              type="submit"
              variant="primary"
              disabled={submitting}
              className="mt-2 justify-center disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </div>
      </Container>
    </main>
  );
}
