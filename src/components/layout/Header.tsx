"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { PILLARS } from "@/lib/data/pillars";
import { SERVICES } from "@/lib/data/services";
import { cn } from "@/lib/utils";
import { useDropdown } from "@/lib/use-dropdown";

const CLIENTS_LINKS = [
  { label: "Client Information", href: "/clients" },
  { label: "Vendor Registration", href: "/vendor-registration" },
];
const CONTACT_LINKS = [
  { label: "Contact Information", href: "/contact" },
  { label: "Client Query", href: "/client-query" },
];

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className="text-base relative inline-block py-2 font-medium text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
    >
      {children}
      {active && (
        <span
          className="absolute -bottom-2 left-0 h-0.5 w-full bg-corporate-mark"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}

function SimpleDropdown({ label, links }: { label: string; links: { label: string; href: string }[] }) {
  const { open, rootProps, triggerProps, closeNow } = useDropdown();
  return (
    <div className="relative" {...rootProps}>
      <button
        type="button"
        className="text-base inline-flex items-center gap-1 font-medium text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
        {...triggerProps}
      >
        {label}
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={cn("transition-transform duration-[var(--dur-fast)]", open && "rotate-180")}
        />
      </button>
      {open && (
        <div className="absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 rounded-lg border border-hairline bg-surface-raised p-3 shadow-bar">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={closeNow}
              className="text-body block rounded-sm px-3 py-2 text-ink hover:bg-surface"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keeps --header-h (tokens.css) equal to this header's TRUE rendered
  // height at all times, including mid-transition as it shrinks from
  // 110px to 84px on scroll. HeroSequence's pinned stage reads this
  // variable to reserve exactly this much space and never sit under it.
  // A ResizeObserver rather than recomputing on the scroll/resize events
  // this component already listens to, so the reservation tracks the
  // header's own 420ms height transition smoothly instead of jumping.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const sync = () => {
      document.documentElement.style.setProperty(
        "--header-h",
        `${el.getBoundingClientRect().height}px`,
      );
    };
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Lock background scroll while the mobile panel is open.
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  // Focus trap + Escape-to-close for the mobile panel (PLAN.md section 3A).
  useEffect(() => {
    if (!mobileOpen) return;
    const panel = panelRef.current;
    if (!panel) return;

    const focusables = () =>
      Array.from(panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));

    focusables()[0]?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        hamburgerRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 h-[72px] border-b border-hairline bg-surface transition-[height,box-shadow] duration-[var(--dur-base)] lg:h-[110px]",
        scrolled && "lg:h-[84px] lg:shadow-bar",
      )}
    >
      <Container className="flex h-full items-center justify-between">
        <Link href="/" className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-corporate-ink">
          <Image src="/logo-mark.png" alt="" width={45} height={44} className="h-9 w-auto lg:h-10" priority />
          <span className="flex flex-col leading-none">
            <span className="text-lg font-bold text-ink lg:text-xl">Assertive</span>
            <span className="text-small tracking-[0.04em] text-ink-muted">Brand Communications</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <MegaMenu />
          <SimpleDropdown label="Clients" links={CLIENTS_LINKS} />
          <SimpleDropdown label="Contact" links={CONTACT_LINKS} />
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle className="h-10 w-10" />

          <div className="hidden lg:block">
            <Button href="/client-query" variant="outline">
              Client Query &#8599;
            </Button>
          </div>
        </div>

        <button
          ref={hamburgerRef}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink lg:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto bg-surface lg:hidden"
            initial={{ opacity: 0, y: reduce ? 0 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -8 }}
            transition={{ duration: reduce ? 0.01 : 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            <Container className="flex flex-col gap-8 py-10">
              <div className="flex flex-col gap-4">
                <Link href="/" onClick={() => setMobileOpen(false)} className="text-h3 text-ink">
                  Home
                </Link>
                <Link href="/about" onClick={() => setMobileOpen(false)} className="text-h3 text-ink">
                  About Us
                </Link>
              </div>

              <div className="flex flex-col gap-6">
                <Eyebrow>Services</Eyebrow>
                {PILLARS.map((pillar) => (
                  <div key={pillar.id}>
                    <p className={cn("text-sm mb-2 font-semibold", pillar.ink)}>{pillar.name}</p>
                    <ul className="flex flex-col gap-2">
                      {SERVICES.filter((s) => s.pillar === pillar.id).map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/services/${service.slug}`}
                            onClick={() => setMobileOpen(false)}
                            className="text-body text-ink-body"
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <Eyebrow>Clients</Eyebrow>
                {CLIENTS_LINKS.map((l) => (
                  <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-body text-ink">
                    {l.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <Eyebrow>Contact</Eyebrow>
                {CONTACT_LINKS.map((l) => (
                  <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-body text-ink">
                    {l.label}
                  </Link>
                ))}
              </div>

              <Button href="/client-query" variant="primary" className="justify-center">
                Client Query &#8599;
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
