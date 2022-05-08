import { useState, useContext } from "react";
import { useUpdateEffect } from "./useUpdateEffect";
import { AppContext } from "../context/AppContext";
import { halfWidthNumber } from "../util/stringUtil";
import { isValidPay } from "../util/validationUtil";

export const usePayForm = () => {
  const { state, dispatch } = useContext(AppContext);

  const [isError, setIsError] = useState(false);

  const simulationData = state.simulationData;

  const setPay = (value: string) => {
    const pay = halfWidthNumber(value).replace(/^0+/, "");
    dispatch({ type: "setPay", value: pay });
  };

  useUpdateEffect(() => {
    const result = !isValidPay(simulationData.pay);
    setIsError(result);
  }, [simulationData.pay]);

  return { simulationData, setPay, isError };
};
