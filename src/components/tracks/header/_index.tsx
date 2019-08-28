import * as React from 'react';
import { Link } from 'gatsby';
import Nav from '../../shared/nav/index';
import Seo from '../../../components/seo';

interface IHeaderProps {
  logo?: string;
  className: string;
  data: {
    description1: string;
    description2: string;
    description3?: string;
    description4?: string;
  };
  track: {
    track: string;
    name: string;
    url: string;
  };
}

const ApplyButton = (props: { track: string; name: string }) => {
  switch (props.track) {
    case 'se':
      return (
        <Link
          className="u-button u-button__apply u-button--reversed tracks-header__apply-button"
          to="/application/software-engineering"
        >
          Apply as {props.name}
        </Link>
      );
    case 'ixd':
      return (
        <Link
          className="u-button u-button__apply u-button--reversed tracks-header__apply-button"
          to="/application/interaction-design"
        >
          Apply as {props.name}
        </Link>
      );
    case 'ai':
      return (
        <Link
          className="u-button u-button__apply u-button--reversed tracks-header__apply-button"
          to="/application/artificial-intelligence"
        >
          Apply as {props.name}
        </Link>
      );
    case 'pm':
      return (
        <Link
          className="u-button u-button__apply u-button--reversed tracks-header__apply-button"
          to="/application/product-management"
        >
          Apply as {props.name}
        </Link>
      );
  }
};

// HoC would be much more suitable for this abstraction here
// instead of passing className, data etc by the index.tsx files
class Header extends React.Component<IHeaderProps, {}> {
  render() {
    const { data, track, className } = this.props;

    return (
      <React.Fragment>
        <Seo />
        <section className={`tracks__header u-content-wrapper ${className}`}>
          <Nav logo={this.props.logo} />
          <div className="tracks__header-content u-content">
            <h1 className="tracks__header-content__title">
              APPLY AS <br /> {track.name}
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
              <ApplyButton {...track} />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Header;
