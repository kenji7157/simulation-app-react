import { useEffect, useRef, useState, useContext } from 'react';
import { getCompanyOptions } from "../util/optionsUtil";
import { companyTypes, CompanyTypes, SelectOption, areaTypes, AreaTypes } from "../types";
import { AppContext } from '../context/AppContext';
import { halfWidthNumber } from "../util/stringUtil";

export const usePayForm = () => {
  const { state, dispatch } = useContext(AppContext);

  const simulationData = state.simulationData;

  const setPay = (value: string) => {
    const pay = halfWidthNumber(value).replace(/^0+/, "");
    dispatch({ type: 'setPay', value: pay });
  };

  return { simulationData, setPay };
};
