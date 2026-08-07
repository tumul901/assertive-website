import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import "./globals.css";

// weight: 'variable' loads the full variable axis (Manrope 200-800,
// Inter 100-900) as one file. Individual weights (600/700/800 for display,
// 400/500 for body — see §2.7) are then just `font-weight` in CSS, no
// separate static instances requested. See PLAN.md §0.2 item 3 — a
// discrete range string like '600 800' looked right per next/font's prose
// docs but next/font/google's generated types reject it for these fonts;
// 'variable' is what the type definitions actually accept.
const display = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Assertive Brand Communications — Event Management & Brand Experiences",
  description:
    "A full-service event management and brand communications agency delivering corporate events, brand activations, live entertainment and weddings across India.",
};

/*
 * Sets data-theme before the first paint. This MUST be a blocking inline
 * script and it MUST NOT be replaced with React state: the server has no
 * way to know the visitor's stored choice or their OS preference, so any
 * React-owned initial value renders light and a dark-preferring visitor
 * gets a full white frame before hydration. Reading localStorage first
 * and the media query only as a fallback keeps an explicit choice
 * winning over the OS.
 *
 * suppressHydrationWarning on <html> below is required and deliberate -
 * this script mutates the element before React reaches it.
 */
const NO_FLASH = `(function(){try{var k='assertive-theme',t=localStorage.getItem(k);if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='light';}})();`;

/*
 * A real, verified gap, not a hypothetical: Reveal.tsx (and a couple of
 * elements in HeroSequence.tsx) pass Motion an `initial={{ opacity: 0 }}`-
 * style starting state. Motion writes that straight into the
 * SERVER-RENDERED inline style attribute - confirmed via a no-JS request,
 * the exact string is `opacity:0;transform:translateY(24px)`. The
 * animation that is supposed to bring it to opacity:1 is client-only
 * (whileInView / a mount effect), so with JavaScript disabled nothing
 * ever runs to correct it: whole sections (the trust bar, every card,
 * the enquiry form's left column) sit at permanent opacity:0. Opacity
 * alone does not remove an element from the accessibility tree, so a
 * screen reader user without JS still gets this content - but a SIGHTED
 * no-JS visitor would see blank gaps where real content is.
 *
 * <noscript> is the correct tool: this stylesheet activates ONLY when
 * the browser has no JavaScript at all, so it has zero effect on the
 * normal experience and needs no changes to Reveal or any component
 * that uses it. The substring match also catches partial values like
 * "opacity:0.7" - harmless, since forcing MORE things to full visibility
 * under no-JS is always the safe direction, never the wrong one.
 *
 * The .pin-* rules are the second half of the same problem. A pinned
 * scrollytelling stage is driven ENTIRELY by a scroll progress value that
 * only exists once JS runs; with no JS the progress is permanently 0, so
 * every layer paints its first frame on top of every other layer inside
 * one sticky viewport. Unpinning the stage and returning its layers to
 * normal flow turns that pile into an ordinary stacked section, and
 * hiding the portal machinery outright (.pin-portal - the photograph, the
 * masking sheet, the scroll cue) leaves exactly the content that is worth
 * reading: the real heading and the real copy. This mirrors what the
 * reduced-motion rules in globals.css do, on purpose - one degraded
 * presentation to reason about, not two.
 *
 * The case-study carousel is the one place where the substring rule above
 * is actively WRONG, and it is worth understanding why rather than adding
 * another exception later. Reveal's opacity:0 means "not animated in yet" -
 * a state that exists only because JS exists, so forcing it visible is a
 * pure win. A carousel's opacity:0 means "this is slide four" - a state
 * that is perfectly valid with no JS at all, because slide one is showing
 * and it is real, readable content. Unhiding the other four does not
 * recover anything; it lays five case studies on top of each other in the
 * one grid cell they deliberately share.
 *
 * So the inactive slides are hidden outright here. They stay in the HTML
 * for a crawler to read, `inert` already carries which ones they are, and
 * display:none beats the opacity:1 the blanket rule hands them regardless
 * of source order. The controls go too: buttons whose only job is to call
 * setState are worse than absent when nothing can call it.
 *
 * The accordion gallery (the previous Selected Events section, since
 * replaced by that carousel - the component is still in components/ui) was
 * a third instance of the same shape, and the substring rule above did NOT
 * cover it, because none of its hidden state was an inline style. Three
 * separate things broke with no JS, and all three had to be seen in a real
 * javaScriptEnabled:false render before they were believed:
 *
 *   - the captions are hidden by Tailwind's opacity-0 CLASS;
 *   - every photo is grey, because --ag-gray is only ever written by GSAP
 *     and its declared fallback is 1;
 *   - worst, the image box is CENTRED BY GSAP. It is positioned at
 *     top:50%/left:50% and relies on an xPercent/yPercent -50 transform to
 *     pull itself back. With no JS that transform never lands and the photo
 *     sits in the bottom-right quadrant of its panel at the unresolved
 *     var() fallback width, leaving most of each card as bare near-black.
 *
 * So the rule below has two halves: un-hide, then re-seat the image over
 * its panel. The result is an honest degraded form - a five-up filmstrip,
 * in colour, captioned - rather than five dark slabs.
 *
 * The `> * > span:first-child > span:first-child` path is deliberately
 * exact. A looser `span span` also matches the overlay AND the caption's
 * 3px accent bar, and stretching that bar to inset:0 floods the whole panel
 * white. Selection is by aria-label rather than a class because the
 * attribute is already part of the vendored component's markup (see the
 * delta list in AccordionGallery.tsx); a class added purely as a styling
 * hook would be one more thing to re-apply on every upstream re-sync.
 */
const NO_JS_REVEAL_FALLBACK = `
[style*="opacity:0"]{opacity:1 !important;transform:none !important;}
.pin-wrap{height:auto !important;}
.pin-stage{position:static !important;height:auto !important;overflow:visible !important;}
.pin-layer{position:static !important;padding-block:clamp(64px,8vw,128px);}
.pin-portal{display:none !important;}
[aria-label="Image accordion gallery"] span{opacity:1 !important;filter:none !important;}
[aria-label="Image accordion gallery"] > * > span:first-child > span:first-child{inset:0 !important;width:100% !important;height:100% !important;transform:none !important;}
[data-cs-slide][inert],[data-cs-controls],[data-cs-dots]{display:none !important;}
img[data-cs-photo]~img[data-cs-photo]{display:none !important;}
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH }} />
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: NO_JS_REVEAL_FALLBACK }} />
        </noscript>
      </head>
      {/* The widget lives in the layout, not on the page, because a
          floating contact button that vanishes when you open a work
          detail page is worse than not having one. It sits at z-30 on
          purpose: under Header (z-50) and under the mobile nav overlay
          (z-40), so opening the menu covers it rather than leaving a
          green button floating over a full-screen sheet. */}
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
