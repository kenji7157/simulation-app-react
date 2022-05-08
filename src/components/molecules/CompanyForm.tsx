import React from "react";
import BLabel from "../atoms/BLabel";
import BSelect from "../atoms/BSelect";
import BErrorMessage from "../atoms/BErrorMessage";
import { useCompanyForm } from "../../hooks/useCompanyForm";
import { CompanyTypes } from "../../types";

const CompanyForm: React.FC = () => {
  const { simulationData, companyOptions, isOtherCompany, setCompanyType } =
    useCompanyForm();

  return (
    <div>
      <BLabel label="電力会社" isRequired={true} />
      <BSelect<CompanyTypes>
        value={simulationData.company}
        disabled={companyOptions.length === 0}
        options={companyOptions}
        changeSelect={setCompanyType}
      />
      {isOtherCompany && (
        <BErrorMessage message="シミュレーション対象外です。" />
      )}
    </div>
  );
};

export default CompanyForm;
