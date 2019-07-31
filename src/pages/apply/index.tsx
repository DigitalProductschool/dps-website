import * as React from 'react'

import Nav from '../../components/shared/nav/index'
import ApplyNow from '../../components/apply/apply-now/index'
import PickTrack from '../../components/shared/pick-track/index'
import Footer from '../../components/shared/footer/index'
import CookieWarning from '../../components/shared/cookie-warning'

class Apply extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CookieWarning />
        <Nav
          addClass={'nav--black'}
          logo={'/assets/shared/dps-logo-black.svg'}
        />
        <ApplyNow />
        <PickTrack isApplyNowVersion={true} />
        <Footer addSectionClass="u-section-margin-top" />
      </React.Fragment>
    )
  }
}

export default Apply
