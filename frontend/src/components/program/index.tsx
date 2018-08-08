import * as React from 'react';

import Header from './header/index'
import FaceIt from './face-it/index'
import ExperienceConcentrate from './experience-concentrate/index'
import Teams from './teams/index'
import AfterDps from './after-dps/index'
import Pillars from './pillars/index'
import OurApproach from './our-approach/index'
import Roles from './roles/index'
import TeamAssignment from './team-assignment/index'
import WhoShouldApply from './who-should-apply/index'

class Program extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <FaceIt />
        <ExperienceConcentrate />
        <Teams />
        <AfterDps />
        <Pillars />
        <OurApproach />
        <Roles />
        <TeamAssignment />
        <WhoShouldApply />
      </React.Fragment>
    )
  }
}

export default Program;
