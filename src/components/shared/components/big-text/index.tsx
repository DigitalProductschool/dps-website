import React from 'react';
import Button from '../button';

interface BigTextProps {
  data: {
    title: string;
    button: string;
    url: string;
  };
}

export default function BigText(props: BigTextProps) {
  const { title, button, url } = props.data;
  return (
    <div className="u-section-margin-top u-content big-text__wrapper">
      <h2 className="u-title">{title}</h2>
      <div className="big-text__button">
        <Button text={button} url={url} target="_blank" />
      </div>
    </div>
  );
}
