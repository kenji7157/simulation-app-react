import React from "react";
import BLabel from "../atoms/BLabel";
import BZipCodeInput from "../atoms/BZipCodeInput";
import BErrorMessage from "../atoms/BErrorMessage";
import { useZipCodeForm } from "../../hooks/useZipCodeForm";

const ZipCodeForm: React.FC = () => {
  const { simulationData, setFirstZipCode, setSecondZipCode, isOtherAreaType } =
    useZipCodeForm();

  return (
    <div>
      <BLabel label="電気を使用する場所の郵便番号" isRequired={true} />
      <BZipCodeInput
        firstZipCode={simulationData.firstZipCode}
        secondZipCode={simulationData.secondZipCode}
        setFirstZipCode={setFirstZipCode}
        setSecondZipCode={setSecondZipCode}
      />
      {isOtherAreaType && (
        <BErrorMessage message="サービスエリア対象外です。" />
      )}
    </div>
  );
};

export default ZipCodeForm;
