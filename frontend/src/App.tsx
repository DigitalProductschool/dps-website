import * as React from 'react';

import Header from './components/header/index';
import Pitch from './components/pitch/index';
import DiverseTeams from './components/diverse-teams';
import ExperienceMatter from './components/experience-matters';


export interface AppProps { 
  compiler: string; 
  framework: string; 
}

export class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Pitch />
        <DiverseTeams />
        <ExperienceMatter />
      </React.Fragment>
    );
  }
}
