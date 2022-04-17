import React from 'react';
import BHeading from '../atoms/BHeading';
import ZipCodeForm from '../molecules/ZipCodeForm';
import '../../scss/_organisms.scss'

const ZipCodeBox: React.FC = () => {
  return (
    <div>
      <BHeading heading="郵便番号をご入力ください" />
      <div className="o_box-form">
        <ZipCodeForm />
      </div>
    </div>
  );
}

export default ZipCodeBox;
