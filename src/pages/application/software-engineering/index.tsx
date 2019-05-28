import * as React from 'react'

import Footer from '../../../components/shared/footer/index'
import CookieWarning from '../../../components/shared/cookie-warning'
import Header from '../../../components/application/header'
import Form from '../../../components/application/form/_index'

export default function ApplicationSE() {
  return (
    <React.Fragment>
      <CookieWarning />
      <Header track="se" />
      <Form track="se" />
      <Footer addSectionClass="u-section-margin-top" />
    </React.Fragment>
  )
}
