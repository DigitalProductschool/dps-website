import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/home/index';
import Legal from './components/legal/index';
import Privacy from './components/privacy/index';
import ScrollToTop from './utils/scroll-to-top';


export class App extends React.Component {
  render() {
    return (
      <ScrollToTop>
        <Switch>
          <Route path="/index" component={Home} />
          <Route path="/legal-disclosure" component={Legal} />
          <Route path="/privacy-policy" component={Privacy} />
        </Switch>
      </ScrollToTop>
    );
  }
}
