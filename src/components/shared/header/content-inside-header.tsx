import * as React from 'react';

interface HeaderContentInsideProps {
  description: string;
  buttonText?: string;
  buttonUrl?: string;
  target?: string;
}

export default function HeaderContentInside(props: HeaderContentInsideProps) {
  return (
    <React.Fragment>
      <p className="header-content__description">{props.description}</p>
      <div className="header-content__buttons">
        {props.buttonText && props.buttonUrl && (
          <a
            className="u-button header-content__call-to-action"
            target={props.target}
            href={props.buttonUrl}
          >
            {props.buttonText}
          </a>
        )}
      </div>
    </React.Fragment>
  );
}
