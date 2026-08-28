import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("legal");
  return { title: t("mentionsTitle") };
}

export default async function MentionsLegalesPage() {
  const t = await getTranslations("legal");

  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 lg:px-8 prose prose-navy">
        <h1 className="text-3xl font-bold text-navy">{t("mentionsTitle")}</h1>
        <div className="mt-8 space-y-4 text-navy/80">
          <p><strong>Raison sociale :</strong> OIB Assainissement</p>
          <p><strong>Adresse :</strong> {siteConfig.address.street}, {siteConfig.address.zip} {siteConfig.address.city}</p>
          <p><strong>Téléphone :</strong> {siteConfig.phone}</p>
          <p><strong>Email :</strong> {siteConfig.email}</p>
          <p><strong>Assurance décennale :</strong> {siteConfig.insurance}</p>
          <p><strong>Hébergeur :</strong> Vercel Inc.</p>
        </div>
      </div>
    </section>
  );
}
