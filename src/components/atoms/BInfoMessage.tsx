import React from "react";
import "../../scss/components/atoms/BInfoMessage.scss";

type Props = {
  message: string;
};

const BInfoMessage: React.FC<Props> = (props: Props) => {
  return (
    <div className="a_info-message">
      <p>{props.message}</p>
    </div>
  );
};

export default BInfoMessage;
