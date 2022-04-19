import React from "react";

import "../../scss/components/parts/TheHeader.scss";

const TheHeader: React.FC = () => {
  return (
    <div className="p_header">
      <div className="p_header_top">
        <div>
          電気代から
          <br />
          かんたんシミュレーション
        </div>
      </div>
      <div>
        検針票を用意しなくてもOK
        <br />
        いくらおトクになるのか今すぐわかります！
      </div>
    </div>
  );
};

export default TheHeader;
