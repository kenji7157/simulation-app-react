import { createContext, Dispatch } from 'react';
import { State, Action} from "../types";

export const AppContext = createContext(
  {} as { state: State; dispatch: Dispatch<Action> }
);