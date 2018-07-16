import * as React from 'react';

import Nav from '../header/nav/index';
import LegalContent from './legal-content/index';
import Footer from '../footer/index';

class Legal extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Nav addClass={"nav--black"} logo={"/assets/dps-logo-black.svg"} />
        <LegalContent />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Legal;
