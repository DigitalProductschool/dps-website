import * as React from 'react';
import SVG from 'react-inlinesvg';

import Nav from './nav/index';
import CoverVideo from './cover-video/index';
import Content from './content/index';


class Header extends React.Component {
  render() {
    return  (
      <section className="header">
        <CoverVideo />
        <Nav />
        <Content className="u-content" />
        <SVG className="header__more-icon" src="/assets/chevron-down.svg" />
      </section>
    );
  }
}

export default Header;
