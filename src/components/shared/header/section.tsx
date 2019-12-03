import * as React from 'react';

export default function Header(props) {
  return (
    <section
      className="header-section u-content-wrapper"
      style={{
        backgroundImage: 'url(' + props.image + ')',
      }}
    >
      <div className="header-section__content u-content">
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.56)',
            zIndex: '-1',
          }}
        ></div>
        <h1 className="header-section__content__title">{props.children}</h1>
      </div>
    </section>
  );
}
