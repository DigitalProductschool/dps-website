import * as React from 'react';

import Header, { ApplyButton } from '../../../components/tracks/header/_index';
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
} from '../../../components/apply/data/pmc';
import Tracks from '../../../components/tracks/apply/_index';
import CookieWarning from '../../../components/shared/cookie-warning';
import './_styles.css';

/**
 * The Apply Now button is not abstracted away in its own component, because it's temporary there
 * TrackImage is for now the same for all tracks. It can be later made more flexible if track heads
 * decide to use different images.
 */
class TrackPMC extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CookieWarning />
        <Header
          track={generalTrackInfo}
          data={header}
          logo="/assets/shared/logo-all-white.svg"
          className="track-pmc__header"
        />
        <TrackImage track="pmc" />
        <OfferResponsibilities data={or} />
        <Expectations data={expectations} />
        <WhatYouLearn className="track-pmc__wyl" data={whatyoulearn} />
        <Tracks
          url={generalTrackInfo.url}
          name={generalTrackInfo.name}
          description={generalTrackInfo.description}
          track={generalTrackInfo.track}
        />
        <Footer addSectionClass="u-section-margin-top" />
      </React.Fragment>
    );
  }
}

export default TrackPMC;
