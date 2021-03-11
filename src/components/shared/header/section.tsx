import * as React from 'react';

interface HeaderProps {
  overlayColor?: string;
  opacity?: string;
  image: string;
  children: React.ReactNode;
  headerType?: string;
}

export default function Header(props: HeaderProps) {
  const opacity = props.opacity || '';
  let overlayColor = props.overlayColor || 'rgba(0, 0, 0, 0.56)';
  let image = props.image;
  let video;

  if (props.headerType && props.headerType != 'Photo') {
    video = (
      <video autoPlay muted loop className="cover__video">
        <source
          src="/assets/home/header/headervideo-1680-758.mp4"
          type="video/mp4"
        />
      </video>
    );
    image = '';
    overlayColor = '';
  }

  return (
    <section
      className="header-section u-content-wrapper"
      style={{
        backgroundImage: 'url(' + image + ')',
      }}
    >
      {video}
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
