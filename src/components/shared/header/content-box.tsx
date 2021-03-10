import * as React from 'react';

export default function HeaderContentBox(props) {
  return (
    <div className="u-content-wrapper">
      <div className="header-image-content u-content header-image-content__text">
        <p>{props.children}</p>
      </div>
    </div>
  );
}
