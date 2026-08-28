"use server";

import { Resend } from "resend";
import { contactSchema, quoteSchema, type ContactFormData, type QuoteFormData } from "@/lib/validations";
import { siteConfig } from "@/config/site";

const resend = new Resend(process.env.RESEND_API_KEY);

function getFromEmail() {
  return process.env.FROM_EMAIL || "onboarding@resend.dev";
}

function getContactEmail() {
  return process.env.CONTACT_EMAIL || siteConfig.email;
}

function buildNotificationHtml(data: Record<string, string>) {
  const rows = Object.entries(data)
    .map(([key, value]) => `<tr><td style="padding:8px;font-weight:bold;">${key}</td><td style="padding:8px;">${value}</td></tr>`)
    .join("");

  return `
    <div style="font-family:sans-serif;max-width:600px;">
      <h2 style="color:#0F2B46;">Nouvelle demande — OIB Assainissement</h2>
      <table style="width:100%;border-collapse:collapse;">${rows}</table>
    </div>
  `;
}

function buildAutoReplyHtml(name: string, locale: "fr" | "en") {
  if (locale === "en") {
    return `
      <div style="font-family:sans-serif;max-width:600px;">
        <h2 style="color:#0F2B46;">Thank you, ${name}!</h2>
        <p>We have received your request and will contact you shortly.</p>
        <p>For emergencies, call us at <strong>${siteConfig.phone}</strong>.</p>
        <p>— OIB Assainissement</p>
      </div>
    `;
  }
  return `
    <div style="font-family:sans-serif;max-width:600px;">
      <h2 style="color:#0F2B46;">Merci, ${name} !</h2>
      <p>Nous avons bien reçu votre demande et vous contacterons dans les plus brefs délais.</p>
      <p>Pour les urgences, appelez-nous au <strong>${siteConfig.phone}</strong>.</p>
      <p>— OIB Assainissement</p>
    </div>
  `;
}

export async function submitContactForm(
  data: ContactFormData,
  locale: "fr" | "en" = "fr"
): Promise<{ success: boolean; error?: string }> {
  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: "Validation failed" };
  }

  if (parsed.data.website) {
    return { success: true };
  }

  if (!process.env.RESEND_API_KEY) {
    console.log("Contact form (no Resend key):", parsed.data);
    return { success: true };
  }

  try {
    await resend.emails.send({
      from: getFromEmail(),
      to: getContactEmail(),
      subject: `[OIB] Nouvelle demande — ${parsed.data.service}`,
      html: buildNotificationHtml({
        Nom: parsed.data.name,
        Email: parsed.data.email,
        Téléphone: parsed.data.phone,
        Service: parsed.data.service,
        Message: parsed.data.message,
      }),
    });

    await resend.emails.send({
      from: getFromEmail(),
      to: parsed.data.email,
      subject: locale === "en" ? "We received your request — OIB Assainissement" : "Nous avons reçu votre demande — OIB Assainissement",
      html: buildAutoReplyHtml(parsed.data.name, locale),
    });

    return { success: true };
  } catch (error) {
    console.error("Resend error:", error);
    return { success: false, error: "Email send failed" };
  }
}

export async function submitQuoteForm(
  data: QuoteFormData,
  locale: "fr" | "en" = "fr"
): Promise<{ success: boolean; error?: string }> {
  const parsed = quoteSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: "Validation failed" };
  }

  if (parsed.data.website) {
    return { success: true };
  }

  if (!process.env.RESEND_API_KEY) {
    console.log("Quote form (no Resend key):", parsed.data);
    return { success: true };
  }

  try {
    await resend.emails.send({
      from: getFromEmail(),
      to: getContactEmail(),
      subject: `[OIB] Demande de devis — ${parsed.data.service}`,
      html: buildNotificationHtml({
        Nom: parsed.data.name,
        Email: parsed.data.email,
        Téléphone: parsed.data.phone,
        Service: parsed.data.service,
        Département: parsed.data.department,
        Urgence: parsed.data.urgency || "normal",
        Description: parsed.data.description,
      }),
    });

    await resend.emails.send({
      from: getFromEmail(),
      to: parsed.data.email,
      subject: locale === "en" ? "Quote request received — OIB Assainissement" : "Demande de devis reçue — OIB Assainissement",
      html: buildAutoReplyHtml(parsed.data.name, locale),
    });

    return { success: true };
  } catch (error) {
    console.error("Resend error:", error);
    return { success: false, error: "Email send failed" };
  }
}
