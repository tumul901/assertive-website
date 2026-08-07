import "server-only";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";

export type LeadSource = "enquiry" | "whatsapp";

export interface Lead {
  id: string; // Keep as string or int depending on frontend, SQLite uses Int for id. We can convert to string for compatibility.
  source: LeadSource;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  eventType?: string;
  timing?: string;
  message?: string;
  createdAt: string;
}

export type NewLead = Omit<Lead, "id" | "createdAt">;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function saveLead(input: NewLead): Promise<Lead> {
  const dbLead = await prisma.lead.create({
    data: {
      source: input.source,
      name: input.name,
      email: input.email,
      phone: input.phone,
      eventType: input.eventType,
      message: input.message,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: "info@assertivebrand.co.in",
    subject: `New Lead from ${input.source}: ${input.name || "Unknown"}`,
    text: `
You have a new lead!

Source: ${input.source}
Name: ${input.name || "N/A"}
Email: ${input.email || "N/A"}
Phone: ${input.phone || "N/A"}
Event Type: ${input.eventType || "N/A"}

Message:
${input.message || "N/A"}
    `,
  };

  // Skip sending if we haven't configured the password yet
  if (process.env.SMTP_PASS && process.env.SMTP_PASS !== "YOUR_SMTP_PASSWORD") {
    try {
      await transporter.sendMail(mailOptions);
      console.log("Email notification sent successfully.");
    } catch (emailErr) {
      console.error("Failed to send email notification:", emailErr);
    }
  }

  return {
    id: dbLead.id.toString(),
    source: dbLead.source as LeadSource,
    name: dbLead.name || "",
    email: dbLead.email || "",
    phone: dbLead.phone || undefined,
    company: undefined, // Add to schema if needed
    eventType: dbLead.eventType || undefined,
    timing: undefined, // Add to schema if needed
    message: dbLead.message || undefined,
    createdAt: dbLead.createdAt.toISOString(),
  };
}

export async function getLeads(): Promise<Lead[]> {
  const dbLeads = await prisma.lead.findMany({
    orderBy: {
      createdAt: 'desc',
    }
  });

  return dbLeads.map((dbLead) => ({
    id: dbLead.id.toString(),
    source: dbLead.source as LeadSource,
    name: dbLead.name || "",
    email: dbLead.email || "",
    phone: dbLead.phone || undefined,
    company: undefined,
    eventType: dbLead.eventType || undefined,
    timing: undefined,
    message: dbLead.message || undefined,
    createdAt: dbLead.createdAt.toISOString(),
  }));
}

// We removed @upstash/ratelimit to save SQLite implementation time and avoid Redis dependency.
// For now, we mock the leadsRateLimit so the api/leads/route.ts doesn't break.
export const leadsRateLimit = {
  limit: async (ip: string) => ({ success: true }),
};

export async function deleteLead(id: string) {
  try {
    await prisma.lead.delete({
      where: { id: parseInt(id, 10) },
    });
    return { success: true };
  } catch (err) {
    console.error("Failed to delete lead:", err);
    return { success: false, error: "Failed to delete lead" };
  }
}
