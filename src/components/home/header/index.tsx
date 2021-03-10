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
          {this.props.headerType == 'Photo' ? (
            <Header image="/assets/home/header/header.jpg">
              <HeaderContentInside
                firstLineTitle="Master your project."
                secondLineTitle={
                  <div>
                    Become<span className="u-outline">experienced.</span>
                  </div>
                }
                description="The Digital Product School Munich is where interdisciplinary teams learn how to build digital products that solve real-world problems."
                buttonText="Apply"
              />
            </Header>
          ) : (
            <div className="u-content header-content">
              <Cover />
              <HeaderContentInside
                firstLineTitle="Master your project."
                secondLineTitle={
                  <div>
                    Become<span className="u-outline">experienced.</span>
                  </div>
                }
                description="The Digital Product School Munich is where interdisciplinary teams learn how to build digital products that solve real-world problems."
                buttonText="Apply"
              />
            </div>
          )}
        </section>
      </React.Fragment>
    );
  }
}

export default HomeHeader;
