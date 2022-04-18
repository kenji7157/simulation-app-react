import React from 'react';
import BLabel from "../atoms/BLabel";
import BInput from "../atoms/BInput";
import BErrorMessage from "../atoms/BErrorMessage";
import { useEmailForm } from '../../hooks/useEmailForm'
import { isEnabledEmailInput } from "../../util/enabledUtil";

const ZipCodeForm: React.FC = () => {
  const { simulationData, setEmail, isError } = useEmailForm();

  return (
    <div>
      <BLabel
        isRequired={true}
      />
      <BInput
        disabled={!isEnabledEmailInput(simulationData)}
        inputValue={setEmail}
        value={simulationData.email}
      />
      {isError && <BErrorMessage message='メールアドレスを正しく入力してください。' />}
    </div>
  );
}

export default ZipCodeForm;

