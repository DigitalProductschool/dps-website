import * as React from 'react';

export default function Section(props) {
  return (
    <div
      className={`u-content-wrapper ${props.className ? props.className : ''}`}
      style={{ backgroundColor: props.backgroundColor, color: props.textColor }}
    >
      <div className="u-content">
        <h2 className="u-title uppercase">{props.title}</h2>
        {props.children}
      </div>
    </div>
  );
}
