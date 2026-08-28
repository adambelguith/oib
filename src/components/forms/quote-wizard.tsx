"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { quoteSchema, type QuoteFormData } from "@/lib/validations";
import { submitQuoteForm } from "@/actions/contact";
import { services } from "@/content/services";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "oib-quote-draft";

type QuoteWizardProps = {
  defaultService?: string;
  defaultDepartment?: string;
  defaultUrgency?: "normal" | "urgent" | "emergency";
};

export function QuoteWizard({
  defaultService = "",
  defaultDepartment = "",
  defaultUrgency = "normal",
}: QuoteWizardProps) {
  const t = useTranslations("devis");
  const tServices = useTranslations("serviceOptions");
  const locale = useLocale() as "fr" | "en";
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const steps = [t("step1"), t("step2"), t("step3"), t("step4"), t("step5")];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      service: defaultService || searchParams.get("service") || "",
      department: defaultDepartment || searchParams.get("department") || "",
      urgency: (defaultUrgency || searchParams.get("urgency") || "normal") as QuoteFormData["urgency"],
      description: "",
      name: "",
      email: "",
      phone: "",
      website: "",
    },
  });

  const values = watch();

  useEffect(() => {
    const draft = sessionStorage.getItem(STORAGE_KEY);
    if (draft) {
      try {
        const parsed = JSON.parse(draft);
        Object.entries(parsed).forEach(([k, v]) => setValue(k as keyof QuoteFormData, v as string));
      } catch {
        // ignore
      }
    }
  }, [setValue]);

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(values));
  }, [values]);

  const onSubmit = async (data: QuoteFormData) => {
    setLoading(true);
    const result = await submitQuoteForm(data, locale);
    setLoading(false);

    if (result.success) {
      sessionStorage.removeItem(STORAGE_KEY);
      setDone(true);
      toast.success(t("successTitle"));
    } else {
      toast.error("Error");
    }
  };

  if (done) {
    return (
      <Card className="mx-auto max-w-lg text-center">
        <CardContent className="py-12">
          <CheckCircle2 className="mx-auto h-16 w-16 text-teal" />
          <h2 className="mt-4 text-2xl font-bold text-navy">{t("successTitle")}</h2>
          <p className="mt-2 text-navy/70">{t("successMessage")}</p>
          <Button
            variant="outline"
            className="mt-6"
            onClick={() => {
              setDone(false);
              setStep(1);
              reset();
            }}
          >
            {t("newRequest")}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="mb-8 flex gap-2">
          {steps.map((label, i) => (
            <div key={label} className="flex-1">
              <div
                className={cn(
                  "h-1.5 rounded-full transition-colors",
                  step > i + 1 ? "bg-teal" : step === i + 1 ? "bg-amber" : "bg-navy/10"
                )}
              />
              <p className="mt-1 hidden text-xs text-navy/60 sm:block">{label}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("website")} className="hidden" tabIndex={-1} autoComplete="off" />

          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-navy">{t("selectService")}</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <button
                    key={s.slug}
                    type="button"
                    onClick={() => setValue("service", s.slug)}
                    className={cn(
                      "rounded-xl border-2 p-4 text-left transition-all",
                      values.service === s.slug
                        ? "border-teal bg-teal/5"
                        : "border-navy/10 hover:border-teal/50"
                    )}
                  >
                    <p className="font-semibold text-navy">{s.title[locale]}</p>
                    <p className="mt-1 text-xs text-navy/60">{s.shortDescription[locale]}</p>
                  </button>
                ))}
              </div>
              {errors.service && <p className="text-xs text-red-600">{errors.service.message}</p>}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-navy">{t("selectDepartment")}</h2>
              <div className="grid grid-cols-4 gap-3">
                {siteConfig.departments.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setValue("department", d)}
                    className={cn(
                      "rounded-xl border-2 py-4 text-center font-bold transition-all",
                      values.department === d
                        ? "border-teal bg-teal/5 text-teal"
                        : "border-navy/10 text-navy hover:border-teal/50"
                    )}
                  >
                    {d}
                  </button>
                ))}
              </div>
              {errors.department && <p className="text-xs text-red-600">{errors.department.message}</p>}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-navy">{t("description")}</h2>
              <div>
                <Label>{t("urgency")}</Label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(
                    [
                      { value: "normal" as const, label: t("urgencyNormal") },
                      { value: "urgent" as const, label: t("urgencyUrgent") },
                      { value: "emergency" as const, label: t("urgencyEmergency") },
                    ] as const
                  ).map((u) => (
                    <button
                      key={u.value}
                      type="button"
                      onClick={() => setValue("urgency", u.value)}
                      className={cn(
                        "rounded-lg px-4 py-2 text-sm font-medium transition-all",
                        values.urgency === u.value
                          ? "bg-navy text-white"
                          : "bg-navy/5 text-navy hover:bg-navy/10"
                      )}
                    >
                      {u.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <Textarea {...register("description")} placeholder={t("description")} />
                {errors.description && <p className="mt-1 text-xs text-red-600">{errors.description.message}</p>}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-navy">{t("step4")}</h2>
              <div>
                <Label htmlFor="qname">Nom</Label>
                <Input id="qname" {...register("name")} className="mt-1.5" />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="qemail">Email</Label>
                  <Input id="qemail" type="email" {...register("email")} className="mt-1.5" />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
                </div>
                <div>
                  <Label htmlFor="qphone">Téléphone</Label>
                  <Input id="qphone" type="tel" {...register("phone")} className="mt-1.5" />
                  {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-navy">{t("step5")}</h2>
              <Card>
                <CardContent className="space-y-2 pt-6 text-sm">
                  <p><strong>Service:</strong> {values.service && tServices(values.service)}</p>
                  <p><strong>Département:</strong> {values.department}</p>
                  <p><strong>Urgence:</strong> {values.urgency}</p>
                  <p><strong>Description:</strong> {values.description}</p>
                  <p><strong>Contact:</strong> {values.name} — {values.email} — {values.phone}</p>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            {step > 1 ? (
              <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                {t("back")}
              </Button>
            ) : (
              <div />
            )}
            {step < 5 ? (
              <Button
                type="button"
                variant="cta"
                onClick={() => setStep(step + 1)}
                disabled={
                  (step === 1 && !values.service) ||
                  (step === 2 && !values.department) ||
                  (step === 3 && !values.description)
                }
              >
                {t("next")}
              </Button>
            ) : (
              <Button type="submit" variant="cta" disabled={loading}>
                {loading ? "..." : t("submit")}
              </Button>
            )}
          </div>
        </form>
      </div>

      <Card className="hidden h-fit lg:block">
        <CardHeader>
          <CardTitle className="text-lg">{t("summary")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-navy/70">
          {values.service && <p>✓ {tServices(values.service)}</p>}
          {values.department && <p>✓ Dept. {values.department}</p>}
          {values.description && <p>✓ {values.description.slice(0, 60)}...</p>}
          {values.name && <p>✓ {values.name}</p>}
        </CardContent>
      </Card>
    </div>
  );
}
