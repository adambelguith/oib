export const siteConfig = {
  name: "OIB Assainissement",
  url: "https://oibassainissement.fr",
  phone: "01 89 48 01 14",
  phoneHref: "tel:+33189480114",
  whatsapp: "33189480114",
  email: "contact@oib-assainissement.fr",
  address: {
    street: "7 Place de l'Hôtel de Ville",
    city: "Aulnay-sous-Bois",
    zip: "93600",
    country: "FR",
  },
  insurance: "Décennale QBE n°008527523390",
  departments: ["75", "77", "78", "91", "92", "93", "94", "95"] as const,
  googleRating: 5,
  googleReviewCount: 10,
} as const;

export type Department = (typeof siteConfig.departments)[number];
