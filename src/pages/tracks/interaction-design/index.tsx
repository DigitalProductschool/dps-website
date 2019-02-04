import * as React from 'react';

import Header from '../header/index';
import Footer from '../../shared/footer/index';
import TrackImage from '../track-image/index';
import WhatYouLearn from '../what-you-learn/index';
import OfferResponsibilities from '../offer-responsibilities/index';
import Expectations from '../expectations/index';
import { or, header, expectations } from '../../../data/ixd';

/**
 * The Apply Now button is not abstracted away in its own component, because it's temporary there
 * TrackImage is for now the same for all tracks. It can be later made more flexible if track heads
 * decide to use different images.
 */
class TrackIxD extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header 
          data={header}
          className='track-ixd__header'
          logo="/assets/tracks/dps-logo-white.png" 
        />
        <TrackImage />
        <OfferResponsibilities data={or} />
        <Expectations data={expectations} />
        <WhatYouLearn className="track-ixd__wyl" />
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
            href="https://utum.typeform.com/to/qkkFHF?role=ixd?ref=website&entry-point=track-page"
          >
            Apply Now
          </a>
        </div>
        <Footer addSectionClass="u-section-margin-top" />
      </React.Fragment>
    )
  }
}

export default TrackIxD;
