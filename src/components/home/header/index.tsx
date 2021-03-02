import * as React from 'react';

import Nav from '../../shared/nav/index';
import Cover from './cover/index';
import Header from '../../shared/header/section';
import HeaderContent from './header-content/index';

interface IHeaderProps {
  headerType: string;
}

class HomeHeader extends React.Component<IHeaderProps, {}> {
  render() {
    return (
      <React.Fragment>
        <section className="header u-content-wrapper">
          <Nav />
          {this.props.headerType == 'Photo' ? (
            <Header image="/assets/home/header/header.jpg">
              <HeaderContent />
            </Header>
          ) : (
            <div className="u-content header-content">
              <Cover />
              <HeaderContent />
            </div>
          )}
        </section>
      </React.Fragment>
    );
  }
}

export default HomeHeader;
