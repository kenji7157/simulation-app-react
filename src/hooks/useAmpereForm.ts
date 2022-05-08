import { useState, useContext } from "react";
import { getAmpereOptions } from "../util/optionsUtil";
import { SelectOption } from "../types";
import { useUpdateEffect } from "./useUpdateEffect";
import { AppContext } from "../context/AppContext";

export const useAmpereForm = () => {
  const { state, dispatch } = useContext(AppContext);

  const simulationData = state.simulationData;
  const [ampereOption, setAmpereOption] = useState<SelectOption<string>[]>([]);

  const setAmpere = (value: string) => {
    dispatch({ type: "setAmpere", value });
  };

  // NOTE: useCallBackを使ったほうが良いらしいので確認する
  useUpdateEffect(() => {
    const options = getAmpereOptions(simulationData);
    setAmpereOption(options);
    setAmpere(options.length > 0 && options[0].value ? options[0].value : "");
  }, [simulationData.plan]);

  return { simulationData, ampereOption, setAmpere };
};
