"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentPropsWithoutRef } from "react";

/*
 * ONE LINK COMPONENT FOR EVERY HREF THAT CARRIES A #FRAGMENT, AND IT
 * EXISTS BECAUSE next/link SILENTLY BREAKS THE ONES THAT POINT AT THE
 * PAGE YOU ARE ALREADY ON.
 *
 * Scrolling to a fragment is a BROWSER behaviour, and the browser does it
 * every single time a fragment link is followed - it does not care
 * whether the URL changed, only that a link was followed and the document
 * has an element with that id. next/link does not inherit any of that. It
 * intercepts the click and hands the URL to the router, and the router
 * compares that URL with the current one; when they match there is no
 * navigation to perform, so it does nothing at all and the scroll step
 * never runs. No hashchange fires either, because the hash did not
 * change, so nothing downstream can cover for it.
 *
 * The result is a link that works exactly once. Click "Explore Our Work"
 * on / and you land on /#work; scroll back up, click it again, and
 * nothing happens - for the rest of the visit, because the URL now ends
 * in #work and every later click is a no-op. Measured from the same
 * starting scrollY of 0: a plain <a> lands at 7975, <Link> stays at 0.
 * The same applied to "About Us", "Clients" and "Enquiry" in the header
 * and the footer, which is worse, because a nav item is exactly the thing
 * a reader clicks more than once.
 *
 * So: when the href points into the CURRENT document, render a plain <a>
 * and let the browser do the thing it has always done correctly. When it
 * points at another page, render <Link> and keep the client-side
 * navigation and prefetching that make it worth having. Deciding here
 * rather than at each call site is the point - "About Us" in the header
 * is same-document on / and cross-page on /services, and it is the same
 * link either way.
 *
 * usePathname() is safe to branch on: it resolves on the server too, so
 * both branches render the same <a href> markup and there is nothing for
 * hydration to disagree about.
 */

type Props = ComponentPropsWithoutRef<"a"> & { href: string };

export function HashLink({ href, ...rest }: Props) {
  const pathname = usePathname();
  const hashAt = href.indexOf("#");

  /*
   * hashAt === 0 is a bare "#enquiry", which is same-document by
   * definition. hashAt > 0 is an absolute "/#enquiry", which is only
   * same-document when the part before the # is the page we are on -
   * that comparison is the whole reason this cannot be decided
   * statically. hashAt === -1 has no fragment at all and is an ordinary
   * link, so it falls through to Link untouched; that is what lets a
   * mixed list like the footer's (/#about, /careers) pass every entry
   * through this component without sorting them first.
   */
  const sameDocument = hashAt === 0 || (hashAt > 0 && href.slice(0, hashAt) === pathname);

  if (sameDocument) {
    return <a href={href} {...rest} />;
  }

  return <Link href={href} {...rest} />;
}
