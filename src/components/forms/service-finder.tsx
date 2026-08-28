"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { services } from "@/content/services";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const problemToService: Record<string, string> = {
  q2o1: "mise-en-conformite",
  q2o2: "raccordement-ep-eu",
  q2o3: "fosses-microstations",
  q2o4: "pompes-relevage",
  q2o5: "curage-inspection",
  q2o6: "bacs-graisses",
};

const urgencyMap: Record<string, string> = {
  q3o1: "normal",
  q3o2: "urgent",
  q3o3: "emergency",
};

export function ServiceFinder() {
  const t = useTranslations("diagnosticPage");
  const locale = useLocale() as "fr" | "en";
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions = [
    {
      key: "q1",
      options: ["q1o1", "q1o2", "q1o3", "q1o4"],
    },
    {
      key: "q2",
      options: ["q2o1", "q2o2", "q2o3", "q2o4", "q2o5", "q2o6"],
    },
    {
      key: "q3",
      options: ["q3o1", "q3o2", "q3o3"],
    },
    {
      key: "q4",
      options: siteConfig.departments.map((d) => d),
    },
  ];

  const currentQ = questions[step - 1];
  const recommendedSlug = answers.q2 ? problemToService[answers.q2] : "";
  const recommended = services.find((s) => s.slug === recommendedSlug);

  const selectAnswer = (option: string) => {
    const newAnswers = { ...answers, [currentQ.key]: option };
    setAnswers(newAnswers);
    setStep(step < 4 ? step + 1 : 5);
  };

  const restart = () => {
    setStep(1);
    setAnswers({});
  };

  if (step === 5 && recommended) {
    const urgency = urgencyMap[answers.q3] || "normal";
    const dept = answers.q4 || "";
    const devisUrl = `/devis?service=${recommended.slug}&department=${dept}&urgency=${urgency}`;

    return (
      <Card className="mx-auto max-w-2xl">
        <CardContent className="py-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal">{t("result")}</p>
          <h2 className="mt-2 text-2xl font-bold text-navy">{recommended.title[locale]}</h2>
          <p className="mt-3 text-navy/70">{recommended.description[locale]}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link href={devisUrl}>
                {t("resultCta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" onClick={restart}>
              <RotateCcw className="h-4 w-4" />
              {t("restart")}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6 flex gap-2">
        {questions.map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1.5 flex-1 rounded-full",
              step > i + 1 ? "bg-teal" : step === i + 1 ? "bg-amber" : "bg-navy/10"
            )}
          />
        ))}
      </div>

      <h2 className="mb-6 text-xl font-bold text-navy">
        {currentQ.key === "q4" ? t("q4") : t(currentQ.key as "q1")}
      </h2>

      <div className="grid gap-3">
        {currentQ.options.map((option) => (
          <button
            key={option}
            onClick={() => selectAnswer(option)}
            className="rounded-xl border-2 border-navy/10 p-4 text-left font-medium text-navy transition-all hover:border-teal hover:bg-teal/5"
          >
            {currentQ.key === "q4" ? `${option}` : t(option as "q1o1")}
          </button>
        ))}
      </div>
    </div>
  );
}
