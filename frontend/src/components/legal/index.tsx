import * as React from 'react';

import Nav from '../header/nav/index';
import LegalContent from './legal-content/index';
import Footer from '../footer/index';

class Legal extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <LegalContent />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Legal;
