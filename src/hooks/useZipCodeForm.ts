import { useState, useContext } from "react";
import { areaTypes } from "../types";
import { useUpdateEffect } from "./useUpdateEffect";
import { AppContext } from "../context/AppContext";
import { halfWidthNumber } from "../util/stringUtil";

export const useZipCodeForm = () => {
  const { state, dispatch } = useContext(AppContext);

  const simulationData = state.simulationData;
  const setFirstZipCode = (value: string) => {
    if (value.length > 3) {
      return;
    }
    const convertedValue = halfWidthNumber(value);
    dispatch({ type: "setFirestZipCode", value: convertedValue });
  };

  const setSecondZipCode = (value: string) => {
    if (value.length > 4) {
      return;
    }
    const convertedValue = halfWidthNumber(value);
    dispatch({ type: "setSecondZipCode", value: convertedValue });
  };

  const [isOtherAreaType, setIsOtherAreaType] = useState(false);

  // NOTE: useCallBackを使ったほうが良いらしいので確認する
  useUpdateEffect(() => {
    setIsOtherAreaType(simulationData.area === areaTypes.OTHER);
  }, [simulationData.area]);

  return { simulationData, setFirstZipCode, setSecondZipCode, isOtherAreaType };
};
