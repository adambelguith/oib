import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("legal");
  return { title: t("privacyTitle") };
}

export default async function ConfidentialitePage() {
  const t = await getTranslations("legal");

  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <h1 className="text-3xl font-bold text-navy">{t("privacyTitle")}</h1>
        <div className="mt-8 space-y-4 text-navy/80">
          <p>
            OIB Assainissement s&apos;engage à protéger vos données personnelles conformément au RGPD.
            Les informations collectées via nos formulaires (nom, email, téléphone, description du besoin)
            sont utilisées uniquement pour répondre à vos demandes de devis ou d&apos;intervention.
          </p>
          <p>
            Vos données ne sont pas vendues à des tiers. Vous pouvez demander leur suppression
            en contactant contact@oib-assainissement.fr.
          </p>
          <p>
            Des cookies peuvent être utilisés pour améliorer votre expérience de navigation.
            Vous pouvez les désactiver dans les paramètres de votre navigateur.
          </p>
        </div>
      </div>
    </section>
  );
}
