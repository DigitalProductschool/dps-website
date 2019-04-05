import * as React from 'react';

import Header from '../../../components/tracks/header/_index';
import Footer from '../../../components/shared/footer/index';
import TrackImage from '../../../components/tracks/track-image/_index';
import WhatYouLearn from '../../../components/tracks/what-you-learn/_index';
import OfferResponsibilities from '../../../components/tracks/offer-responsibilities/_index';
import Expectations from '../../../components/tracks/expectations/_index';
import Apply from '../../../components/tracks/apply/_index';
import { or, header, expectations, whatyoulearn } from '../../../data/ai';
import CookieWarning from '../../../components/shared/cookie-warning';

/**
 * The Apply Now button is not abstracted away in its own component, because it's temporary there
 * TrackImage is for now the same for all tracks. It can be later made more flexible if track heads
 * decide to use different images.
 */
class TrackAI extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CookieWarning />
        <Header data={header} logo="/assets/tracks/dps-logo-white.png" className="track-ai__header" />
        <TrackImage track="ai" />
        <OfferResponsibilities data={or} />
        <Expectations data={expectations} />
        <WhatYouLearn className="track-ai__wyl" data={whatyoulearn} />
        <Apply track="ai" />
        <Footer addSectionClass="u-section-margin-top " />
      </React.Fragment>
    )
  }
}

export default TrackAI;
