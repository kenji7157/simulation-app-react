import {
  areaTypes,
  AreaTypes,
  companyTypes,
  CompanyTypes,
  planTypes,
  ISimulation,
  SelectOption,
} from "../types";

// 電力会社の選択肢を生成
export function getCompanyOptions(area: AreaTypes): SelectOption[] {
  const otherOption: SelectOption = {
    value: companyTypes.OTHER,
    label: companyTypes.OTHER,
  };
  if (area === areaTypes.TOKYO) {
    return [
      {
        value: companyTypes.TOKYO_DENRYOKU,
        label: companyTypes.TOKYO_DENRYOKU,
      },
      otherOption,
    ];
  } else if (area === areaTypes.KANSAI) {
    return [
      {
        value: companyTypes.KANSAI_DENRYOKU,
        label: companyTypes.KANSAI_DENRYOKU,
      },
      otherOption,
    ];
  } else {
    return [];
  }
}

// プランの選択肢を生成
export function getPlanOptions(
  company?: CompanyTypes
): (SelectOption & { explain: string })[] {
  if (company === companyTypes.TOKYO_DENRYOKU) {
    return [
      {
        value: planTypes.PLAN_B,
        label: planTypes.PLAN_B,
        explain: `${planTypes.PLAN_B}の説明`,
      },
      {
        value: planTypes.PLAN_C,
        label: planTypes.PLAN_C,
        explain: `${planTypes.PLAN_C}の説明`,
      },
    ];
  } else if (company === companyTypes.KANSAI_DENRYOKU) {
    return [
      {
        value: planTypes.PLAN_A,
        label: planTypes.PLAN_A,
        explain: `${planTypes.PLAN_A}の説明`,
      },
      {
        value: planTypes.PLAN_B,
        label: planTypes.PLAN_B,
        explain: `${planTypes.PLAN_B}の説明`,
      },
    ];
  } else {
    return [];
  }
}

// 契約容量の選択肢を生成
export function getAmpereOptions(simulationData: ISimulation): SelectOption[] {
  if (simulationData.company === companyTypes.TOKYO_DENRYOKU) {
    if (simulationData.plan === planTypes.PLAN_B) {
      return ["10A", "15A", "20A", "30A", "40A", "50A", "60A"].map((elm) => {
        return {
          value: elm,
          label: elm,
        };
      });
    } else if (simulationData.plan === planTypes.PLAN_C) {
      return [...Array(44)].map((_, index) => {
        return {
          value: `${index + 6}kVA`,
          label: `${index + 6}kVA`,
        };
      });
    }
  } else if (
    simulationData.company === companyTypes.KANSAI_DENRYOKU &&
    simulationData.plan === planTypes.PLAN_B
  ) {
    return [...Array(44)].map((_, index) => {
      return {
        value: `${index + 6}kVA`,
        label: `${index + 6}kVA`,
      };
    });
  }
  return [];
}
