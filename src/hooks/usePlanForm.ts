import { useEffect, useRef, useState, useContext } from "react";
import { getPlanOptions } from "../util/optionsUtil";
import { SelectOption, PlanTypes, planTypes } from "../types";
import { AppContext } from "../context/AppContext";

export const usePlanForm = () => {
  const { state, dispatch } = useContext(AppContext);

  const simulationData = state.simulationData;
  const [planOptions, setPlanOptions] = useState<
    (SelectOption & { explain: string })[]
  >([]);

  const [explain, setExplain] = useState("");
  const isFirstRender = useRef(true);

  const setPlanType = (value: string) => {
    // NOTE: asなんとかしたい
    dispatch({ type: "setPlanType", value: value as PlanTypes });
    const target = planOptions.find((planOption) => {
      return planOption.value === value;
    });
    if (target) {
      setExplain(target.explain);
    }
  };

  // NOTE: useCallBackを使ったほうが良いらしいので確認する
  useEffect(() => {
    // 初回レンダリング時はrefをfalseにして、return。
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
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
