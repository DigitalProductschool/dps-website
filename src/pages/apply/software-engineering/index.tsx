import * as React from 'react';

import Header from '../../../components/tracks/header/_index';
import Footer from '../../../components/shared/footer/index';
import TrackImage from '../../../components/tracks/track-image/_index';
import WhatYouLearn from '../../../components/tracks/what-you-learn/_index';
import OfferResponsibilities from '../../../components/tracks/offer-responsibilities/_index';
import Expectations from '../../../components/tracks/expectations/_index';
import {
  generalTrackInfo,
  or,
  header,
  expectations,
  whatyoulearn,
} from '../../../components/apply/data/se';
import Apply from '../../../components/tracks/apply/_index';
import CookieWarning from '../../../components/shared/cookie-warning';

/**
 * The Apply Now button is not abstracted away in its own component, because it's temporary there
 * TrackImage is for now the same for all tracks. It can be later made more flexible if track heads
 * decide to use different images.
 */
class TrackSE extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CookieWarning />
        <Header
          track={generalTrackInfo}
          data={header}
          logo="/assets/tracks/dps-logo-white.png"
          className="track-se__header"
        />
        <TrackImage track="se" />
        <OfferResponsibilities data={or} />
        <Expectations data={expectations} />
        <WhatYouLearn className="track-se__wyl" data={whatyoulearn} />
        <Apply
          url={generalTrackInfo.url}
          name={generalTrackInfo.name}
          track={generalTrackInfo.track}
        />
        <Footer addSectionClass="u-section-margin-top" />
      </React.Fragment>
    );
  }
}

export default TrackSE;
