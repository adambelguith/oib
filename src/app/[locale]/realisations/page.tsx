import { getTranslations, getLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { realisations } from "@/content/testimonials";
import { services } from "@/content/services";
import { FinalCTA } from "@/components/home/final-cta";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("realisationsPage");
  return { title: t("title"), description: t("subtitle") };
}

export default async function RealisationsPage() {
  const t = await getTranslations("realisationsPage");
  const locale = (await getLocale()) as "fr" | "en";

  return (
    <>
      <section className="bg-navy px-4 py-16 text-white">
        <div className="mx-auto max-w-7xl text-center lg:px-8">
          <h1 className="text-4xl font-bold">{t("title")}</h1>
          <p className="mt-4 text-lg text-white/70">{t("subtitle")}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {realisations.map((item, i) => {
              const service = services.find((s) => s.slug === item.service);
              return (
                <FadeIn key={item.id} delay={i * 0.1}>
                  <Card className="h-full overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-teal/20 to-navy/20" />
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3">
                        {item.location}
                      </Badge>
                      <h3 className="text-lg font-bold text-navy">{item.title[locale]}</h3>
                      <p className="mt-2 text-sm text-navy/70">{item.description[locale]}</p>
                      {service && (
                        <Link
                          href={`/services/${service.slug}`}
                          className="mt-4 inline-block text-sm font-semibold text-teal hover:underline"
                        >
                          {service.title[locale]} →
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
