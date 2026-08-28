import { getTranslations, getLocale } from "next-intl/server";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { testimonials } from "@/content/testimonials";
import { siteConfig } from "@/config/site";

export async function Testimonials() {
  const t = await getTranslations("testimonials");
  const locale = (await getLocale()) as "fr" | "en";

  return (
    <section className="bg-navy py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-amber">{t("excellent")}</p>
            <div className="mt-2 flex items-center justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber text-amber" />
              ))}
            </div>
            <h2 className="mt-4 text-3xl font-bold">{t("title")}</h2>
            <p className="mt-2 text-white/60">
              {t("subtitle", { count: siteConfig.googleReviewCount })}
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <FadeIn key={item.name} delay={i * 0.1}>
              <Card className="border-white/10 bg-white/5 text-white">
                <CardContent className="p-6">
                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: item.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-amber text-amber" />
                    ))}
                  </div>
                  <p className="text-sm text-white/80">&ldquo;{item.text[locale]}&rdquo;</p>
                  <p className="mt-4 text-sm font-semibold text-teal-light">{item.name}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
