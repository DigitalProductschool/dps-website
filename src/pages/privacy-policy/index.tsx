import * as React from 'react';

import Nav from '../shared/header/nav/index';
import PrivacyContent from './privacy-content/index';
import Footer from '../shared/footer/index';
import Seo from '../../components/seo';

class Privacy extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Seo />
        <Nav addClass={"nav--black"} logo={"/assets/shared/dps-logo-black.svg"} />
        <PrivacyContent />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Privacy;
