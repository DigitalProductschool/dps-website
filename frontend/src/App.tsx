import * as React from 'react';

import Header from './components/header/index';


export interface AppProps { 
  compiler: string; 
  framework: string; 
}

export class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    );
  }
}
