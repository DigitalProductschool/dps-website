import * as React from 'react';

import Nav from '../../components/shared/nav/index';
import Faq from '../../components/faq/index';
import Footer from '../../components/shared/footer/index';
import CookieWarning from '../../components/shared/cookie-warning';
import logo from '../../../static/assets/shared/dps-logo-double-white.png';
import Header from '../../components/shared/header/section';
import HeaderContent from '../../components/shared/header/content';

class FAQ extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <CookieWarning />
        <Nav addClass={'u-bg-transparent'} logo={logo} />

        <Header image="/assets/faq/background.jpg">
          FREQUENTLY ASKED QUESTIONS
        </Header>

        <Faq />

        <Footer />
      </React.Fragment>
    );
  }
}

export default FAQ;
