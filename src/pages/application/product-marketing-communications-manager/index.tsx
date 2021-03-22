import * as React from 'react';

import Footer from '../../../components/shared/footer/index';
import CookieWarning from '../../../components/shared/cookie-warning';
import Header from '../../../components/application/header';
import Form from '../../../components/application/form/_index';

export default function ApplicationPMC() {
  return (
    <React.Fragment>
      <CookieWarning />
      <Header track="pmc" />
      <Form track="pmc" />
      <Footer addSectionClass="u-section-margin-top" />
    </React.Fragment>
  );
}
