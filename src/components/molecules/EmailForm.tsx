import React from 'react';
import BLabel from "../atoms/BLabel";
import BInput from "../atoms/BInput";
import BErrorMessage from "../atoms/BErrorMessage";
import { useEmailForm } from '../../hooks/useEmailForm'
import { isEnabledEmailInput } from "../../util/enabledUtil";
import { isValidEmail  } from "../../util/validationUtil";

const ZipCodeForm: React.FC = () => {
  const { simulationData, setEmail } = useEmailForm();

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
      {!isValidEmail(simulationData.email) && <BErrorMessage message='メールアドレスを正しく入力してください。' />}
    </div>
  );
}

export default ZipCodeForm;

