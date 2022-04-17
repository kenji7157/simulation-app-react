import { useContext } from 'react';

import { AppContext } from '../context/AppContext';
import { sendSimulationData as sendSimulationDataFunc } from "../server/api";

export const useTheFooter = () => {
  const { state } = useContext(AppContext);

  const simulationData = state.simulationData;
  const sendSimulationData = ()=>{
    sendSimulationDataFunc(simulationData);
  }

  return { simulationData, sendSimulationData };
};
