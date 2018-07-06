import * as React from 'react';
import SVG from 'react-inlinesvg';

import Nav from '../nav/index';


class Header extends React.Component {
  render() {
    return  (
      <section className="header">
        <video autoPlay muted loop className="header__video"> 
          <source src="assets/headervideo-1680-758.mp4" type="video/mp4" />
        </video>
        <Nav />
        <div className="header__content u-content">
            <h1 className="header__content__title header__content__title--first">
              Master your project.
            </h1>
            <h1 className="header__content__title">
              Become <span className="u-outline">experienced.</span>
            </h1>
          <p className="header__content__description">
            The Digital Product School Munich is where interdisciplinary teams learn how to
            build digital products that solve real-world problems.
          </p>
          <div className="header__buttons">
            <button className="header__buttons__apply">  
              Apply now
            </button>
            <button className="header__buttons__more">  
              No, I need more info first
            </button>
          </div>
        </div>
        <SVG className="header__more-icon" src="/assets/chevron-down.svg" />
      </section>
    );
  }
}

export default Header;
