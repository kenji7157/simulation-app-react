import React, { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { reducer } from "./reducer";
import { initialState } from "./state/initialState";
import { AppContext } from "./context/AppContext";
import SimulationPage from "./components/pages/SimulationPage";

import "./scss/App.scss";

const App: React.FC = () => {
  // TOOD: 個別でstate使えるようにしたい
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SimulationPage />}></Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
