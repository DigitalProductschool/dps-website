import * as React from 'react';

import Header from './components/header/index';


export interface AppProps { 
  compiler: string; 
  framework: string; 
}

export interface AppState {
  title: string;
}

export class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    );
  }
}
