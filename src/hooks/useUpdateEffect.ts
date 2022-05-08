import { useEffect, useRef } from "react";

export const useUpdateEffect = (func: () => void, dependencyList: unknown[]) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) {
      func();
    } else {
      isFirstRender.current = false;
    }
  }, dependencyList);
};
