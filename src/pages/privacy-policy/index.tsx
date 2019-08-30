import * as React from 'react';

import Nav from '../../components/shared/nav/index';
import PrivacyContent from '../../components/privacy-policy/privacy-content/index';
import Footer from '../../components/shared/footer/index';
import Seo from '../../components/seo';
import CookieWarning from '../../components/shared/cookie-warning';

class Privacy extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Seo />
        <CookieWarning />
        <Nav
          addClass={'nav--black'}
          logo={'/assets/shared/dps-logo-black.svg'}
        />
        <PrivacyContent />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Privacy;
