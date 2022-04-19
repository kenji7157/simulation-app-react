export const areaTypes = {
  TOKYO: "東京エリア",
  KANSAI: "関西エリア",
  OTHER: "対象外エリア",
  UNSELECTED: "",
} as const;

export type AreaTypes = typeof areaTypes[keyof typeof areaTypes];
