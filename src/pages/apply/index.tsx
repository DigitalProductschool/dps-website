import * as React from 'react';

import Nav from '../shared/header/nav/index';
import ApplyNow from './apply-now/index';
import DPSPitch from './dps-pitch/index';
import PickTrack from '../shared/pick-track/index';
import Footer from '../shared/footer/index';
import CookieWarning from '../shared/cookie-warning';

class Apply extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CookieWarning />
        <Nav addClass={"nav--black"} logo={"/assets/shared/dps-logo-black.svg"} />
        <ApplyNow />
        <DPSPitch />
        <TeamsAndRoles />
        <PickTrack isApplyNowVersion={true} />
        <Footer addSectionClass="u-section-margin-top" />
      </React.Fragment>
    );
  }
}

export default Apply;
