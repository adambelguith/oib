import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export async function FinalCTA() {
  const t = await getTranslations("cta");

  return (
    <section className="bg-gradient-to-r from-teal to-teal-dark py-20 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold lg:text-4xl">{t("title")}</h2>
          <p className="mt-4 text-lg text-white/80">{t("subtitle")}</p>
          <Button variant="cta" size="lg" className="mt-8" asChild>
            <Link href="/devis">
              {t("button")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
