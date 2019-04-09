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
    description3?: string;
    description4?: string;
    track: string,
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
            {data.description3 && (
                <p className="tracks__header-content__description">
                {data.description3}
              </p>
            )}
            {data.description4 && (
                <p className="tracks__header-content__description">
                {data.description4}
              </p>
            )}
            <div className="tracks-header__apply-button-wrapper">
              <a
                className="u-button u-button__apply u-button--reversed tracks-header__apply-button" 
                href={`https://utum.typeform.com/to/qkkFHF?role=${data.track}&ref=website&entry-point=track-page-header`}
              >
                Apply as {data.title}
              </a>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Header;
