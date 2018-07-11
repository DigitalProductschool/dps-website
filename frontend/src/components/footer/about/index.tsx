import * as React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <img className="about__logo" src="/assets/dps-logo-white.svg" />
        <div className="about__runby">
          DPS is a program run by <a className="about__link" href="https://unternehmertum.de">UnternehmerTUM</a> and part of the <a className="about__link" href="https://mobility.unternehmertum.de">Digital Hub Mobility Munich</a>.
        </div>
        <div className="about__address">
          <div className="about__address__title">We are here</div>
          <div className="about__address__content">
            Digital Product School<br />
            c/o IBM Watson IoT Center<br />
            Mies-van-der-Rohe-Str. 6<br />
            80807 Munich<br />
            Germany
          </div>
        </div>
      </div>
    );
  }
}

export default About;
