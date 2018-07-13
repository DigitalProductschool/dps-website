import * as React from 'react';

import Header from './components/header/index';
import Pitch from './components/pitch/index';
import DiverseTeams from './components/diverse-teams';
import ExperienceMatter from './components/experience-matters';
import UserFirst from './components/user-first';
import Stripes from './components/stripes';
import OurProgram from './components/our-program';
import Adac from './components/adac';
import ToolPartner from './components/tool-partner'
import Footer from './components/footer/index';
import IndustryPartners from './components/industry-partners';
import PickTrack from './components/pick-track';
import WhatsNew from './components/whats-new';

export interface IAppProps {
  compiler: string;
  framework: string;
}

export class App extends React.Component<IAppProps, {}> {
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
    );
  }
}
