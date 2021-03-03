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
} from '../../../components/apply/data/pmm';
import Tracks from '../../../components/tracks/apply/_index';
import CookieWarning from '../../../components/shared/cookie-warning';
import './_styles.css';

/**
 * The Apply Now button is not abstracted away in its own component, because it's temporary there
 * TrackImage is for now the same for all tracks. It can be later made more flexible if track heads
 * decide to use different images.
 */
class TrackPMM extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CookieWarning />
        <Header
          track={generalTrackInfo}
          data={header}
          logo="/assets/tracks/dps-logo-white.svg"
          className="track-pmm__header"
        />
        <TrackImage track="pmm" />
        <OfferResponsibilities data={or} />
        <Expectations data={expectations} />
        <WhatYouLearn className="track-pmm__wyl" data={whatyoulearn} />
        {/*  <Tracks
          url={generalTrackInfo.url}
          name={generalTrackInfo.name}
          description={generalTrackInfo.description}
          track={generalTrackInfo.track}
      /> */}
        <div className="u-content-wrapper">
          <div
            className="u-content"
            style={{
              marginTop: '60px',
            }}
          >
            <div className="bePart-content__title">BE PART OF DPS</div>

            <b className="bePart-content__subtitle">
              {generalTrackInfo.description}
            </b>

            <br />
            <p className="bePart-content__batchDetails">
              Dates and deadlines of the upcoming batches:
              <br />
              <b className="bePart-content__subtitle">
                # Batch#13: May 3, 2021 to July 23, 2021
              </b>{' '}
              (Applications open until March 19, 2021)
            </p>
            <div className="tracks__apply-button-wrapper">
              <a
                className="u-button u-button__apply u-button--reversed tracks__apply-button"
                href="https://utum.typeform.com/to/ZyIceCta"
                target="_blank"
              >
                Apply as {generalTrackInfo.name}
              </a>
            </div>
          </div>
        </div>
        <Footer addSectionClass="u-section-margin-top" />
      </React.Fragment>
    );
  }
}

export default TrackPMM;
