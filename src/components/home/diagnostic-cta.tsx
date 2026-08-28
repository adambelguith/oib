import { getTranslations } from "next-intl/server";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export async function DiagnosticCTA() {
  const t = await getTranslations("diagnostic");

  return (
    <section className="bg-teal/5 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn>
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-teal/20 bg-white p-8 text-center shadow-sm lg:flex-row lg:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-teal text-white">
              <Search className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-navy">{t("title")}</h2>
              <p className="mt-2 text-navy/70">{t("subtitle")}</p>
            </div>
            <Button variant="cta" size="lg" asChild>
              <Link href="/diagnostic">
                {t("cta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
