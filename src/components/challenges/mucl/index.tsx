import React from 'react';
import Section from '../../shared/components/content/section';

interface MuclProps {
  data: {
    title: string;
    description1: string;
    description2: string;
    description3?: string;
  };
}
export default function Mucl(props: MuclProps) {
  const { title, description1, description2, description3 } = props.data;

  return (
    <div className="u-section-margin-top u-content u-content-wrapper ">
      <Section title={title} className="u-content-margin-bottom">
        <p className="u-text">
          {description1}
          <br />
          <br />
          {description2}
          <br />
          <br />
          {description3 ? description3 : null}
        </p>
      </Section>
      <div className="u-youtube-mucl u-content">
        <iframe
          title="video: Virtual Tour: the Mobility Lab at Munich Urban Colab"
          src="https://www.youtube-nocookie.com/embed/Z4Dhu4XqJMw"
          width="260"
          height="315"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
}
