import * as React from 'react';

import Header from './header/index';
import Footer from '../shared/footer/index';
import TrackImage from './track-image/index';
import WhatYouLearn from './what-you-learn/index';
import OfferResponsibilities from './offer-responsibilities/index';

class TrackPM extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header logo='/assets/tracks/dps-logo-white.png' />
        <TrackImage />
        <OfferResponsibilities />
        <WhatYouLearn />
        <Footer addSectionClass="u-section-margin-top" />
      </React.Fragment>
    )
  }
}

export default TrackPM;
