import { useState, useContext } from "react";
import { getPlanOptions } from "../util/optionsUtil";
import { SelectOption, PlanTypes, planTypes } from "../types";
import { useUpdateEffect } from "./useUpdateEffect";
import { AppContext } from "../context/AppContext";

export const usePlanForm = () => {
  const { state, dispatch } = useContext(AppContext);

  const simulationData = state.simulationData;
  const [planOptions, setPlanOptions] = useState<
    (SelectOption<PlanTypes> & { explain: string })[]
  >([]);

  const [explain, setExplain] = useState("");

  const setPlanType = (value: PlanTypes) => {
    dispatch({ type: "setPlanType", value });
    const target = planOptions.find((planOption) => {
      return planOption.value === value;
    });
    if (target) {
      setExplain(target.explain);
    }
  };

  // NOTE: useCallBackを使ったほうが良いらしいので確認する
  useUpdateEffect(() => {
    const options = getPlanOptions(simulationData.company);
    setPlanOptions(options);
    setPlanType(
      options.length > 0 && options[0].value
        ? options[0].value
        : planTypes.UNSELECTED
    );
    setExplain(
      options.length > 0 && options[0].explain ? options[0].explain : ""
    );
  }, [simulationData.company]);

  return { simulationData, planOptions, setPlanType, explain };
};
