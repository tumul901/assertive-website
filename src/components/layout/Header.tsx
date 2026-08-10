"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { HashLink } from "@/components/ui/HashLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { PILLARS } from "@/lib/data/pillars";
import { cn } from "@/lib/utils";

/*
 * CLIENTS IS AN ANCHOR, NOT A SECTION. It used to be a dropdown over
 * "Client Information" (/clients) and "Vendor Registration"
 * (/vendor-registration). Neither route was ever built, so both arms of
 * the only two-item menu on the bar led to a 404 - the menu existed to
 * offer a choice between two dead ends.
 *
 * The honest answer to "who are your clients" is already on the page: the
 * Trusted by bar, sitting on the homepage with the real logos in it. So
 * the nav item points straight at it.
 *
 * ABSOLUTE, not a bare "#trusted-by", because this header renders on the
 * discipline pages too - a bare fragment there would look for the bar in a
 * page that does not have one and do nothing at all. The id lives on the
 * card in TrustBar.tsx; renaming it there breaks this and the footer.
 */
const CLIENTS_HREF = "/#trusted-by";

/*
 * About Us is an anchor too, for the same reason Clients is: there was no
 * /about page behind it and never had been, so the item every visitor is
 * most likely to click first was a 404. The About section on the homepage
 * is the whole of what such a page would have said - the client's own copy,
 * verbatim, in three parallel statements - so the nav points at it.
 *
 * Absolute, not a bare "#about", so it also works from the discipline
 * pages. The id lives on the portal wrapper in AboutPortal.tsx.
 */
const ABOUT_HREF = "/#about";

/*
 * ONE DOOR FOR GETTING IN TOUCH, and it is this one.
 *
 * The bar used to offer three, all meaning the same thing: a "Contact"
 * dropdown over "Contact Information" (/contact) and "Client Query"
 * (/client-query), plus a standing "Client Query" button in the corner.
 * Three affordances, one intention - and all three routes were unbuilt, so
 * every one of them 404d.
 *
 * There is no separate contact page to write, either. The two ways to
 * reach this agency are the enquiry form at the foot of the homepage and
 * the WhatsApp widget, which is on every page already. So the nav points
 * at the form and the widget speaks for itself.
 *
 * Same absolute-path reasoning as CLIENTS_HREF above: a bare "#enquiry"
 * would find nothing on the discipline pages. The id and its scroll-mt
 * live on the section in Enquiry.tsx.
 */
const ENQUIRY_HREF = "/#enquiry";

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    /*
      HashLink, not Link. Three of the four items on this bar are
      fragments on the homepage (ABOUT_HREF, CLIENTS_HREF, ENQUIRY_HREF),
      and next/link turns the second and every later click on those into a
      silent no-op once the fragment is already in the URL - see the note
      in HashLink.tsx. A nav item that only works the first time is about
      the worst place for that bug to live. Non-fragment hrefs pass
      straight through to Link, so "Home" is unaffected.
    */
    <HashLink
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
    </HashLink>
  );
}

