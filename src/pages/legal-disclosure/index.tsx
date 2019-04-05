import * as React from 'react';

import Nav from '../../components/shared/header/nav/index';
import LegalContent from './legal-content/index';
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
        <Nav addClass={"nav--black"} logo={"/assets/shared/dps-logo-black.svg"} />
        <LegalContent />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Legal;
