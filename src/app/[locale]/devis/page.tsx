import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { QuoteWizard } from "@/components/forms/quote-wizard";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("devis");
  return { title: t("title"), description: t("subtitle") };
}

export default async function DevisPage() {
  const t = await getTranslations("devis");

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-navy lg:text-4xl">{t("title")}</h1>
          <p className="mt-3 text-navy/70">{t("subtitle")}</p>
        </div>
        <Suspense fallback={<div className="text-center text-navy/60">Loading...</div>}>
          <QuoteWizard />
        </Suspense>
      </div>
    </section>
  );
}
