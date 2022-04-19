import React from "react";
import "../../scss/components/atoms/BErrorMessage.scss";

type Props = {
  message: string;
};

const BErrorMessage: React.FC<Props> = (props: Props) => {
  return (
    <div className="a_error-message">
      <div className="a_error-message_icon">
        <i className="fas fa-exclamation-triangle"></i>
      </div>
      <p>{props.message}</p>
    </div>
  );
};

export default BErrorMessage;
