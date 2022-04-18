import { useEffect, useRef, useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { isValidEmail  } from "../util/validationUtil";

export const useEmailForm = () => {
  const { state, dispatch } = useContext(AppContext);

  const isFirstRender = useRef(true);
  const [isError, setIsError] = useState(false)

  const simulationData = state.simulationData;

  const setEmail = (value: string) => {
    dispatch({ type: 'setEmail', value });
  };

  useEffect(() => {
    // 初回レンダリング時はrefをfalseにして、return。
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const result = !isValidEmail(simulationData.email);
    setIsError(result);
  }, [simulationData.email])

  return { simulationData, setEmail, isError };
};
