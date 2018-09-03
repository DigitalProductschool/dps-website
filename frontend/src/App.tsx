import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/home/index';
import Program from './components/program/index';
import Apply from './components/apply/index';
import Legal from './components/legal/index';
import Privacy from './components/privacy/index';
import ScrollToNav from './utils/scroll-to-nav';

export class App extends React.Component {
  render() {
    return (
      <ScrollToNav>
        <Switch>
          <Route path="/index" component={Home} />
          <Route path="/our-program" component={Program} />
          <Route path="/apply" component={Apply} />
          <Route path="/legal-disclosure" component={Legal} />
          <Route path="/privacy-policy" component={Privacy} />
        </Switch>
      </ScrollToNav>
    );
  }
}
