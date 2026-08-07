import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { getLeads, type Lead } from "@/lib/leads";

/*
 * Internal tool, not a marketing page - no Header/Footer, no nav link
 * pointing at it anywhere, reachable only by whoever has the URL and the
 * password proxy.ts asks for. Deliberately excluded from robots/sitemap
 * by virtue of never being linked, same reasoning the site already
 * applies to unfinished routes.
 *
 * Always rendered fresh: this is the one page on the site where "the
 * build's cached copy" would mean a real lead going unseen, so
 * force-dynamic isn't a performance nicety here, it's the point.
 */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Leads — Assertive Admin",
  robots: { index: false, follow: false },
};

const SOURCE_LABEL: Record<Lead["source"], string> = {
  enquiry: "Enquiry form",
  whatsapp: "WhatsApp widget",
};

export default async function AdminLeadsPage() {
  let leads: Lead[] = [];
  let loadError: string | null = null;

  try {
    leads = await getLeads();
  } catch (err) {
    console.error("[admin/leads] failed to load leads:", err);
    loadError =
      "Could not load leads from the SQLite database. Check your Prisma configuration or terminal logs for more details.";
  }

  return (
    <main className="min-h-screen bg-surface py-12">
      <Container>
        <div className="flex flex-col gap-1">
          <h1 className="text-h2 text-ink">Leads</h1>
          <p className="text-body text-ink-body">
            Every submission from the Enquiry form and the WhatsApp widget, newest first.
            {leads.length > 0 && ` ${leads.length} total.`}
          </p>
        </div>

        {loadError && (
          // See Enquiry.tsx's error message for why this is a literal
          // colour via style rather than a Tailwind text-red- class.
          <p
            role="alert"
            className="mt-8 rounded-md border border-hairline bg-surface-raised p-4 text-small"
            style={{ color: "#dc2626" }}
          >
            {loadError}
          </p>
        )}

        {!loadError && leads.length === 0 && (
          <p className="mt-8 text-body text-ink-body">No leads yet.</p>
        )}

        {leads.length > 0 && (
          <ul className="mt-8 flex flex-col gap-4">
            {leads.map((lead) => (
              <LeadCard key={lead.id} lead={lead} />
            ))}
          </ul>
        )}
      </Container>
    </main>
  );
}

import { Trash2 } from "lucide-react";
import { revalidatePath } from "next/cache";
import { DeleteButton } from "./DeleteButton";

async function handleDelete(formData: FormData) {
  "use server";
  const id = formData.get("id") as string;
  if (id) {
    const { deleteLead } = await import("@/lib/leads");
    await deleteLead(id);
    revalidatePath("/admin/leads");
  }
}

function LeadCard({ lead }: { lead: Lead }) {
  const details: Array<[string, string | undefined]> = [
    ["Phone", lead.phone],
    ["Company", lead.company],
    ["Event type", lead.eventType],
    ["Timing", lead.timing],
    ["Message", lead.message],
  ].filter(([, value]) => Boolean(value)) as Array<[string, string]>;

  return (
    <li className="rounded-lg bg-surface-raised p-5 shadow-card sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-small inline-flex items-center rounded-full border border-hairline px-2.5 py-1 font-medium text-ink-body">
            {SOURCE_LABEL[lead.source]}
          </span>
          <time dateTime={lead.createdAt} className="text-small text-ink-body">
            {new Date(lead.createdAt).toLocaleString("en-IN", {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </time>
        </div>
        
        <form action={handleDelete}>
          <input type="hidden" name="id" value={lead.id} />
          <DeleteButton />
        </form>
      </div>

      <div className="mt-4 flex flex-col gap-0.5">
        <span className="text-h3 text-ink">{lead.name}</span>
        <a href={`mailto:${lead.email}`} className="text-body text-ink-body hover:underline">
          {lead.email}
        </a>
      </div>

      {details.length > 0 && (
        <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 border-t border-hairline pt-4 sm:grid-cols-2">
          {details.map(([label, value]) => (
            <div key={label}>
              <dt className="text-small text-ink-body">{label}</dt>
              <dd className="text-body text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      )}
    </li>
  );
}
