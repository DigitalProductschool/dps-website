import * as React from 'react';

import Header from '../header/_index';
import Footer from '../../shared/footer/index';
import TrackImage from '../track-image/_index';
import WhatYouLearn from '../what-you-learn/_index';
import OfferResponsibilities from '../offer-responsibilities/_index';
import Expectations from '../expectations/_index';
import { or, header, expectations, whatyoulearn } from '../../../data/pm';
import Apply from '../apply/_index';


/**
 * The Apply Now button is not abstracted away in its own component, because it's temporary there
 * TrackImage is for now the same for all tracks. It can be later made more flexible if track heads
 * decide to use different images.
 */
class TrackPM extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header data={header} logo="/assets/tracks/dps-logo-white.png" className="track-pm__header" />
        <TrackImage track="pm" />
        <OfferResponsibilities data={or} />
        <Expectations data={expectations} />
        <WhatYouLearn className="track-pm__wyl" data={whatyoulearn} />
        <Apply track="pm" />
        <Footer addSectionClass="u-section-margin-top" />
      </React.Fragment>
    )
  }
}

export default TrackPM;
