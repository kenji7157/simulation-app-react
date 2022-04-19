import { useEffect, useRef, useState, useContext } from "react";
import { getAmpereOptions } from "../util/optionsUtil";
import { SelectOption } from "../types";
import { AppContext } from "../context/AppContext";

export const useAmpereForm = () => {
  const { state, dispatch } = useContext(AppContext);

  const simulationData = state.simulationData;
  const [ampereOption, setAmpereOption] = useState<SelectOption[]>([]);

  const isFirstRender = useRef(true);

  const setAmpere = (value: string) => {
    dispatch({ type: "setAmpere", value });
  };

  // NOTE: useCallBackを使ったほうが良いらしいので確認する
  useEffect(() => {
    // 初回レンダリング時はrefをfalseにして、return。
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const options = getAmpereOptions(simulationData);
    setAmpereOption(options);
    setAmpere(options.length > 0 && options[0].value ? options[0].value : "");
  }, [simulationData.plan]);

  return { simulationData, ampereOption, setAmpere };
};
