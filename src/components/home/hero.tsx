import { getTranslations } from "next-intl/server";
import { Phone, ArrowRight, Search } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { siteConfig } from "@/config/site";

export async function Hero() {
  const t = await getTranslations("hero");
  const tTrust = await getTranslations("trust");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-teal-dark px-4 py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="relative mx-auto max-w-7xl lg:px-8">
        <FadeIn>
          <Badge className="mb-6 bg-white/10 text-white">{t("badge")}</Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight lg:text-5xl xl:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">{t("subtitle")}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="cta" size="lg" asChild>
              <Link href="/devis">
                {t("ctaDevis")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link href="/diagnostic">
                <Search className="h-4 w-4" />
                {t("ctaDiagnostic")}
              </Link>
            </Button>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-bold backdrop-blur transition-colors hover:bg-white/20"
            >
              <Phone className="h-5 w-5 text-amber" />
              {t("ctaCall")}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/70">
            <span>✓ {tTrust("available")}</span>
            <span>✓ {tTrust("insurance")}</span>
            <span>✓ {tTrust("spanc")}</span>
            <span>✓ {tTrust("departments")}</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
