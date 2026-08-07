import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PILLARS } from "@/lib/data/pillars";
// Not local copies. These were literals here until a number change had to
// be made in three files at once and this one was nearly missed - which is
// the exact failure contact.ts's own header warns about.
import { PHONE, PHONE_HREF, EMAIL } from "@/lib/data/contact";

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Clients", href: "/clients" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

// alt-only aria-labels; do NOT invent URLs (PLAN.md Phase 9) - href="#"
// stands in until the client supplies real social profile links.
const SOCIALS = [
  { label: "Facebook", icon: "/media/social-facebook.png" },
  { label: "Instagram", icon: "/media/social-instagram.png" },
  { label: "LinkedIn", icon: "/media/social-linkedin.png" },
  { label: "YouTube", icon: "/media/social-youtube.png" },
];

/*
 * PLAN.md Phase 9. Deliberately NOT built from --color-ink / --color-
 * surface: those flip with the site theme (near-white ink in dark mode),
 * which would turn a bg-ink footer white. The --color-footer-* tokens
 * (tokens.css) stay dark in both themes on purpose - contrast verified
 * against the actual footer ground: ink 17.4:1, muted 6.3:1.
 */
export function Footer() {
  return (
    <footer style={{ background: "var(--color-footer-bg)" }}>
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <Image
            src="/logo-on-dark.svg"
            alt="Assertive Brand Communications"
            width={207}
            height={50}
            className="h-9 w-auto"
          />
          <p
            className="text-small mt-4 max-w-[32ch]"
            style={{ color: "var(--color-footer-muted)" }}
          >
            Event management and brand communications, based in Delhi.
          </p>
        </div>

        <FooterColumn heading="Company">
          {COMPANY_LINKS.map((l) => (
            <FooterLink key={l.href} href={l.href}>
              {l.label}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn heading="Services">
          {PILLARS.map((pillar) => (
            <FooterLink key={pillar.id} href={`/services#${pillar.id}`}>
              {pillar.name}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn heading="Contact">
          <a
            href={PHONE_HREF}
            className="text-small inline-flex items-center gap-2.5 transition-colors duration-[var(--dur-fast)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{ color: "var(--color-footer-muted)" }}
          >
            <Phone size={15} aria-hidden="true" />
            {PHONE}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="text-small inline-flex items-center gap-2.5 transition-colors duration-[var(--dur-fast)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{ color: "var(--color-footer-muted)" }}
          >
            <Mail size={15} aria-hidden="true" />
            {EMAIL}
          </a>

          <div className="mt-2 flex gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                title={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-[var(--dur-fast)] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Image src={s.icon} alt="" width={25} height={25} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </FooterColumn>
      </Container>

      <div style={{ borderTop: "1px solid var(--color-footer-hairline)" }}>
        <Container className="flex flex-col items-center gap-3 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-small" style={{ color: "var(--color-footer-muted)" }}>
            &#169; 2026 Assertive Brand Communications
          </p>
          <div className="flex gap-6">
            <FooterLink href="/privacy">Privacy</FooterLink>
            <FooterLink href="/terms">Terms</FooterLink>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-small font-semibold uppercase tracking-[0.06em] text-white">
        {heading}
      </h3>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-small w-fit transition-colors duration-[var(--dur-fast)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      style={{ color: "var(--color-footer-muted)" }}
    >
      {children}
    </Link>
  );
}
