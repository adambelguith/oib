import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { FAQSection } from "@/components/home/faq-section";
import { FinalCTA } from "@/components/home/final-cta";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("faqPage");
  return { title: t("title"), description: t("subtitle") };
}

export default async function FAQPage() {
  const t = await getTranslations("faqPage");

  return (
    <>
      <section className="bg-navy px-4 py-16 text-white">
        <div className="mx-auto max-w-7xl text-center lg:px-8">
          <h1 className="text-4xl font-bold">{t("title")}</h1>
          <p className="mt-4 text-lg text-white/70">{t("subtitle")}</p>
        </div>
      </section>
      <FAQSection />
      <FinalCTA />
    </>
  );
}
