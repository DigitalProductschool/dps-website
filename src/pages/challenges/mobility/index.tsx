import * as React from 'react';

import Nav from '../../../components/shared/nav/index';
import Header from '../../../components/shared/header/section';
import Footer from '../../../components/shared/footer/index';
import CookieWarning from '../../../components/shared/cookie-warning';
import Status from '../../../components/challenges/status-quo';
import BigText from '../../../components/shared/components/big-text';
import Pillars from '../../../components/shared/components/pillars';
import HeaderContentInside from '../../../components/shared/header/content-inside-header';
import DPSHelp from '../../../components/challenges/dps-help';
import PartnerBenefits from '../../../components/challenges/partner-benefits';
import Process from '../../../components/challenges/process';
import Mucl from '../../../components/challenges/mucl';
import SuccessStories from '../../../components/challenges/success-stories';

import {
  header,
  firststatus,
  secondstatus,
  partnerbenefits,
  firstcta,
  successstories,
  process,
  mucl,
  whydps,
  secondcta,
} from '../../../components/challenges/data/mobility';
import IndustryPartners from '../../../components/partners/industry-partners';

class Mobility extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CookieWarning />
        <Nav />
        <Header image={header.image} overlayColor="rgba(5, 16, 72, 0.56)">
          {header.title}
          <HeaderContentInside
            description={header.description}
            buttonText={header.button}
            buttonUrl={header.url}
            target="_blank"
          />
        </Header>
        <Status data={firststatus} />
        <DPSHelp data={secondstatus} />
        <PartnerBenefits data={partnerbenefits} />
        <BigText data={firstcta} />
        <SuccessStories data={successstories} />
        <Process data={process} />
        <IndustryPartners />
        <Mucl data={mucl} />
        <Pillars title="Why Digital Product School" data={whydps} />;
        <div className="u-section-margin-bottom">
          <BigText data={secondcta} />
        </div>
        <Footer addSectionClass="u-section-margin-top" />
      </React.Fragment>
    );
  }
}

export default Mobility;
