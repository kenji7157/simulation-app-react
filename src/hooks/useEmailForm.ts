import { useEffect, useRef, useState, useContext } from 'react';
import { getCompanyOptions } from "../util/optionsUtil";
import { companyTypes, CompanyTypes, SelectOption, areaTypes, AreaTypes } from "../types";
import { AppContext } from '../context/AppContext';
import { halfWidthNumber } from "../util/stringUtil";

export const useEmailForm = () => {
  const { state, dispatch } = useContext(AppContext);

  const simulationData = state.simulationData;

  const setEmail = (value: string) => {
    dispatch({ type: 'setEmail', value });
  };

  return { simulationData, setEmail };
};
