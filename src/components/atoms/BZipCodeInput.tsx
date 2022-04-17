import React from 'react';
import '../../scss/_atoms.scss'
import '../../scss/components/atoms/BZipCodeInput.scss'

type Props = {
  firstZipCode: string;
  secondZipCode: string;
  setFirstZipCode: (value: string)=> void;
  setSecondZipCode:  (value: string)=> void;
}

const BZipCodeInput: React.FC<Props> = (props) => {
  return (
    <div className="a_input-box">
      <input
        className="a_zipcode-input_input a_input-box_input"
        maxLength={3}
        onInput={(event) => props.setFirstZipCode(event.currentTarget.value)}
        value={props.firstZipCode}
      />
      <div className="a_zipcode-input_hyphen">-</div>
      <input
        className="a_zipcode-input_input a_input-box_input"
        maxLength={4}
        onInput={(event) => props.setSecondZipCode(event.currentTarget.value)}
        value={props.secondZipCode}
      />
    </div>
  );
}

export default BZipCodeInput;

