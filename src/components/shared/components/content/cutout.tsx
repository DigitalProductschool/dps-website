import * as React from 'react';

export default function Cutout(props) {
  return (
    <div className={`cutout-wrapper ${props.section}`}>
      <div
        className="cutout-content__background"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <div className="u-content-wrapper">
          <div className={`cutout-grid-${props.columns}`}>{props.children}</div>
        </div>
      </div>
    </div>
  );
}
