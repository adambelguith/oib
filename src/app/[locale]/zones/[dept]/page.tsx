import { getTranslations, getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { zones, getZoneByCode } from "@/content/zones";
import { ServicesGrid } from "@/components/home/services-grid";

type Props = {
  params: Promise<{ dept: string; locale: string }>;
};

export function generateStaticParams() {
  return zones.map((z) => ({ dept: z.code }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { dept } = await params;
  const zone = getZoneByCode(dept);
  const locale = (await getLocale()) as "fr" | "en";
  if (!zone) return {};
  return {
    title: `Assainissement ${zone.name[locale]} (${dept}) | OIB Assainissement`,
    description:
      locale === "fr"
        ? `Services d'assainissement en ${zone.name.fr} (${dept}). Devis gratuit.`
        : `Sanitation services in ${zone.name.en} (${dept}). Free quote.`,
  };
}

export default async function ZonePage({ params }: Props) {
  const { dept } = await params;
  const zone = getZoneByCode(dept);
  const locale = (await getLocale()) as "fr" | "en";
  const t = await getTranslations("zonesPage");

  if (!zone) notFound();

  return (
    <>
      <section className="bg-navy px-4 py-16 text-white">
        <div className="mx-auto max-w-7xl lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-3">
              <MapPin className="h-8 w-8 text-teal-light" />
              <div>
                <p className="text-sm text-white/60">Département {dept}</p>
                <h1 className="text-3xl font-bold lg:text-4xl">
                  {locale === "fr"
                    ? `Assainissement ${zone.name.fr}`
                    : `Sanitation ${zone.name.en}`}
                </h1>
              </div>
            </div>
            <p className="mt-4 max-w-2xl text-white/70">{t("subtitle")}</p>
            <Button variant="cta" size="lg" className="mt-6" asChild>
              <Link href={`/devis?department=${dept}`}>
                {t("cta", { dept })}
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-xl font-bold text-navy">
            {locale === "fr" ? "Villes desservies" : "Cities served"}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {zone.cities[locale].map((city) => (
              <span
                key={city}
                className="rounded-full bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ServicesGrid />

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="mb-6 text-xl font-bold text-navy">
            {locale === "fr" ? "Autres départements" : "Other departments"}
          </h2>
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
            {zones
              .filter((z) => z.code !== dept)
              .map((z) => (
                <Link key={z.code} href={`/zones/${z.code}`}>
                  <Card className="text-center transition-all hover:border-teal">
                    <CardContent className="py-4">
                      <p className="text-lg font-bold text-navy">{z.code}</p>
                      <p className="text-xs text-navy/60">{z.name[locale]}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
