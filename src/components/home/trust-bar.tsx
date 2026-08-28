import { getTranslations } from "next-intl/server";
import { Clock, Shield, Award, MapPin, Star } from "lucide-react";
import { siteConfig } from "@/config/site";
import { FadeIn } from "@/components/ui/fade-in";

export async function TrustBar() {
  const t = await getTranslations("trust");

  const items = [
    { icon: Clock, label: t("available") },
    { icon: Shield, label: t("insurance") },
    { icon: Award, label: t("spanc") },
    { icon: MapPin, label: t("departments") },
    { icon: Star, label: `${t("rating")} — ${siteConfig.googleRating}/5` },
  ];

  return (
    <section className="border-b border-navy/10 bg-surface py-6">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {items.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-medium text-navy">
                <Icon className="h-5 w-5 text-teal" />
                {label}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
