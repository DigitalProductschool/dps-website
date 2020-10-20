import * as React from 'react';
import Footer from '../../components/shared/footer/index';
import CookieWarning from '../../components/shared/cookie-warning';
import Nav from '../../components/shared/nav/index';
import HeaderPartners from '../../components/partners/header';
import IndustryPartners from '../../components/partners/industry-partners';
import ExperienceMatter from '../../components/partners/experience-matters';
import ToolPartner from '../../components/partners/tool-partner';

class Program extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CookieWarning />
        <Nav />
        <HeaderPartners />
        <IndustryPartners />
        <ExperienceMatter />
        <ToolPartner />
        <Footer addSectionClass="u-section-margin-top" />
      </React.Fragment>
    );
  }
}

export default Program;
