import * as React from 'react';

import Header from '../header/_index';
import Footer from '../../shared/footer/index';
import TrackImage from '../track-image/_index';
import WhatYouLearn from '../what-you-learn/_index';
import OfferResponsibilities from '../offer-responsibilities/_index';
import Expectations from '../expectations/_index';
import { or, header, expectations, whatyoulearn } from '../../../data/se';
import Apply from '../apply/_index';
import CookieWarning from '../../shared/cookie-warning';


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
        <Header data={header} logo="/assets/tracks/dps-logo-white.png" className="track-se__header" />
        <TrackImage track="se" />
        <OfferResponsibilities data={or} />
        <Expectations data={expectations} />
        <WhatYouLearn className="track-se__wyl" data={whatyoulearn} />
        <Apply track="se" />
        <Footer addSectionClass="u-section-margin-top" />
      </React.Fragment>
    )
  }
}

export default TrackSE;
