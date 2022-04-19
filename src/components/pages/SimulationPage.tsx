import React from "react";
import TheHeader from "../parts/TheHeader";
import ZipCodeBox from "../organisms/ZipCodeBox";
import StatusBox from "../organisms/StatusBox";
import PayBox from "../organisms/PayBox";
import EmailBox from "../organisms/EmailBox";
import TheFooter from "../parts/TheFooter";

import "../../scss/pages/SimulationPage.scss";

const SimulationPage: React.FC = () => {
  return (
    <div>
      <TheHeader />
      <div className="simulation-box">
        <ZipCodeBox />
      </div>
      <div className="simulation-box">
        <StatusBox />
      </div>
      <div className="simulation-box">
        <PayBox />
      </div>
      <div className="simulation-box">
        <EmailBox />
      </div>
      <TheFooter />
    </div>
  );
};

export default SimulationPage;
