import type { Department } from "@/config/site";

export type Zone = {
  code: Department;
  name: { fr: string; en: string };
  cities: { fr: string[]; en: string[] };
};

export const zones: Zone[] = [
  {
    code: "75",
    name: { fr: "Paris", en: "Paris" },
    cities: {
      fr: ["Paris intra-muros"],
      en: ["Central Paris"],
    },
  },
  {
    code: "77",
    name: { fr: "Seine-et-Marne", en: "Seine-et-Marne" },
    cities: {
      fr: ["Meaux", "Melun", "Chelles", "Pontault-Combault"],
      en: ["Meaux", "Melun", "Chelles", "Pontault-Combault"],
    },
  },
  {
    code: "78",
    name: { fr: "Yvelines", en: "Yvelines" },
    cities: {
      fr: ["Versailles", "Saint-Germain-en-Laye", "Mantes-la-Jolie", "Rambouillet"],
      en: ["Versailles", "Saint-Germain-en-Laye", "Mantes-la-Jolie", "Rambouillet"],
    },
  },
  {
    code: "91",
    name: { fr: "Essonne", en: "Essonne" },
    cities: {
      fr: ["Évry-Courcouronnes", "Massy", "Corbeil-Essonnes", "Palaiseau"],
      en: ["Évry-Courcouronnes", "Massy", "Corbeil-Essonnes", "Palaiseau"],
    },
  },
  {
    code: "92",
    name: { fr: "Hauts-de-Seine", en: "Hauts-de-Seine" },
    cities: {
      fr: ["Nanterre", "Boulogne-Billancourt", "Colombes", "Antony"],
      en: ["Nanterre", "Boulogne-Billancourt", "Colombes", "Antony"],
    },
  },
  {
    code: "93",
    name: { fr: "Seine-Saint-Denis", en: "Seine-Saint-Denis" },
    cities: {
      fr: ["Aulnay-sous-Bois", "Saint-Denis", "Montreuil", "Bobigny"],
      en: ["Aulnay-sous-Bois", "Saint-Denis", "Montreuil", "Bobigny"],
    },
  },
  {
    code: "94",
    name: { fr: "Val-de-Marne", en: "Val-de-Marne" },
    cities: {
      fr: ["Créteil", "Vitry-sur-Seine", "Champigny-sur-Marne", "Vincennes"],
      en: ["Créteil", "Vitry-sur-Seine", "Champigny-sur-Marne", "Vincennes"],
    },
  },
  {
    code: "95",
    name: { fr: "Val-d'Oise", en: "Val-d'Oise" },
    cities: {
      fr: ["Cergy", "Argenteuil", "Sarcelles", "Pontoise"],
      en: ["Cergy", "Argenteuil", "Sarcelles", "Pontoise"],
    },
  },
];

export function getZoneByCode(code: string) {
  return zones.find((z) => z.code === code);
}
