import * as React from 'react';

import Header from '../header/_index';
import Footer from '../../shared/footer/index';
import TrackImage from '../track-image/_index';
import WhatYouLearn from '../what-you-learn/_index';
import OfferResponsibilities from '../offer-responsibilities/_index';
import Expectations from '../expectations/_index';
import Apply from '../apply/_index';
import { or, header, expectations, whatyoulearn } from '../../../data/ai';

/**
 * The Apply Now button is not abstracted away in its own component, because it's temporary there
 * TrackImage is for now the same for all tracks. It can be later made more flexible if track heads
 * decide to use different images.
 */
class TrackAI extends React.Component {
  render() {
    return (
      <React.Fragment>
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
