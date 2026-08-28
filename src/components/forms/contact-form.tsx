"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { submitContactForm } from "@/actions/contact";
import { services } from "@/content/services";

export function ContactForm() {
  const t = useTranslations("contact");
  const tServices = useTranslations("serviceOptions");
  const locale = useLocale() as "fr" | "en";
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { service: "", website: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    const result = await submitContactForm(data, locale);
    setLoading(false);

    if (result.success) {
      toast.success(t("success"));
      reset();
    } else {
      toast.error(t("error"));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input type="text" {...register("website")} className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <Label htmlFor="name">{t("name")}</Label>
        <Input id="name" {...register("name")} className="mt-1.5" />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">{t("email")}</Label>
          <Input id="email" type="email" {...register("email")} className="mt-1.5" />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <Label htmlFor="phone">{t("phone")}</Label>
          <Input id="phone" type="tel" {...register("phone")} className="mt-1.5" />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <Label>{t("service")}</Label>
        <Select onValueChange={(v) => setValue("service", v)}>
          <SelectTrigger className="mt-1.5">
            <SelectValue placeholder={t("service")} />
          </SelectTrigger>
          <SelectContent>
            {services.map((s) => (
              <SelectItem key={s.slug} value={s.slug}>
                {tServices(s.slug)}
              </SelectItem>
            ))}
            <SelectItem value="other">{tServices("other")}</SelectItem>
          </SelectContent>
        </Select>
        {errors.service && <p className="mt-1 text-xs text-red-600">{errors.service.message}</p>}
      </div>

      <div>
        <Label htmlFor="message">{t("message")}</Label>
        <Textarea id="message" {...register("message")} className="mt-1.5" />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>

      <Button type="submit" variant="cta" size="lg" className="w-full" disabled={loading}>
        {loading ? "..." : t("submit")}
      </Button>
    </form>
  );
}
