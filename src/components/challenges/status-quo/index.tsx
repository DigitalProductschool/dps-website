import React from 'react';
import CutOutText from '../../shared/components/cut-out-text';

interface StatusProps {
  data: {
    title: string;
    description1: string;
    description2: string;
    description3: string;
  };
}

export default function Status(props: StatusProps) {
  const { title, description1, description2, description3 } = props.data;
  return (
    <CutOutText title={title}>
      <p className="u-text"> {description1}</p>
      <p className="u-text">{description2}</p>
      <p className="u-text">{description3}</p>
    </CutOutText>
  );
}
