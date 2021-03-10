import * as React from 'react';

interface HeaderContentInsideProps {
  firstLineTitle?: string;
  secondLineTitle?: React.ReactNode;
  description: string;
  buttonText?: string;
}

export default function HeaderContentInside(props: HeaderContentInsideProps) {
  return (
    <>
      <h1 className="header-content__title header-content__title--first">
        {props.firstLineTitle}
      </h1>
      <h1 className="header-content__title">{props.secondLineTitle}</h1>
      <p className="header-content__description">{props.description}</p>
      <div className="header-content__buttons">
        {props.buttonText && (
          <a className="u-button header-content__call-to-action" href="/apply">
            {props.buttonText}
          </a>
        )}
      </div>
    </>
  );
}
