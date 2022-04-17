import React from 'react';
import '../../scss/_atoms.scss'

type Props = {
  disabled: boolean;
  inputValue:  (value: string)=> void;
  value: string | number;
}

const BInput: React.FC<Props> = (props: Props) => {
  return (
    <div className={'a_input-box' + (props.disabled ? ' disabled' : '')}>
      <input
        className="a_input-box_input"
        disabled={props.disabled}
        onInput={(event) => props.inputValue(event.currentTarget.value)}
        value={props.value}
      />
    </div>
  );
}

export default BInput;

