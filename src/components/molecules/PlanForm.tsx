import React from 'react';
import BLabel from "../atoms/BLabel";
import BSelect from "../atoms/BSelect";
import BInfoMessage from "../atoms/BInfoMessage";
import { usePlanForm } from "../../hooks/usePlanForm";


const PlanForm: React.FC = () => {
  const { simulationData, planOptions, setPlanType, explain  } =  usePlanForm();

  return (
    <div>
    <BLabel
      label='プラン'
      isRequired={true} />
    <BSelect
      value={simulationData.plan}
      disabled={planOptions.length === 0}
      options={planOptions}
      changeSelect={setPlanType}
     />
      {!!explain && <BInfoMessage message={explain} />}
  </div >
  );
}

export default PlanForm;
