import React from 'react';
import Section from '../../shared/components/content/section';

interface MuclProps {
  data: {
    title: string;
    description1: string;
    description2: string;
    image: string;
  };
}
export default function Mucl(props: MuclProps) {
  const { title, description1, description2, image } = props.data;

  return (
    <div className="u-grid-5-5 u-section-margin-top">
      <div
        style={{
          backgroundImage: 'url(' + image + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
          minHeight: '50vw',
        }}
      ></div>
      <Section title={title}>
        <p className="u-text">
          {description1}
          <br />
          {description2}
        </p>
      </Section>
    </div>
  );
}
