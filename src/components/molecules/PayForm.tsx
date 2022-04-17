import React from 'react';
import BLabel from "../atoms/BLabel";
import BInput from "../atoms/BInput";
import BErrorMessage from "../atoms/BErrorMessage";
import { usePayForm } from "../../hooks/usePayForm";
import { isEnabledPayInput } from "../../util/enabledUtil";
import { isValidPay } from "../../util/validationUtil";
import '../../scss/components/molecules/PayForm.scss'

const PayForm: React.FC = () => {
  const { simulationData, setPay } = usePayForm();

  return (
    <div>
      <BLabel
        label='先月の電気代は？'
        isRequired={true} />
      <div className="m_pay-form_input">
        <BInput
          disabled={!isEnabledPayInput(simulationData)}
          inputValue={setPay}
          value={simulationData.pay}
        />
        <span className="m_pay-form_unit">円</span>
      </div>
      {/* TOOD: 表示条件見直す */}
      {!isValidPay(simulationData.pay) && <BErrorMessage message='電気代を正しく入力してください。' />}
    </div>

  );
}

export default PayForm;
