"use client";

import { useTranslations } from "next-intl";
import { Phone, FileText, MessageCircle } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";

export function MobileCTA() {
  const t = useTranslations("mobileCta");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-navy/10 bg-white p-2 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] lg:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={siteConfig.phoneHref}
          className="flex flex-col items-center gap-1 rounded-xl bg-navy py-3 text-white"
        >
          <Phone className="h-5 w-5" />
          <span className="text-xs font-semibold">{t("call")}</span>
        </a>
        <Link
          href="/devis"
          className="flex flex-col items-center gap-1 rounded-xl bg-amber py-3 text-navy"
        >
          <FileText className="h-5 w-5" />
          <span className="text-xs font-bold">{t("devis")}</span>
        </Link>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 rounded-xl bg-teal py-3 text-white"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-xs font-semibold">{t("whatsapp")}</span>
        </a>
      </div>
    </div>
  );
}
