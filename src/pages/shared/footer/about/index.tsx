import * as React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <img className="about__logo" src="/assets/shared/dps-logo-white.svg" />
        <div className="about__runby">
          DPS is a program run by <a className="about__link" href="https://unternehmertum.de">UnternehmerTUM</a> and part of the <a className="about__link" href="https://mobility.unternehmertum.de">Digital Hub Mobility Munich</a>.
        </div>
        <div className="about__address">
          <a href="https://www.google.de/maps/place/Digital+Product+School/@48.1763748,11.5904089,17z/data=!3m1!4b1!4m5!3m4!1s0x479e744a68f476c1:0x7a08a7452f6d4afe!8m2!3d48.1763748!4d11.5926029?shorturl=1" className="about__link">We are here</a>
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
