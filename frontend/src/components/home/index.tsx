import * as React from 'react';

import Header from '../header/index';
import Pitch from '../pitch/index';
import DiverseTeams from '../diverse-teams';
import ExperienceMatter from '../experience-matters';
import UserFirst from '../user-first';
import Stripes from '../stripes';
import OurProgram from '../our-program';
import Adac from '../adac';
import ToolPartner from '../tool-partner'
import Footer from '../footer/index';
import IndustryPartners from '../industry-partners';
import PickTrack from '../pick-track';
import WhatsNew from '../whats-new';


class Home extends React.Component {
  private forwardedRef: React.RefObject<HTMLDivElement> = React.createRef();

  render() {
    return (
      <React.Fragment>
        <Stripes />
        <Header onContentButtonClick={() => this.forwardedRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })} />
        <Pitch forwardedRef={this.forwardedRef} />
        <DiverseTeams />
        <ExperienceMatter />
        <UserFirst />
        <OurProgram />
        <IndustryPartners />
        <PickTrack />
        <WhatsNew />
        <Adac />
        <ToolPartner />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Home;
