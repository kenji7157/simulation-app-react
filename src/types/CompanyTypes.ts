export const companyTypes = {
  TOKYO_DENRYOKU: "東京電力",
  KANSAI_DENRYOKU: "関西電力",
  OTHER: "その他",
  UNSELECTED: "",
} as const;

export type CompanyTypes = typeof companyTypes[keyof typeof companyTypes];
