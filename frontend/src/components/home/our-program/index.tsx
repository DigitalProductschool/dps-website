import * as React from 'react';

class OurProgram extends React.Component {
  render() {
    return (
      <section className="our-program u-content-wrapper">
        <div className="our-program__content u-content">
          <h3 className="our-program__title">
            Our Program
          </h3>
          <p className="our-program__description">
            The Digital Product School is a full-time program lasting 3 months in Munich.
            It's your chance to build digital products in a diverse team – to solve real-world
            problems around mobility and transportation. In a realistic start-up environment,
            we grow the next generation of digital product makers.
          </p>

          <ul className="our-program__perks">
            <li className="our-program__perks__item">
              <div className="our-program__perks__item__icon-wrapper">
              <img className="our-program__perks__item__icon-wrapper__img our-program__perks__item__icon-wrapper__img--first" src="/assets/home/our-program/calendar-icon.png" />
              </div>
              <h4 className="our-program__perks__title">
                3 Months full-time
              </h4>
              <p className="our-program__perks__description">
                Be part of a unique 3 months full-time training
                program by UnternehmerTUM, Europe's biggest Entrepreneurship Center
              </p>
            </li>
            <li className="our-program__perks__item">
              <div className="our-program__perks__item__icon-wrapper">
                <img className="our-program__perks__item__icon-wrapper__img our-program__perks__item__icon-wrapper__img--second" src="/assets/home/our-program/scholar-icon.svg" />
              </div>
              <h4 className="our-program__perks__title">
                2,250 EUR SCHOLARSHIP
              </h4>
              <p className="our-program__perks__description">
                Every applicant who gets accepted will receive a scholarship of 750 EUR per month.
              </p>
            </li>
            <li className="our-program__perks__item">
              <div className="our-program__perks__item__icon-wrapper">
              <img className="our-program__perks__item__icon-wrapper__img our-program__perks__item__icon-wrapper__img--third" src="/assets/home/our-program/network-icon.svg" />
              </div>
              <h4 className="our-program__perks__title">
                expand your NETWORK
              </h4>
              <p className="our-program__perks__description">
                Work on our modern campus located in the IBM Watson IoT Center in
                Munich and get in touch with Germany's start-up and tech scene.
              </p>
            </li>
          </ul>

          <a className="our-program__button u-button" href="/our-program">
            Learn more
          </a>
        </div>
      </section>
    );
  }
}

export default OurProgram;
