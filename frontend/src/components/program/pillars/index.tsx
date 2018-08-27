import * as React from 'react';

class Pillars extends React.Component {

  render() {
    return (
      <section className="pillars u-section-margin-top u-content-wrapper">
        <div className="pillars__content u-content">
          <h2 className="u-title">Key facts &amp; benefits</h2>
          <ul className="pillars__list">
            <li className="pillars__list__item">
              <div className="pillars__list__item__icon-wrapper"><img className="pillars__list__item__icon-wrapper__img pillars__list__item__icon-wrapper__img" src="assets/program/pillars/calendar.png" /></div>
              <h4 className="pillars__list__item__title">3 Months full-time</h4>
              <p className="pillars__list__item__description">Be part of a unique 3 months full-time training program by UnternehmerTUM, Europe's biggest Entrepreneurship Center.</p>
            </li>
            <li className="pillars__list__item">
              <div className="pillars__list__item__icon-wrapper"><img className="pillars__list__item__icon-wrapper__img pillars__list__item__icon-wrapper__img" src="assets/program/pillars/scholarship.png" /></div>
              <h4 className="pillars__list__item__title">2,250 Eur scholarship</h4>
              <p className="pillars__list__item__description">Every applicant who gets accepted will receive a scholarship of 750 EUR per month.</p>
            </li>
            <li className="pillars__list__item">
              <div className="pillars__list__item__icon-wrapper"><img className="pillars__list__item__icon-wrapper__img pillars__list__item__icon-wrapper__img" src="assets/program/pillars/network.svg" /></div>
              <h4 className="pillars__list__item__title">expand your NETWORK</h4>
              <p className="pillars__list__item__description">Visit the various other programs of UnternehmerTUM, take part in our or other meetups and get in touch with Munich's start-up and tech scene.</p>
            </li>
            <li className="pillars__list__item">
              <div className="pillars__list__item__icon-wrapper"><img className="pillars__list__item__icon-wrapper__img pillars__list__item__icon-wrapper__img" src="assets/program/pillars/agile.png" /></div>
              <h4 className="pillars__list__item__title">Agile &amp; Lean</h4>
              <p className="pillars__list__item__description">Receive intense training in agile working methods and design thinking techniques. Learn to evaluate user problems and to test and iterate your solutions.</p>
            </li>
            <li className="pillars__list__item">
              <div className="pillars__list__item__icon-wrapper"><img className="pillars__list__item__icon-wrapper__img pillars__list__item__icon-wrapper__img" src="assets/program/pillars/scholar.svg" /></div>
              <h4 className="pillars__list__item__title">Extend your skills</h4>
              <p className="pillars__list__item__description">Improve your soft skills by working in a diverse team and extend your knowledge through coaching and workshops by internal and external experts.</p>
            </li>
            <li className="pillars__list__item">
              <div className="pillars__list__item__icon-wrapper"><img className="pillars__list__item__icon-wrapper__img pillars__list__item__icon-wrapper__img" src="assets/program/pillars/campus.png" /></div>
              <h4 className="pillars__list__item__title">Modern campus</h4>
              <p className="pillars__list__item__description">Work on our modern and inspiring campus located in the center of Munich, one of the most livable cities in the world.</p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Pillars;
