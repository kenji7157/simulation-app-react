import { useState, useContext } from "react";
import { useUpdateEffect } from "./useUpdateEffect";
import { AppContext } from "../context/AppContext";
import { isValidEmail } from "../util/validationUtil";

export const useEmailForm = () => {
  const { state, dispatch } = useContext(AppContext);

  const [isError, setIsError] = useState(false);

  const simulationData = state.simulationData;

  const setEmail = (value: string) => {
    dispatch({ type: "setEmail", value });
  };

  useUpdateEffect(() => {
    const result = !isValidEmail(simulationData.email);
    setIsError(result);
  }, [simulationData.email]);

  return { simulationData, setEmail, isError };
};