/*
 * SimpleDropdown lived here - a label, a chevron and a small panel of
 * links, shared by the Clients and Contact menus. Both of those are single
 * anchors now (CLIENTS_HREF, ENQUIRY_HREF), so nothing on this bar opens a
 * panel except MegaMenu, which has its own. Deleted rather than left for
 * later: it took useDropdown and ChevronDown with it, and a spare dropdown
 * sitting in the file is an invitation to grow the nav back.
 */

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
        {/*
          lg:flex-1 HERE AND ON THE RIGHT-HAND SLOT IS WHAT CENTRES THE NAV,
          and it is a fix rather than a flourish.

          justify-between distributes equal GAPS, which only centres the
          middle item when the items flanking it are the same width. They
          are nowhere near: measured at 1280, the logo lockup is 219px and
          the theme toggle beside it is 44px, so the bar was pushing the
          nav (219 - 44) / 2 = 87px to the right of the page centre. It
          measured 80px off, which is that arithmetic.

          Two flex-1 flanks share the leftover space equally instead, so
          the nav lands on the real centre line. Both keep their intrinsic
          min-width, so nothing here can squash the wordmark - and there is
          room for it to work: at the 1024 lg breakpoint each flank gets
          251px against the logo's 219px, and the margin only grows from
          there. Below lg the nav is display:none, so flex-1 is scoped to
          lg to leave the phone layout exactly as it was.
        */}
        <Link href="/" className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-corporate-ink lg:flex-1">
          <Image src="/logo-mark.png" alt="" width={45} height={44} className="h-9 w-auto lg:h-10" priority />
          <span className="flex flex-col leading-none">
            <span className="text-lg font-bold text-ink lg:text-xl">Assertive</span>
            {/*
              nowrap + a floor on the size, because this line is the first
              thing on the site to break and the header is the worst place
              for it to happen.

              The bar is a fixed h-[72px] below lg, and the lockup competes
              with the theme toggle and the hamburger for one row of it. At
              320px the wordmark is squeezed to 143px against the ~143px
              this string needs at 14px, so it wrapped to two lines: 28px of
              "Assertive" plus 43px of tagline is 71.4px of text inside a
              72px bar, sitting on the border with no room to breathe.

              The clamp only bites where it has to - it solves to 14px at
              360px and above, which is every size this already fit, and
              eases to 12px at 320px, where the string measures ~123px and
              has room again. whitespace-nowrap is what makes the shrink
              load-bearing rather than cosmetic: without it the line would
              still rather wrap than get smaller.

              Arbitrary size rather than text-small because that token
              carries its own line-height and weight (see tokens.css), and
              overriding just the size would leave those behind - so 1.55 is
              restated here, which is the value that token would have set.
            */}
            <span className="whitespace-nowrap text-[clamp(0.75rem,-0.25rem+5vw,0.875rem)] leading-[1.55] tracking-[0.04em] text-ink-muted">
              Brand Communications
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          <NavLink href="/">Home</NavLink>
          <NavLink href={ABOUT_HREF}>About Us</NavLink>
          <MegaMenu />
          {/* No chevron and no underline, both correct: there is nothing
              to open, and NavLink's active rule compares against
              usePathname(), which excludes the fragment - an in-page jump
              is not a "current page". */}
          <NavLink href={CLIENTS_HREF}>Clients</NavLink>
          {/* Takes Contact's slot, and it is the ONLY way in from this bar
              now - the "Client Query" button that used to sit in the
              corner opposite pointed at the same intention and at a route
              that no longer exists. See ENQUIRY_HREF. */}
          <NavLink href={ENQUIRY_HREF}>Enquiry</NavLink>
        </nav>

        {/* The nav's other counterweight - see the note on the logo. */}
        <div className="flex items-center gap-3 lg:flex-1 lg:justify-end">
          <ThemeToggle className="h-10 w-10" />
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
                {/* HashLink for the same reason NavLink uses it - and it
                    matters twice over here, because closing the panel
                    leaves the reader looking at whatever the no-op left on
                    screen with no clue the tap did nothing. */}
                <HashLink
                  href={ABOUT_HREF}
                  onClick={() => setMobileOpen(false)}
                  className="text-h3 text-ink"
                >
                  About Us
                </HashLink>
              </div>

              {/* Five disciplines, no capability list under them - the
                  same call the desktop MegaMenu makes, for the same
                  reason, and it matters more here: twenty-one names in
                  five repeating groups made this panel several screens of
                  scroll on a phone. Every capability lives on the
                  discipline pages now. */}
              <div className="flex flex-col gap-4">
                <Eyebrow>Services</Eyebrow>
                {PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <Link
                      key={pillar.id}
                      href={`/services/${pillar.id}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 text-ink"
                    >
                      <Icon size={20} aria-hidden="true" className={cn("shrink-0", pillar.ink)} />
                      <span className="text-body font-medium">{pillar.name}</span>
                    </Link>
                  );
                })}
                <Link
                  href="/services"
                  onClick={() => setMobileOpen(false)}
                  className="text-small text-ink-body"
                >
                  Everything we run in-house &#8594;
                </Link>
              </div>

              {/* Two plain links where two link GROUPS used to be, so both
                  take the text-h3 of the other top-level destinations
                  rather than the text-body of a child item. Order matches
                  the desktop bar. Enquiry also replaces the "Client Query"
                  button that used to close this panel - one door, and the
                  WhatsApp widget is already floating over this screen. */}
              <HashLink
                href={CLIENTS_HREF}
                onClick={() => setMobileOpen(false)}
                className="text-h3 text-ink"
              >
                Clients
              </HashLink>

              <HashLink
                href={ENQUIRY_HREF}
                onClick={() => setMobileOpen(false)}
                className="text-h3 text-ink"
              >
                Enquiry
              </HashLink>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
