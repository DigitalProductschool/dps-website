import React from 'react';

interface CutOutTextProps {
  title: string;
  children: React.ReactNode;
}

export default function CutOutText(props: CutOutTextProps) {
  return (
    <div style={{ marginTop: 20 }}>
      <div className="cutout-text-wrapper">
        <div className="cutout-text-content__background"></div>
      </div>
      <div className="u-content cutout-text">
        <h3 className="u-title uppercase">{props.title}</h3>
        {props.children}
      </div>
    </div>
  );
}
