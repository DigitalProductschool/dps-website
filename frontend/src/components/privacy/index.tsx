import * as React from 'react';

import Nav from '../header/nav/index';
import PrivacyContent from './privacy-content/index';
import Footer from '../footer/index';

class Privacy extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <PrivacyContent />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Privacy;
