import * as React from 'react';

import HeaderOurProgram from '../../components/our-program/header/index';
import TakeOpportunity from '../../components/our-program/take-opportunity/index';
import ExperienceConcentrate from '../../components/our-program/experience-concentrate/index';
import Teams from '../../components/our-program/teams/index';
import Pillars from '../../components/our-program/pillars/index';
import OurApproach from '../../components/our-program/our-approach/index';
import WhoShouldApply from '../../components/our-program/who-should-apply/index';
import PickTrack from '../../components/shared/pick-track/index';
import Footer from '../../components/shared/footer/index';
import CookieWarning from '../../components/shared/cookie-warning';
import Nav from '../../components/shared/nav/index';

class Program extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CookieWarning />
        <Nav />
        <HeaderOurProgram />
        <TakeOpportunity />
        <ExperienceConcentrate />
        <Teams />
        <OurApproach />
        <Pillars />
        <WhoShouldApply />
        <PickTrack isApplyNowVersion={true} />
        <Footer addSectionClass="u-section-margin-top" />
      </React.Fragment>
    );
  }
}

export default Program;
