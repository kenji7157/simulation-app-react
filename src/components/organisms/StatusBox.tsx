import React from 'react';
import BHeading from '../atoms/BHeading';
import CompanyForm from "../molecules/CompanyForm";
import PlanForm from "../molecules/PlanForm";
import AmpereForm from "../molecules/AmpereForm";


const ZipCodeBox: React.FC = () => {
  return (
    <div>
      <BHeading heading="電気のご使用状況について教えてください" />
      <div className="o_box-form">
        <CompanyForm />
      </div>
      <div className="o_box-form">
        <PlanForm />
      </div>
      <div className="o_box-form">
        <AmpereForm />
      </div>
    </div>
  );
}

export default ZipCodeBox;
