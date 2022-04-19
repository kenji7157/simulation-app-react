import React from "react";
import BHeading from "../atoms/BHeading";
import PayForm from "../molecules/PayForm";

const PayBox: React.FC = () => {
  return (
    <div>
      <BHeading heading="現在の電気の使用状況について教えてください" />
      <div className="o_box-form">
        <PayForm />
      </div>
    </div>
  );
};

export default PayBox;
