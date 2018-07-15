const css = require('./styles.css').toString();
import * as React from 'react';
import { StaticRouter } from 'react-router-dom';

import { App } from './App';


class IndexServer extends React.Component<{ location: string }, {}> {
  render() {
    return (
      <StaticRouter location={this.props.location}>
        <App />
      </StaticRouter>
    );
  }
}

export { App, css };
  
