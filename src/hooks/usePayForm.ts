import { useEffect, useRef, useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { halfWidthNumber } from "../util/stringUtil";
import { isValidPay } from "../util/validationUtil";

export const usePayForm = () => {
  const { state, dispatch } = useContext(AppContext);

  const isFirstRender = useRef(true);
  const [isError, setIsError] = useState(false);

  const simulationData = state.simulationData;

  const setPay = (value: string) => {
    const pay = halfWidthNumber(value).replace(/^0+/, "");
    dispatch({ type: "setPay", value: pay });
  };

  useEffect(() => {
    // 初回レンダリング時はrefをfalseにして、return。
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const result = !isValidPay(simulationData.pay);
    setIsError(result);
  }, [simulationData.pay]);

  return { simulationData, setPay, isError };
};
