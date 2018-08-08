import * as React from 'react';

class Pillars extends React.Component {

  render() {
    return (
      <section className="pillars u-content-wrapper">
        <div className="pillars__content u-content">
          <h2 className="u-title">Our pillars</h2>
          <p className="u-text u-text--bold">
            The Digital Product School is built upon three key pillars – to ensure a learning environment that is
            diverse, hands-on and human-centered.
          </p>
          <ul className="pillars__list">
            <li className="pillars__list__item">
              <div className="pillars__list__item__icon-wrapper"><img className="pillars__list__item__icon-wrapper__img pillars__list__item__icon-wrapper__img--first" src="assets/pillars-diversity.png" /></div>
              <h4 className="pillars__list__item__title">We embrace diversity</h4>
              <p className="pillars__list__item__description">Diversity is at the heart of who we are. Our mix of nationalities, academic backgrounds and our open-minded approach to ideas and technology provide a unique experience for all participants. So far our students, graduates and employees come from all around the world. That alone makes DPS a truly international hub.</p>
            </li>
            <li className="pillars__list__item">
              <div className="pillars__list__item__icon-wrapper"><img className="pillars__list__item__icon-wrapper__img pillars__list__item__icon-wrapper__img--rotate" src="assets/pillars-hands-on.png" /></div>
              <h4 className="pillars__list__item__title">We are hands-on</h4>
              <p className="pillars__list__item__description">We live the lean approach. And we encourage our participants to do so as well. We provide a maker environment – a  place where people can test and grow their innovate ideas quickly.</p>
            </li>
            <li className="pillars__list__item">
              <div className="pillars__list__item__icon-wrapper"><img className="pillars__list__item__icon-wrapper__img pillars__list__item__icon-wrapper__img" src="assets/pillars-human-centered.png" /></div>
              <h4 className="pillars__list__item__title">We are human-centered</h4>
              <p className="pillars__list__item__description">At DPS we know that focusing on the user is key for successful products. We go great lenghts to prove to our participants that this is the right approach when you want to create products that people actually need, want and love – and that really solve real problems.</p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Pillars;
