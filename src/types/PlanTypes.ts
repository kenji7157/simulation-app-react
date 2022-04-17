export const planTypes = {
  PLAN_A: "従量電灯A",
  PLAN_B: "従量電灯B",
  PLAN_C: "従量電灯C",
  UNSELECTED: "",
} as const;

export type PlanTypes = typeof planTypes[keyof typeof planTypes]; 