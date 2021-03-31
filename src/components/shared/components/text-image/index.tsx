import React from 'react';

interface TextImageProps {
  title: string;
  description: string;
  children: React.ReactNode;
  image: string;
}

export default function TextImage(props: TextImageProps) {
  const { title, description, children, image } = props;
  return (
    <div className="u-section-margin-top u-content-wrapper">
      <div className="u-content">
        <div className="u-grid-3-7">
          <div className="text-image__text">
            <h3 className="u-title uppercase">{title}</h3>
            <p className="u-text">{description}</p>
            {children}
          </div>
          <img src={image} className="text-image text-image__image" />
        </div>
      </div>
    </div>
  );
}
