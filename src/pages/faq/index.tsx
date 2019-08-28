import * as React from 'react';

import Nav from '../../components/shared/nav/index';
import Faq from '../../components/faq/index';
import Footer from '../../components/shared/footer/index';
import CookieWarning from '../../components/shared/cookie-warning';

class Legal extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <CookieWarning />
        <Nav
          addClass={'nav--black'}
          logo={'/assets/shared/dps-logo-black.svg'}
        />
        <Faq />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Legal;
