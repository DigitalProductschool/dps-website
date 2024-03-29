import React from 'react';

import Footer from '../components/shared/footer/index';
import Nav from '../components/shared/nav/index';
import CookieWarning from '../components/shared/cookie-warning';

const ServerErrorPage = () => (
  <React.Fragment>
    <CookieWarning />
    <Nav addClass={'nav--black'} logo={'/assets/shared/logo-black.svg'} />
    <section className="not-found u-content-wrapper">
      <div className="not-found__content u-content">
        <h2 className="u-title uppercase">Service Unavailable :(</h2>
        <div className="apply-now__content__description">
          <p className="u-text">Looks like we are having some server issues.</p>
        </div>
      </div>
    </section>
    <Footer />
  </React.Fragment>
);

export default ServerErrorPage;
