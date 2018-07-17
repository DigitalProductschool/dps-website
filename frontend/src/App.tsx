import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/home/index';
import Legal from './components/legal/index';
import Privacy from './components/privacy/index';


export class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/index" component={Home} />
          <Route path="/legal-disclosure" component={Legal} />
          <Route path="/privacy-policy" component={Privacy} />
        </Switch>
      </React.Fragment>
    );
  }
}
