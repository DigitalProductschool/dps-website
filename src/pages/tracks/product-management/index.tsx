import * as React from 'react';

import Header from '../header/_index';
import Footer from '../../shared/footer/index';
import TrackImage from '../track-image/_index';
import WhatYouLearn from '../what-you-learn/_index';
import OfferResponsibilities from '../offer-responsibilities/_index';
import Expectations from '../expectations/_index';
import { or, header, expectations } from '../../../data/pm';
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
        <TrackImage />
        <OfferResponsibilities data={or} />
        <Expectations data={expectations} />
        <WhatYouLearn className="track-pm__wyl" />
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
            href="https://utum.typeform.com/to/qkkFHF?role=pm?ref=website&entry-point=track-page"
          >
            Apply Now
          </a>
        </div>
        <Apply track="pm" />
        <Footer addSectionClass="u-section-margin-top" />
      </React.Fragment>
    )
  }
}

export default TrackPM;
