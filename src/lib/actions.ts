"use server";

import { prisma } from "./prisma";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function submitLead(data: {
  source: string;
  name?: string;
  email?: string;
  phone?: string;
  eventType?: string;
  message?: string;
}) {
  try {
    // 1. Save to Database
    const lead = await prisma.lead.create({
      data: {
        source: data.source,
        name: data.name,
        email: data.email,
        phone: data.phone,
        eventType: data.eventType,
        message: data.message,
      },
    });

    // 2. Send Email Notification
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "info@assertivebrand.co.in",
      subject: `New Lead from ${data.source}: ${data.name || "Unknown"}`,
      text: `
You have a new lead!

Source: ${data.source}
Name: ${data.name || "N/A"}
Email: ${data.email || "N/A"}
Phone: ${data.phone || "N/A"}
Event Type: ${data.eventType || "N/A"}

Message:
${data.message || "N/A"}
      `,
    };

    // If SMTP is properly configured, this will send the email.
    if (process.env.SMTP_PASS && process.env.SMTP_PASS !== "YOUR_SMTP_PASSWORD") {
      await transporter.sendMail(mailOptions);
    } else {
      console.warn("SMTP_PASS is not configured. Email notification skipped.");
    }

    return { success: true, lead };
  } catch (error) {
    console.error("Error submitting lead:", error);
    return { success: false, error: "Failed to submit lead" };
  }
}
