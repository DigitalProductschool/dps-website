import * as React from 'react';

import Nav from '../shared/header/nav/index';
import ApplyNow from './apply-now/index';
import DPSPitch from './dps-pitch/index';
import TeamsAndRoles from './teams-roles/index';
import PickTrack from '../shared/pick-track/index';
import Footer from '../shared/footer/index';

class Apply extends React.Component {
  render() {
    return (
      <React.Fragment>
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
