import * as React from 'react';

interface PillarsProps {
  title: string;
  data: Array<any>;
}

export default function Pillars(props: PillarsProps) {
  return (
    <section className="pillars u-content-wrapper">
      <div className="pillars__content u-content">
        <h2 className="u-title uppercase">{props.title}</h2>
        <ul className="pillars__list__4">
          {props.data.map(data => (
            <li key={data.title} className="pillars__list__item">
              <div className="pillars__list__item__icon-wrapper">
                <img
                  alt={data.alt}
                  className="pillars__list__item__icon-wrapper__img pillars__list__item__icon-wrapper__img"
                  src={data.icon}
                />
              </div>
              <h4 className="pillars__list__item__title">{data.title}</h4>
              <p className="pillars__list__item__description">
                {data.description}
              </p>{' '}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
