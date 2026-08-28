import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("contact");
  return { title: t("title"), description: t("subtitle") };
}

export default async function ContactPage() {
  const t = await getTranslations("contact");

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-navy lg:text-4xl">{t("title")}</h1>
          <p className="mt-3 text-navy/70">{t("subtitle")}</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <Card>
            <CardContent className="p-8">
              <ContactForm />
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="space-y-4 p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-teal" />
                  <div>
                    <p className="font-semibold text-navy">{t("address")}</p>
                    <p className="text-sm text-navy/70">
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.zip} {siteConfig.address.city}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-teal" />
                  <a href={siteConfig.phoneHref} className="font-semibold text-navy hover:text-teal">
                    {siteConfig.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-teal" />
                  <a href={`mailto:${siteConfig.email}`} className="text-navy hover:text-teal">
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 text-teal" />
                  <div>
                    <p className="font-semibold text-navy">{t("hours")}</p>
                    <p className="text-sm text-navy/70">{t("hoursValue")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="overflow-hidden rounded-2xl border border-navy/10">
              <iframe
                title="OIB Assainissement location"
                src="https://maps.google.com/maps?q=7+Place+de+l'H%C3%B4tel+de+Ville,+93600+Aulnay-sous-Bois&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
