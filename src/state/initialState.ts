import { areaTypes, companyTypes, planTypes, State } from "../types";

export const initialState: State = {
  // NOTE: グローバルに持ちたいStateを以下に定義
  simulationData: {
    firstZipCode: "",
    secondZipCode: "",
    area: areaTypes.UNSELECTED,
    company: companyTypes.UNSELECTED,
    plan: planTypes.UNSELECTED,
    ampere: "",
    pay: "",
    email: "",
  },
};
