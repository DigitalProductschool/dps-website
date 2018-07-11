import * as React from 'react';

import Header from './components/header/index';
import Pitch from './components/pitch/index';
import DiverseTeams from './components/diverse-teams';
import ExperienceMatter from './components/experience-matters';
import UserFirst from './components/user-first';
import Stripes from './components/stripes';
import OurProgram from './components/our-program';
import ToolPartner from './components/tool-partner'
import Footer from './components/footer/index';
import IndustryPartners from './components/industry-partners';


export interface AppProps {
  compiler: string;
  framework: string;
}

export class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <React.Fragment>
        <Stripes />
        <Header />
        <Pitch />
        <DiverseTeams />
        <ExperienceMatter />
        <UserFirst />
        <OurProgram />
        <IndustryPartners />
        <ToolPartner />
        <Footer />
      </React.Fragment>
    );
  }
}
