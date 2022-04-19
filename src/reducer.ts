import { areaCheck } from "./server/api";
import { State, Action } from "./types";

// TODO: stateが増えてきてもメンテナブルな作りにする

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setFirestZipCode": {
      const area = areaCheck(action.value, state.simulationData.secondZipCode);
      return {
        ...state,
        simulationData: {
          ...state.simulationData,
          firstZipCode: action.value,
          area,
        },
      };
    }

    case "setSecondZipCode": {
      const area = areaCheck(state.simulationData.firstZipCode, action.value);
      return {
        ...state,
        simulationData: {
          ...state.simulationData,
          secondZipCode: action.value,
          area,
        },
      };
    }

    case "setCompanyType": {
      return {
        ...state,
        simulationData: {
          ...state.simulationData,
          company: action.value,
        },
      };
    }

    case "setPlanType": {
      return {
        ...state,
        simulationData: {
          ...state.simulationData,
          plan: action.value,
        },
      };
    }

    case "setAmpere": {
      return {
        ...state,
        simulationData: {
          ...state.simulationData,
          ampere: action.value,
        },
      };
    }

    case "setPay": {
      return {
        ...state,
        simulationData: {
          ...state.simulationData,
          pay: action.value,
        },
      };
    }

    case "setEmail": {
      return {
        ...state,
        simulationData: {
          ...state.simulationData,
          email: action.value,
        },
      };
    }

    default: {
      return state;
    }
  }
};
