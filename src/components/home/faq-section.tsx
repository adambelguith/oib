import { getTranslations, getLocale } from "next-intl/server";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/ui/fade-in";
import { faqItems } from "@/content/faq";

export async function FAQSection({ limit }: { limit?: number }) {
  const t = await getTranslations("faq");
  const locale = (await getLocale()) as "fr" | "en";
  const items = limit ? faqItems.slice(0, limit) : faqItems;

  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold text-navy">{t("title")}</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="mt-10">
            {items.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question[locale]}</AccordionTrigger>
                <AccordionContent>{item.answer[locale]}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>

        {limit && (
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link href="/faq">{t("viewAll")}</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
