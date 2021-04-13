import React from 'react';
import Section from '../../shared/components/content/section';

interface ProcessProps {
  data: {
    title: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
    image: string;
  };
}
export default function Process(props: ProcessProps) {
  const {
    title,
    description1,
    description2,
    description3,
    description4,
    image,
  } = props.data;
  return (
    <div className="u-section-margin-top">
      <Section title={title} className="u-section-margin-top">
        <p
          className="u-text"
          dangerouslySetInnerHTML={{ __html: description1 }}
        />{' '}
        <p
          className="u-text"
          dangerouslySetInnerHTML={{ __html: description2 }}
        />{' '}
        <p
          className="u-text"
          dangerouslySetInnerHTML={{ __html: description3 }}
        />{' '}
        <p
          className="u-text"
          dangerouslySetInnerHTML={{ __html: description4 }}
        />
        <img
          alt="double-diamond"
          className="u-image u-image-margin"
          src={image}
        />
      </Section>
    </div>
  );
}
