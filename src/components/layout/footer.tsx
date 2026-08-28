import { getTranslations, getLocale } from "next-intl/server";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";
import { services } from "@/content/services";

export async function Footer() {
  const t = await getTranslations("footer");
  const locale = (await getLocale()) as "fr" | "en";

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold">OIB Assainissement</h3>
            <p className="text-sm text-white/70">{t("tagline")}</p>
            <p className="mt-4 text-xs text-white/50">{siteConfig.insurance}</p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">{t("services")}</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/70 hover:text-teal-light transition-colors"
                  >
                    {s.title[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">{t("contact")}</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-light" />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.zip} {siteConfig.address.city}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-teal-light" />
                <a href={siteConfig.phoneHref} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-teal-light" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} OIB Assainissement — {t("rights")}
          </p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-white">
              {t("legal")}
            </Link>
            <Link href="/confidentialite" className="hover:text-white">
              {t("privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
