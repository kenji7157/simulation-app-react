import React from 'react';
import '../../scss/components/atoms/BHeading.scss'

type Props = {
  heading: string;
}

const BHeading: React.FC<Props> = (props: Props) => {
  return (
    <span className="a_heading">
      {props.heading}
    </span>
  );
}

export default BHeading;

