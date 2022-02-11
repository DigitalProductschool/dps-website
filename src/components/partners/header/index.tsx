import * as React from 'react';
import Header from '../../shared/header/section';
import HeaderContentInside from '../../shared/header/content-inside-header';

class HeaderPartners extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header image="/assets/partners/header.webp">
          Our Partners
          <HeaderContentInside
            description=" Digital Product School could not exist without its partners and
            enablers. Thank you for your contribution!"
          />
        </Header>
      </React.Fragment>
    );
  }
}

export default HeaderPartners;
