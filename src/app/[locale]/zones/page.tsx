import { getTranslations, getLocale } from "next-intl/server";
import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { zones } from "@/content/zones";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("zonesPage");
  return { title: t("title"), description: t("subtitle") };
}

export default async function ZonesIndexPage() {
  const t = await getTranslations("zonesPage");
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {zones.map((zone, i) => (
              <FadeIn key={zone.code} delay={i * 0.05}>
                <Link href={`/zones/${zone.code}`}>
                  <Card className="transition-all hover:border-teal hover:shadow-md">
                    <CardContent className="flex items-center gap-3 p-6">
                      <MapPin className="h-5 w-5 text-teal" />
                      <div>
                        <p className="text-lg font-bold text-navy">{zone.code}</p>
                        <p className="text-sm text-navy/60">{zone.name[locale]}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
