import * as React from 'react';

import Header from './header/index';
import Footer from '../shared/footer/index';
import TrackImage from './track-image/index';

class TrackPM extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <TrackImage />
        <Footer addSectionClass="u-section-margin-top" />
      </React.Fragment>
    )
  }
}

export default TrackPM;
