import * as React from 'react';

interface HeaderContentInsideProps {
  description: string;
  buttonText?: string;
}

export default function HeaderContentInside(props: HeaderContentInsideProps) {
  return (
    <React.Fragment>
      <p className="header-content__description">{props.description}</p>
      <div className="header-content__buttons">
        {props.buttonText && (
          <a className="u-button header-content__call-to-action" href="/apply">
            {props.buttonText}
          </a>
        )}
      </div>
    </React.Fragment>
  );
}
