import * as React from 'react';

export default function Header(props) {
  const overlayColor = props.overlayColor || 'rgba(0, 0, 0, 0.56)';
  const opacity = props.opacity || '';
  return (
    <section
      className="header-section u-content-wrapper"
      style={{
        backgroundImage: 'url(' + props.image + ')',
      }}
    >
      <div className="u-content">
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: overlayColor,
            opacity: opacity,
            zIndex: '-1',
          }}
        ></div>
        <h1 className="header-section__content__title">{props.children}</h1>
      </div>
    </section>
  );
}
