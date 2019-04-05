import * as React from 'react';

import Header from './header/index';
import Pitch from './pitch/index';
import DiverseTeams from './diverse-teams';
import ExperienceMatter from './experience-matters';
import UserFirst from './user-first';
import OurProgram from './our-program';
import Adac from './adac';
import ToolPartner from './tool-partner'
import IndustryPartners from './industry-partners';
import WhatsNew from './whats-new';
import PickTrack from '../../components/shared/pick-track';
import Footer from '../../components/shared/footer/index';
import CookieWarning from '../../components/shared/cookie-warning';


class Home extends React.Component {
  private forwardedRef: React.RefObject<HTMLDivElement> = React.createRef();
  render() {
    return (
      <React.Fragment>
        <CookieWarning />
        <Header onContentButtonClick={() => this.forwardedRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })} />
        <Pitch forwardedRef={this.forwardedRef} />
        <DiverseTeams />
        <ExperienceMatter />
        <UserFirst />
        <OurProgram />
        <IndustryPartners />
        <PickTrack isApplyNowVersion={false} />
        <WhatsNew />
        <Adac />
        <ToolPartner />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Home;
