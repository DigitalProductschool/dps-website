import React from 'react';

interface ButtonProps {
  text: string;
  url: string;
  target: string;
}

export default function Button(props: ButtonProps) {
  return (
    <a
      className="u-button u-button__apply u-button u-button--reversed"
      style={{ float: 'right' }}
      target={props.target}
      href={props.url}
    >
      {props.text}
    </a>
  );
}
