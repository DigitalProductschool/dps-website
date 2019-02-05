import * as React from 'react';

import Nav from '../../shared/header/nav/index';
import Seo from '../../../components/seo';

interface IHeaderProps {
  logo?: string;
  className: string;
  data: {
    title: string;
    description1: string;
    description2: string;
  }
}

// HoC would be much more suitable for this abstraction here
// instead of passing className, data etc by the index.tsx files
class Header extends React.Component<IHeaderProps, {}> {
  render() {
    const { data, className } = this.props;

    return (
      <React.Fragment>
        <Seo />
        <section className={`tracks__header u-content-wrapper ${className}`}>
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
