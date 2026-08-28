import { getTranslations, getLocale } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { services } from "@/content/services";
import { ServiceIcon } from "@/components/ui/service-icon";

export async function ServicesGrid({ limit }: { limit?: number }) {
  const t = await getTranslations("services");
  const locale = (await getLocale()) as "fr" | "en";
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy lg:text-4xl">{t("title")}</h2>
            <p className="mt-3 text-navy/70">{t("subtitle")}</p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayServices.map((service, i) => (
              <FadeIn key={service.slug} delay={i * 0.1}>
                <Link href={`/services/${service.slug}`}>
                  <Card className="group h-full transition-all hover:border-teal hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                        <ServiceIcon name={service.icon} className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-navy">{service.title[locale]}</h3>
                      <p className="mt-2 text-sm text-navy/70">{service.shortDescription[locale]}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal">
                        {t("learnMore")}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            ))}
        </div>

        {limit && (
          <div className="mt-10 text-center">
            <Button variant="outline" asChild>
              <Link href="/services">{t("viewAll")}</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
