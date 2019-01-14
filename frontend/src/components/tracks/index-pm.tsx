import * as React from 'react';

import Header from './header/index';
import Footer from '../shared/footer/index';
import TrackImage from './track-image/index';
import WhatYouLearn from './what-you-learn/index';
import OfferResponsibilities from './offer-responsibilities/index';
import Expectations from './expectations/index';


class TrackPM extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header logo='/assets/tracks/dps-logo-white.png' />
        <TrackImage />
        <OfferResponsibilities />
        <Expectations />
        <WhatYouLearn />
        <div
          className="u-content"
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            marginTop: "200px",
          }}
        >
          <a 
            className="u-button u-button__apply u-button--reversed" 
            href="https://utum.typeform.com/to/qkkFHF?ref=website&entry-point=track-page"
          >
            Apply Now
          </a>
        </div>
        <Footer addSectionClass="u-section-margin-top" />
      </React.Fragment>
    )
  }
}

export default TrackPM;
