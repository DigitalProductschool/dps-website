import * as React from 'react';

import Nav from '../../components/shared/nav/index';
import Faq from '../../components/faq/index';
import Footer from '../../components/shared/footer/index';
import CookieWarning from '../../components/shared/cookie-warning';
import logo from '../../../static/assets/shared/dps-logo-double-white.svg';

class FAQ extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <CookieWarning />
        <Nav logo={logo} />
        <section className="faq__navheader u-content-wrapper">
          <div className="u-content">
            <div className="faq__navheader-overlay"></div>
            <h3
              className="faq__navheader__title"
              style={{ position: 'relative' }}
            >
              FREQUENTLY ASKED QUESTIONS
            </h3>
          </div>
        </section>
        <Faq />
        <Footer />
      </React.Fragment>
    );
  }
}

export default FAQ;
