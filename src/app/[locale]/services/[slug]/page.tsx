import { getTranslations, getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { services, getServiceBySlug } from "@/content/services";
import { ServiceIcon } from "@/components/ui/service-icon";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const locale = (await getLocale()) as "fr" | "en";
  if (!service) return {};
  return {
    title: `${service.title[locale]} | OIB Assainissement`,
    description: service.shortDescription[locale],
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const locale = (await getLocale()) as "fr" | "en";
  const t = await getTranslations("serviceDetail");

  if (!service) notFound();

  return (
    <>
      <section className="bg-navy px-4 py-16 text-white">
        <div className="mx-auto max-w-7xl lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal">
                <ServiceIcon name={service.icon} className="h-7 w-7" />
              </div>
              <div>
                <h1 className="text-3xl font-bold lg:text-4xl">{service.title[locale]}</h1>
                <p className="mt-2 text-white/70">{service.shortDescription[locale]}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <FadeIn>
                <p className="text-lg text-navy/80 leading-relaxed">{service.description[locale]}</p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h2 className="mt-10 text-2xl font-bold text-navy">{t("features")}</h2>
                <ul className="mt-6 space-y-3">
                  {service.features[locale].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-navy/80">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-teal" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            <FadeIn delay={0.2}>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-navy">{service.ctaLabel[locale]}</h3>
                  <p className="mt-2 text-sm text-navy/60">
                    {locale === "fr"
                      ? "Devis gratuit et sans engagement. Réponse rapide."
                      : "Free quote, no obligation. Fast response."}
                  </p>
                  <Button variant="cta" size="lg" className="mt-6 w-full" asChild>
                    <Link href={`/devis?service=${service.slug}`}>{t("cta")}</Link>
                  </Button>
                  <Button variant="outline" className="mt-3 w-full" asChild>
                    <Link href="/diagnostic">
                      {locale === "fr" ? "Diagnostic gratuit" : "Free diagnostic"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
