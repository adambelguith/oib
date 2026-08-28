export type FAQItem = {
  id: string;
  question: { fr: string; en: string };
  answer: { fr: string; en: string };
};

export const faqItems: FAQItem[] = [
  {
    id: "raccordement-delai",
    question: {
      fr: "Quel est le délai légal pour se raccorder au réseau ?",
      en: "What is the legal deadline to connect to the sewer network?",
    },
    answer: {
      fr: "2 ans après la mise en service du réseau public (CSP L1331-1).",
      en: "2 years after the public network becomes operational (CSP L1331-1).",
    },
  },
  {
    id: "diagnostic-spanc",
    question: {
      fr: "Vente d'un bien : diagnostic SPANC ?",
      en: "Property sale: SPANC diagnostic?",
    },
    answer: {
      fr: "Le diagnostic doit dater de moins de 3 ans au jour de la signature (Service-public).",
      en: "The diagnostic must be less than 3 years old on the signing date (Service-public).",
    },
  },
  {
    id: "voirie",
    question: {
      fr: "Travaux en voirie ?",
      en: "Road works required?",
    },
    answer: {
      fr: "DT/DICT + permission de voirie Cerfa 14023*01 sont nécessaires pour les travaux en domaine public.",
      en: "DT/DICT and road permit Cerfa 14023*01 are required for public domain works.",
    },
  },
  {
    id: "inspection-camera",
    question: {
      fr: "Inspection caméra : quelle norme ?",
      en: "Camera inspection: which standard?",
    },
    answer: {
      fr: "NF EN 13508-2 (+A1) — codification officielle des défauts de canalisations.",
      en: "NF EN 13508-2 (+A1) — official codification of pipe defects.",
    },
  },
  {
    id: "devis-gratuit",
    question: {
      fr: "Le devis est-il gratuit ?",
      en: "Is the quote free?",
    },
    answer: {
      fr: "Oui, tous nos devis sont gratuits et sans engagement. Le prix est annoncé avant toute intervention.",
      en: "Yes, all our quotes are free and without obligation. Price is confirmed before any work begins.",
    },
  },
  {
    id: "zones",
    question: {
      fr: "Dans quels départements intervenez-vous ?",
      en: "Which departments do you cover?",
    },
    answer: {
      fr: "Nous intervenons dans les 8 départements d'Île-de-France : 75, 77, 78, 91, 92, 93, 94 et 95.",
      en: "We operate across all 8 Île-de-France departments: 75, 77, 78, 91, 92, 93, 94 and 95.",
    },
  },
];
