"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: "fr" | "en") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className={cn("flex items-center gap-1 rounded-lg border border-navy/10 p-1", className)}>
      {(["fr", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => switchLocale(l)}
          className={cn(
            "rounded-md px-2.5 py-1 text-xs font-semibold uppercase transition-colors",
            locale === l ? "bg-navy text-white" : "text-navy/60 hover:text-navy"
          )}
          aria-label={l === "fr" ? "Français" : "English"}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
