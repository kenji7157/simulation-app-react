import React from "react";
import BHeading from "../atoms/BHeading";
import EmailForm from "../molecules/EmailForm";

const EmailBox: React.FC = () => {
  return (
    <div>
      <BHeading heading="メールアドレスをご入力ください" />
      <div className="o_box-form">
        <EmailForm />
      </div>
    </div>
  );
};

export default EmailBox;
