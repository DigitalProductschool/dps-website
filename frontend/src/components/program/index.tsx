import * as React from 'react';

import Header from './header/index'
import TakeOpportunity from './take-opportunity/index'
import ExperienceConcentrate from './experience-concentrate/index'
import Teams from './teams/index'
import Pillars from './pillars/index'
import OurApproach from './our-approach/index'
import Roles from './roles/index'
import TeamAssignment from './team-assignment/index'
import WhoShouldApply from './who-should-apply/index'
import PickTrack from '../pick-track/index'
import Footer from '../footer/index'

class Program extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <TakeOpportunity />
        <ExperienceConcentrate />
        <Teams />
        <OurApproach />
        <Pillars />
        <WhoShouldApply />
        <PickTrack />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Program;
