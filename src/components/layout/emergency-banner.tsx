"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function EmergencyBanner() {
  const t = useTranslations("emergency");
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-amber px-4 py-2 text-center text-sm font-medium text-navy">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2">
        <Phone className="h-4 w-4" />
        <span>
          {t("text")}{" "}
          <a href={siteConfig.phoneHref} className="font-bold underline">
            {siteConfig.phone}
          </a>
        </span>
        <button
          onClick={() => setVisible(false)}
          className="ml-4 rounded p-1 hover:bg-navy/10"
          aria-label={t("dismiss")}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
