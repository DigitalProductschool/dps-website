import * as React from 'react';

import Header from '../../components/home/header/index';
import Pitch from '../../components/home/pitch/index';
import DiverseTeams from '../../components/home/diverse-teams';
import ExperienceMatter from '../../components/home/experience-matters';
import UserFirst from '../../components/home/user-first';
import OurProgram from '../../components/home/our-program';
import Adac from '../../components/home/adac';
import ToolPartner from '../../components/home/tool-partner'
import IndustryPartners from '../../components/home/industry-partners';
import WhatsNew from '../../components/home/whats-new';
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
