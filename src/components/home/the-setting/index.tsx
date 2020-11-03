import * as React from 'react';
import { Link } from 'gatsby';

class TheSetting extends React.Component {
  render() {
    return (
      <div className="the-setting u-content-wrapper">
        <div className="the-setting u-content">
          <h3
            className="the-setting__title u-title"
            style={{ textAlign: 'left' }}
          >
            THE SETTING
          </h3>
          <div className="the-setting__content">
            <p className="the-setting__description">
              We found a setting that really works well for DPS: Some people
              come to the office, split into A/B-groups, others work from all
              over the world. Even our offsite took place twice with two
              separate groups! Workshops and sessions are all remote-first:
              there are no disadvantages if you are not in Munich.
              <br />
              <br />
              And you may not believe it: <b>this also has advantages!</b>{' '}
              Talents who could not come to Munich can now participate. No more
              trouble with visas anymore. Higher diversity in the teams! We can
              talk to users from all over the world. And participants learn for
              later how remote-work can work!
              <br /> Interested?{' '}
              <Link to="/apply" className="u-link">
                <span>Apply Now </span>
              </Link>
            </p>
            <div className="the-setting-content__image" />
          </div>
        </div>
      </div>
    );
  }
}

export default TheSetting;
