import React from 'react';
import TextImage from '../../shared/components/text-image';
import Button from '../../shared/components/button';

interface DPSHelpProps {
  data: {
    title: string;
    description: string;
    button: string;
    url: string;
    image: string;
  };
}

export default function DPSHelp(props: DPSHelpProps) {
  const { title, description, button, url, image } = props.data;
  return (
    <TextImage image={image} title={title} description={description}>
      <Button url={url} text={button} target="_blank" />
    </TextImage>
  );
}
