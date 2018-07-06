import * as React from 'react';
import SVG from 'react-inlinesvg';

import Nav from './nav/index';
import Cover from './cover/index';
import Content from './content/index';


class Header extends React.Component {
  render() {
    return  (
      <React.Fragment>
        <Nav />
        <section className="header">
          <Cover />
          <Content className="u-content" />
        </section>
      </React.Fragment>
    );
  }
}

export default Header;
