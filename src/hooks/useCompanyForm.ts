import { useEffect, useRef, useState, useContext } from "react";
import { getCompanyOptions } from "../util/optionsUtil";
import {
  companyTypes,
  CompanyTypes,
  SelectOption,
  areaTypes,
  AreaTypes,
} from "../types";
import { AppContext } from "../context/AppContext";

function defaultCompanyType(areaType: AreaTypes) {
  if (areaType === areaTypes.TOKYO) {
    return companyTypes.TOKYO_DENRYOKU;
  } else if (areaType === areaTypes.KANSAI) {
    return companyTypes.KANSAI_DENRYOKU;
  } else {
    return companyTypes.UNSELECTED;
  }
}

export const useCompanyForm = () => {
  const { state, dispatch } = useContext(AppContext);

  const simulationData = state.simulationData;
  const [companyOptions, setCompanyOptions] = useState<SelectOption[]>([]);

  const [isOtherCompany, setIsOtherCompany] = useState(false);
  const isFirstRender = useRef(true);

  const setCompanyType = (value: string) => {
    // NOTE: asなんとかしたい
    dispatch({ type: "setCompanyType", value: value as CompanyTypes });
  };

  // NOTE: useCallBackを使ったほうが良いらしいので確認する
  useEffect(() => {
    // 初回レンダリング時はrefをfalseにして、return。
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const options = getCompanyOptions(simulationData.area);
    setCompanyOptions(options);

    const companyType = defaultCompanyType(simulationData.area);
    setCompanyType(companyType);
  }, [simulationData.area]);

  // NOTE: useCallBackを使ったほうが良いらしいので確認する
  useEffect(() => {
    // 初回レンダリング時はrefをfalseにして、return。
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setIsOtherCompany(simulationData.company === companyTypes.OTHER);
  }, [simulationData.company]);

  return { simulationData, companyOptions, isOtherCompany, setCompanyType };
};
