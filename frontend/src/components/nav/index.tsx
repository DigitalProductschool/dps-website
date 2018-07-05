import * as React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__content u-content">
          <img className="nav__logo" src="/assets/dps-logo-white.svg" />
          <ul className="nav__menu">
            <li className="nav__menu__item"> Home </li>
            <li className="nav__menu__item"> Our Program </li>
            <li className="nav__menu__item"> Apply </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
