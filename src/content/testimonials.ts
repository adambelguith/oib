export type Testimonial = {
  name: string;
  text: { fr: string; en: string };
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Pascale Guisguillert",
    rating: 5,
    text: {
      fr: "OIB assainissement est une entreprise que je recommande fortement. Travail sérieux, intervenants qui prennent le temps d'analyser le problème, intervention rapide, respect du devis.",
      en: "I highly recommend OIB Assainissement. Serious work, technicians who take time to analyze the problem, fast intervention, quote respected.",
    },
  },
  {
    name: "Bruno Dobbelaere",
    rating: 5,
    text: {
      fr: "Travaux de mise en conformité d'une fosse septique. Délais tenus et travaux de qualité. Personnels sympathiques et efficaces.",
      en: "Septic tank compliance work. Deadlines met and quality work. Friendly and efficient staff.",
    },
  },
  {
    name: "Sandra Dahmen",
    rating: 5,
    text: {
      fr: "Vente bloquée pour non-conformité d'assainissement. Travaux réalisés par OIB et conformité validée rapidement par le SPANC. Très professionnel.",
      en: "Sale blocked due to sanitation non-compliance. OIB completed the work and SPANC validated compliance quickly. Very professional.",
    },
  },
  {
    name: "Véronique Reglet",
    rating: 5,
    text: {
      fr: "Entreprise sérieuse et de confiance. Respect des délais, des tarifs et de bons conseils. Chantier bien exécuté.",
      en: "Serious and trustworthy company. Deadlines and prices respected, good advice. Well-executed project.",
    },
  },
  {
    name: "Philippe Tassin De Montaigu",
    rating: 5,
    text: {
      fr: "Travaux de mise en conformité de l'évacuation suite à demande de l'urbanisme. Personnel très aimable, travaux rapides et efficaces.",
      en: "Evacuation compliance work following planning authority request. Very friendly staff, fast and efficient work.",
    },
  },
];

export type Realisation = {
  id: string;
  title: { fr: string; en: string };
  location: string;
  service: string;
  description: { fr: string; en: string };
};

export const realisations: Realisation[] = [
  {
    id: "1",
    title: { fr: "Mise en conformité fosse septique", en: "Septic tank compliance" },
    location: "Yvelines (78)",
    service: "mise-en-conformite",
    description: {
      fr: "Séparation EU/EP et validation SPANC pour déblocage de vente immobilière.",
      en: "Wastewater/stormwater separation and SPANC validation to unblock property sale.",
    },
  },
  {
    id: "2",
    title: { fr: "Raccordement tout-à-l'égout", en: "Mains sewer connection" },
    location: "Seine-et-Marne (77)",
    service: "raccordement-ep-eu",
    description: {
      fr: "Tranchées, pose de canalisations et raccordement au réseau public.",
      en: "Trenches, pipe laying and connection to public sewer network.",
    },
  },
  {
    id: "3",
    title: { fr: "Station de relevage", en: "Lift pump station" },
    location: "Essonne (91)",
    service: "pompes-relevage",
    description: {
      fr: "Installation complète d'une pompe de relevage pour local commercial.",
      en: "Full lift pump installation for a commercial premises.",
    },
  },
  {
    id: "4",
    title: { fr: "Curage et inspection caméra", en: "Pipe cleaning & camera inspection" },
    location: "Val-de-Marne (94)",
    service: "curage-inspection",
    description: {
      fr: "Débouchage haute pression et rapport d'inspection caméra NF EN 13508-2.",
      en: "High-pressure unblocking and NF EN 13508-2 camera inspection report.",
    },
  },
  {
    id: "5",
    title: { fr: "Bac à graisses restaurant", en: "Restaurant grease trap" },
    location: "Hauts-de-Seine (92)",
    service: "bacs-graisses",
    description: {
      fr: "Pose et mise en service d'un bac à graisses pour établissement de restauration.",
      en: "Installation and commissioning of grease trap for restaurant.",
    },
  },
  {
    id: "6",
    title: { fr: "Microstation d'épuration", en: "Micro-treatment plant" },
    location: "Val-d'Oise (95)",
    service: "fosses-microstations",
    description: {
      fr: "Remplacement fosse ancienne par microstation aux normes.",
      en: "Replacement of old septic tank with compliant micro-treatment plant.",
    },
  },
];
