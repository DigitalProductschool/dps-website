import * as React from 'react';

interface HeaderContentBoxProps {
  children: React.ReactNode;
}

export default function HeaderContentBox(props: HeaderContentBoxProps }) {
  return (
    <div className="u-content-wrapper">
      <div className="header-image-content u-content header-image-content__text">
        <p>{props.children}</p>
      </div>
    </div>
  );
}
