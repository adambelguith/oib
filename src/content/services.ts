export type LocalizedString = { fr: string; en: string };

export type Service = {
  slug: string;
  icon: string;
  title: LocalizedString;
  shortDescription: LocalizedString;
  description: LocalizedString;
  features: { fr: string[]; en: string[] };
  ctaLabel: LocalizedString;
};

export const services: Service[] = [
  {
    slug: "mise-en-conformite",
    icon: "ShieldCheck",
    title: {
      fr: "Mise en conformité",
      en: "Compliance upgrade",
    },
    shortDescription: {
      fr: "Diagnostic complet et remise aux normes SPANC de votre réseau d'assainissement.",
      en: "Full diagnostic and SPANC compliance for your sanitation network.",
    },
    description: {
      fr: "Nous réalisons un diagnostic complet de votre installation, séparons les eaux usées et pluviales, et mettons votre réseau en conformité avec les exigences SPANC pour une solution durable et sécurisée.",
      en: "We perform a complete diagnostic of your installation, separate wastewater and stormwater, and bring your network into SPANC compliance for a durable, secure solution.",
    },
    features: {
      fr: [
        "Diagnostic complet sur site",
        "Séparation EU / EP",
        "Dossier SPANC",
        "Certificat de conformité",
      ],
      en: [
        "On-site full diagnostic",
        "Wastewater / stormwater separation",
        "SPANC documentation",
        "Compliance certificate",
      ],
    },
    ctaLabel: {
      fr: "Devis mise en conformité",
      en: "Get compliance quote",
    },
  },
  {
    slug: "raccordement-ep-eu",
    icon: "GitBranch",
    title: {
      fr: "Raccordement EP / EU",
      en: "Storm & wastewater connection",
    },
    shortDescription: {
      fr: "Raccordement au tout-à-l'égout avec tranchées, canalisations et regards.",
      en: "Connection to mains sewer with trenches, pipes and inspection chambers.",
    },
    description: {
      fr: "Création de tranchées, pose de canalisations et regards, raccordement au réseau public pour habitations et locaux professionnels en Île-de-France.",
      en: "Trenching, pipe laying and chamber installation, connecting your property to the public sewer network across Île-de-France.",
    },
    features: {
      fr: [
        "Étude de faisabilité",
        "Tranchées et canalisations",
        "Raccordement tout-à-l'égout",
        "Gestion DT/DICT",
      ],
      en: [
        "Feasibility study",
        "Trenches and piping",
        "Mains sewer connection",
        "DT/DICT permit handling",
      ],
    },
    ctaLabel: {
      fr: "Devis raccordement",
      en: "Get connection quote",
    },
  },
  {
    slug: "fosses-microstations",
    icon: "Droplets",
    title: {
      fr: "Fosses & microstations",
      en: "Septic tanks & micro-stations",
    },
    shortDescription: {
      fr: "Installation, remplacement et entretien de dispositifs d'assainissement non collectif.",
      en: "Installation, replacement and maintenance of non-mains sanitation systems.",
    },
    description: {
      fr: "Installation, remplacement, entretien et mise aux normes de fosses septiques et microstations d'épuration pour particuliers et professionnels.",
      en: "Installation, replacement, maintenance and compliance upgrades for septic tanks and micro-treatment plants for homes and businesses.",
    },
    features: {
      fr: [
        "Fosses toutes eaux",
        "Microstations d'épuration",
        "Entretien régulier",
        "Conformité SPANC",
      ],
      en: [
        "All-waste septic tanks",
        "Micro-treatment plants",
        "Regular maintenance",
        "SPANC compliance",
      ],
    },
    ctaLabel: {
      fr: "Devis fosse / microstation",
      en: "Get septic quote",
    },
  },
  {
    slug: "pompes-relevage",
    icon: "ArrowUpFromLine",
    title: {
      fr: "Pompes de relevage",
      en: "Lift pumps",
    },
    shortDescription: {
      fr: "Fourniture, installation, entretien et dépannage de pompes de relevage.",
      en: "Supply, installation, maintenance and repair of lift pumps.",
    },
    description: {
      fr: "Nous fournissons, installons et entretenons des pompes et stations de relevage adaptées à votre réseau, avec intervention rapide en cas de panne.",
      en: "We supply, install and maintain lift pumps and pumping stations tailored to your network, with rapid emergency response.",
    },
    features: {
      fr: [
        "Pompes et stations",
        "Installation sur mesure",
        "Contrat d'entretien",
        "Dépannage 7j/7",
      ],
      en: [
        "Pumps and stations",
        "Custom installation",
        "Maintenance contracts",
        "7-day emergency repair",
      ],
    },
    ctaLabel: {
      fr: "Devis pompe de relevage",
      en: "Get pump quote",
    },
  },
  {
    slug: "curage-inspection",
    icon: "ScanSearch",
    title: {
      fr: "Curage & inspection caméra",
      en: "Pipe cleaning & camera inspection",
    },
    shortDescription: {
      fr: "Nettoyage haute pression, débouchage et inspection caméra NF EN 13508-2.",
      en: "High-pressure cleaning, unblocking and NF EN 13508-2 camera inspection.",
    },
    description: {
      fr: "Curage haute pression, débouchage complet et inspection caméra pour contrôler l'état de vos canalisations en profondeur, avec rapport codifié des défauts.",
      en: "High-pressure cleaning, full unblocking and camera inspection to assess pipe condition in depth, with codified defect reporting.",
    },
    features: {
      fr: [
        "Curage haute pression",
        "Débouchage complet",
        "Inspection caméra",
        "Rapport NF EN 13508-2",
      ],
      en: [
        "High-pressure cleaning",
        "Full unblocking",
        "Camera inspection",
        "NF EN 13508-2 report",
      ],
    },
    ctaLabel: {
      fr: "Devis curage / inspection",
      en: "Get cleaning quote",
    },
  },
  {
    slug: "bacs-graisses",
    icon: "FlaskConical",
    title: {
      fr: "Bacs à graisses & hydrocarbures",
      en: "Grease traps & oil separators",
    },
    shortDescription: {
      fr: "Pose, vidange et nettoyage pour particuliers et établissements professionnels.",
      en: "Installation, emptying and cleaning for homes and commercial premises.",
    },
    description: {
      fr: "Pose, vidange et nettoyage de bacs à graisses et séparateurs à hydrocarbures pour restaurateurs, commerces et particuliers.",
      en: "Installation, emptying and cleaning of grease traps and oil separators for restaurants, businesses and homeowners.",
    },
    features: {
      fr: [
        "Bacs à graisses",
        "Séparateurs hydrocarbures",
        "Vidange et entretien",
        "Conformité réglementaire",
      ],
      en: [
        "Grease traps",
        "Oil separators",
        "Emptying and maintenance",
        "Regulatory compliance",
      ],
    },
    ctaLabel: {
      fr: "Devis bac à graisses",
      en: "Get grease trap quote",
    },
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
