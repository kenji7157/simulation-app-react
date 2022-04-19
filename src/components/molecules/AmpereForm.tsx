import React from "react";
import BLabel from "../atoms/BLabel";
import BSelect from "../atoms/BSelect";
import { useAmpereForm } from "../../hooks/useAmpereForm";

const AmpereForm: React.FC = () => {
  const { simulationData, ampereOption, setAmpere } = useAmpereForm();

  return (
    <div>
      <BLabel label="契約容量" isRequired={true} />
      <BSelect
        value={simulationData.ampere}
        disabled={ampereOption.length === 0}
        options={ampereOption}
        changeSelect={setAmpere}
      />
    </div>
  );
};

export default AmpereForm;
