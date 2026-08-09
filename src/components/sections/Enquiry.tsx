"use client";

import { useId, useState } from "react";
import { Mail, Phone, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PILLARS } from "@/lib/data/pillars";
import { PHONE, PHONE_HREF, EMAIL } from "@/lib/data/contact";

/*
 * PLAN.md Phase 9. Replaces the legacy form section (which had a large
 * dead whitespace block below the venue image, measured on the live
 * site). Heading/body copy below is the legacy site's own real text
 * (extracted/copy/index.md, "Let us curate the event for you") - reused
 * rather than invented, consistent with how the rest of the site draws
 * from extracted copy. The FIELD LIST is a deliberate departure from
 * legacy's (Name/Email/Venue/Number/Message): PLAN.md's own Phase 9 spec
 * drops the free-text Venue field and adds a proper Event Type select
 * sourced from PILLARS, so an enquiry arrives already routed to a
 * discipline.
 *
 * Submits to /api/leads with source: "enquiry" - the same endpoint the
 * WhatsApp widget's contact step posts to, so both land in one place for
 * the /admin/leads page. Event Type is sent as the pillar's display name,
 * not its id ("Corporate & MICE", not "corporate") - the id is only a
 * stable <select> value, the admin page should not have to know pillar
 * ids to read a submission.
 */
export function Enquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const eventTypeId = useId();
  const messageId = useId();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const eventType = PILLARS.find((p) => p.id === data.eventType)?.name ?? data.eventType;

    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "enquiry",
          name: data.name,
          email: data.email,
          phone: data.phone,
          eventType,
          message: data.message,
        }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Something went wrong sending your enquiry. Please try again, or call/email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    // id is the target for the FAQ's "ask us directly", for the Enquiry
    // item on the nav bar and for the discipline pages' closing CTA - it
    // is the site's ONLY way of getting in touch besides the WhatsApp
    // widget, so treat the id as public API. scroll-mt keeps the jump from
    // landing under Header, which is sticky - --header-h is the same
    // live-measured value the pinned stages reserve against (tokens.css).
    //
    // Safe to sit on the Section itself, unlike the Trusted by anchor: the
    // Reveals are INSIDE this element, so nothing transforms the box the
    // browser scrolls to. See the long note in TrustBar.tsx for what
    // happens when the target is inside a Reveal instead.
    <Section
      as="section"
      id="enquiry"
      className="scroll-mt-[var(--header-h)] bg-surface"
    >
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Eyebrow className="text-corporate-ink">Get in touch</Eyebrow>
          <h2 className="text-h2 mt-4 text-ink">Let Us Curate The Event For You</h2>
          <p className="text-body-lg mt-4 max-w-[46ch] text-ink-body">
            As the premier event planning company in the area. Each event and
            client is unique and we believe our services should be as well.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 font-medium text-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
            >
              <Phone size={18} aria-hidden="true" className="text-corporate-ink" />
              {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-3 font-medium text-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
            >
              <Mail size={18} aria-hidden="true" className="text-corporate-ink" />
              {EMAIL}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-lg bg-surface-raised p-6 shadow-card sm:p-8">
            {submitted ? (
              <div role="status" className="flex flex-col items-center py-10 text-center">
                <CheckCircle2 size={40} aria-hidden="true" className="text-live-ink" />
                <p className="text-h3 mt-4 text-ink">Thank you</p>
                <p className="text-body mt-2 text-ink-body">
                  Your enquiry has been received. Our team will get back to you
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <Field label="Your Name" id={nameId} name="name" required autoComplete="name" />
                <Field
                  label="Email"
                  id={emailId}
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
                <Field
                  label="Phone"
                  id={phoneId}
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                />

                <div className="flex flex-col gap-1.5">
                  <label htmlFor={eventTypeId} className="text-small font-medium text-ink">
                    Event Type <span aria-hidden="true">*</span>
                    <span className="sr-only"> (required)</span>
                  </label>
                  <select
                    id={eventTypeId}
                    name="eventType"
                    required
                    defaultValue=""
                    className="text-body rounded-md border border-hairline bg-surface px-3.5 py-2.5 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
                  >
                    <option value="" disabled>
                      Select an event type
                    </option>
                    {PILLARS.map((pillar) => (
                      <option key={pillar.id} value={pillar.id}>
                        {pillar.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor={messageId} className="text-small font-medium text-ink">
                    Your Message <span aria-hidden="true">*</span>
                    <span className="sr-only"> (required)</span>
                  </label>
                  <textarea
                    id={messageId}
                    name="message"
                    required
                    rows={4}
                    className="text-body resize-none rounded-md border border-hairline bg-surface px-3.5 py-2.5 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
                  />
                </div>

                {error && (
                  // #dc2626 is a literal, not a token - this codebase's
                  // colours are all solved per-theme (tokens.css), and no
                  // error/danger token exists yet. Same call WhatsAppWidget
                  // already made for its own inline validation message
                  // (#f15c6d there): a plain hex via style, not an untested
                  // dark: variant this project's theming does not use.
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
                  {submitting ? "Sending..." : "Send Enquiry"}
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

function Field({
  label,
  id,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  id: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-small font-medium text-ink">
        {label}
        {required && (
          <>
            {" "}
            <span aria-hidden="true">*</span>
            <span className="sr-only"> (required)</span>
          </>
        )}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="text-body rounded-md border border-hairline bg-surface px-3.5 py-2.5 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
      />
    </div>
  );
}
