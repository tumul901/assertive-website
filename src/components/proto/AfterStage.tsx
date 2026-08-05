import { PILLARS } from "@/lib/data/pillars";

// Stand-in for "the rest of the landing page", so each prototype can be
// judged on how it HANDS OFF, not just on how it looks while pinned. A
// scroll effect that is wonderful in isolation and then dumps you into a
// jarring cut is not a usable opening.
export function AfterStage({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="bg-surface py-[clamp(64px,8vw,128px)]">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
        <p className="text-eyebrow uppercase text-ink-muted">{eyebrow}</p>
        <h2 className="text-h2 mt-4 max-w-[20ch] text-ink">{title}</h2>
        <p className="text-body-lg mt-5 max-w-[62ch] text-ink-body">{body}</p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="rounded-lg bg-surface-raised p-6 shadow-card"
            >
              <div className={`mb-5 h-[4px] w-10 rounded-full ${pillar.mark}`} />
              <pillar.icon size={26} aria-hidden="true" className={pillar.ink} />
              <h3 className="text-h3 mt-4 text-ink">{pillar.name}</h3>
              <p className="text-small mt-2 text-ink-body">{pillar.blurb}</p>
            </div>
          ))}
        </div>

        <div className="h-[60svh]" aria-hidden="true" />
      </div>
    </section>
  );
}
