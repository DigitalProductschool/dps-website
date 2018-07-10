import * as React from 'react';

import Nav from './nav/index';
import Cover from './cover/index';
import HeaderContent from './header-content/index';


class Header extends React.Component {
  render() {
    return  (
      <React.Fragment>
        <Nav />
        <section className="header u-content-wrapper">
          <Cover />
          <HeaderContent className="u-content" />
        </section>
      </React.Fragment>
    );
  }
}

export default Header;
