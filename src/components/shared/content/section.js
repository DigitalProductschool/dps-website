import * as React from 'react';

export default function Section(props) {
  return (
    <div className="u-content-wrapper">
      <div className="u-content">
        <h3 className="u-title">{props.title}</h3>
        {props.children}
      </div>
    </div>
  );
}
