import * as React from 'react';

import Nav from '../../shared/nav/index';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="our-program__header u-content-wrapper">
          <Nav />
          <div className="our-program__header-content u-content">
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.56)',
                zIndex: '-1',
              }}
            ></div>
            <h1 className="our-program__header-content__title">OUR PROGRAM</h1>
            <p className="our-program__header-content__description">
              You may be skilled in your field, but when you start your career,
              there's one thing you lack:
            </p>
            <p className="our-program__header-content__description">
              Experience.
            </p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Header;
