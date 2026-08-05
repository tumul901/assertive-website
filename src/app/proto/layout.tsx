import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

// Prototype shell. Deliberately has NO site header - a sticky 110px bar
// would fight every one of these full-viewport pinned stages, and the
// point of the exercise is to judge the stage. A small floating switcher
// instead, so all three can be compared without going back to an index.
const CONCEPTS = [
  { href: "/proto/portal", label: "A · Portal" },
  { href: "/proto/rundown", label: "B · Call Sheet" },
  { href: "/proto/threads", label: "C · Threads" },
];

export default function ProtoLayout({ children }: LayoutProps<"/proto">) {
  return (
    <>
      <nav
        aria-label="Concept switcher"
        className="fixed left-1/2 top-4 z-[100] flex -translate-x-1/2 items-center gap-1 rounded-full border border-hairline bg-surface-raised/90 p-1 shadow-bar backdrop-blur-md"
      >
        {CONCEPTS.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="text-sm rounded-full px-3 py-1.5 font-medium text-ink transition-colors duration-[var(--dur-fast)] hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-corporate-ink"
          >
            {c.label}
          </Link>
        ))}
        <span className="mx-1 h-5 w-px bg-hairline" aria-hidden="true" />
        <ThemeToggle className="h-8 w-8 border-0" />
      </nav>
      <main>{children}</main>
    </>
  );
}
