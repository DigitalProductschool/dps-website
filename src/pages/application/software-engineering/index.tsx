import * as React from 'react'

import Footer from '../../../components/shared/footer/index'
import CookieWarning from '../../../components/shared/cookie-warning'
import Seo from '../../../components/seo'
import Nav from '../../../components/shared/nav/index'

export default function ApplicationSE() {
  return (
    <React.Fragment>
      <CookieWarning />
      <Seo />
      <section className="tracks__header u-content-wrapper track-se__header">
        <Nav />
        <div className="tracks__header-content u-content">
          <h1 className="tracks__header-content__title">
            APPLICATION AS <br /> Software Engineer
          </h1>
          <p className="tracks__header-content__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <p className="tracks__header-content__description">
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged.
          </p>
        </div>
      </section>
      <Footer addSectionClass="u-section-margin-top" />
    </React.Fragment>
  )
}
