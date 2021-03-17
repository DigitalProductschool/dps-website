import * as React from 'react';

interface HeaderProps {
  overlayColor?: string;
  opacity?: string;
  image?: string;
  children: React.ReactNode;
}

export default function Header(props: HeaderProps) {
  const opacity = props.opacity || '';
  let overlayColor = props.overlayColor || 'rgba(0, 0, 0, 0.56)';

  return (
    <section
      className="header-section u-content-wrapper"
      style={{
        backgroundImage: 'url(' + props.image + ')',
      }}
    >
      <div className="u-content header-content">
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: overlayColor,
            opacity: opacity,
          }}
        ></div>
        <h1 className="header-section__content__title">{props.children}</h1>
      </div>
    </section>
  );
}
