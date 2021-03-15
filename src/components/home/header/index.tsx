import * as React from 'react';

import Nav from '../../shared/nav/index';
import Cover from './cover/index';
import Header from '../../shared/header/section';
import HeaderContentInside from '../../shared/header/content-inside-header';

interface IHeaderProps {
  headerType: string;
}

class HomeHeader extends React.Component<IHeaderProps, {}> {
  render() {
    return (
      <React.Fragment>
        <section className="header u-content-wrapper">
          <Nav />
          <Header
            image="/assets/home/header/header.jpg"
            headerType={this.props.headerType}
          >
            Master your project. Become
            <span className="u-outline"> experienced.</span>
            <HeaderContentInside
              description="The Digital Product School Munich is where interdisciplinary teams learn how to build digital products that solve real-world problems."
              buttonText="Apply"
              buttonUrl="/apply"
              target="_self"
            />
          </Header>
        </section>
      </React.Fragment>
    );
  }
}

export default HomeHeader;
