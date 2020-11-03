import * as React from 'react';
import Header from '../../shared/header/section';

class HeaderPartners extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header image="/assets/partners/header.jpg">
          OUR PARTNERS
          <br />
          <p className="our-program__header-content__description">
            Digital Product School could not exist without its partners and
            enablers. Thank you for your contribution!
          </p>
        </Header>
      </React.Fragment>
    );
  }
}

export default HeaderPartners;
