import * as React from 'react';

import Nav from '../../shared/nav/index';

type trackData = {
  title: string;
  description1: string;
  description2: string;
};

const data: {
  se: trackData;
  pm: trackData;
  ixd: trackData;
  ai: trackData;
} = {
  se: {
    title: 'Software Engineer',
    description1:
      'Apply as Software Engineer now and take in the experience concentrate in digital product development',
  },
  ai: {
    title: 'AI Engineer',
    description1:
      'Apply as AI Engineer now and take in the experience concentrate in digital product development',
  },
  pm: {
    title: 'Product Manager',
    description1:
      'Apply as Product Manager now and take in the experience concentrate in digital product development',
  },
  ixd: {
    title: 'Interaction Designer',
    description1:
      'Apply as Interaction Designer now and take in the experience concentrate in digital product development',
  },
};

interface IHeaderProps {
  track: 'se' | 'pm' | 'ixd' | 'ai';
}

class Header extends React.Component<IHeaderProps, {}> {
  render() {
    const { track } = this.props;

    return (
      <section
        className={`applications__header u-content-wrapper applications__header--${track}`}
      >
        <Nav logo="/assets/tracks/dps-logo-white.png" />
        <div className="applications__header-content u-content">
          <h1 className="applications__header-content__title">
            APPLICATION AS <br /> {data[track].title}
          </h1>
          <p className="applications__header-content__description">
            {data[track].description1}
          </p>
          <p className="applications__header-content__description">
            Currently, you can apply for the following batches: ADD BATCHES HERE
          </p>
        </div>
      </section>
    );
  }
}

export default Header;
