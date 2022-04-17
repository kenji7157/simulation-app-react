import React from 'react';
import '../../scss/components/atoms/BLabel.scss'

type Props = {
  label?: string;
  isRequired: boolean;
}

const BLabel: React.FC<Props> = (props: Props) => {
  return (
    <span className={'a_label' + (props.isRequired ? ' a_label_required': '')}>
      {props.label}
    </span>
  );
}

export default BLabel;

