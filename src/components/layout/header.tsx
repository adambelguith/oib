"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X, Phone, Droplets } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/services", label: t("services") },
    { href: "/zones", label: t("zones") },
    { href: "/realisations", label: t("realisations") },
    { href: "/faq", label: t("faq") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal text-white">
            <Droplets className="h-5 w-5" />
          </div>
          <div>
            <span className="block text-lg font-bold text-navy leading-tight">OIB</span>
            <span className="block text-xs text-navy/60 leading-tight">Assainissement</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/80 transition-colors hover:text-teal"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LocaleSwitcher />
          <Link href="/diagnostic" className="text-sm font-medium text-teal hover:underline">
            {t("diagnostic")}
          </Link>
          <Button variant="cta" asChild>
            <Link href="/devis">{t("devis")}</Link>
          </Button>
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-1.5 text-sm font-bold text-navy"
          >
            <Phone className="h-4 w-4 text-teal" />
            {siteConfig.phone}
          </a>
        </div>

        <button
          className="lg:hidden rounded-lg p-2 text-navy"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden border-t border-navy/10 bg-white px-4 py-4",
          open ? "block" : "hidden"
        )}
      >
        <nav className="flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 text-sm font-medium text-navy"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/diagnostic" className="py-2 text-sm font-medium text-teal" onClick={() => setOpen(false)}>
            {t("diagnostic")}
          </Link>
          <LocaleSwitcher className="w-fit" />
          <Button variant="cta" asChild className="w-full">
            <Link href="/devis" onClick={() => setOpen(false)}>{t("devis")}</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
