import * as React from 'react';

import Nav from '../../shared/header/nav/index';

interface IHeaderProps {
  logo?: string;
  data: {
    title: string;
    description1: string;
    description2: string;
  }
}

class Header extends React.Component<IHeaderProps, {}> {
  render() {
    const { data } = this.props;

    return (
      <React.Fragment>
        <section className="tracks__header u-content-wrapper">
          <Nav logo={this.props.logo} />
          <div className="tracks__header-content u-content">
            <h1 className="tracks__header-content__title">
              APPLY AS <br /> {data.title}
            </h1>
            <p className="tracks__header-content__description">
              {data.description1}
           </p>
            <p className="tracks__header-content__description">
              {data.description2}
            </p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Header;
