import * as React from 'react';

import Nav from '../../shared/nav/index';
import Cover from './cover/index';
import HeaderImage from '../../shared/header/section';
import HeaderContent from './header-content/index';

interface IHeaderProps {
  headerType: string;
}

class Header extends React.Component<IHeaderProps, {}> {
  render() {
    return (
      <React.Fragment>
        <section className="header u-content-wrapper">
          <Nav />
          {this.props.headerType == 'Video' ? (
            <>
              <Cover />
              <HeaderContent />
            </>
          ) : (
            <HeaderImage image="/assets/home/header/header-big.jpg">
              <HeaderContent />
            </HeaderImage>
          )}
        </section>
      </React.Fragment>
    );
  }
}

export default Header;
