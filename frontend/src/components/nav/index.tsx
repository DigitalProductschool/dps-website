import * as React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <p className="nav__logo"> Here is our Logo </p>
        <ul className="nav__menu">
          <li className="nav__menu__item"> Home </li>
          <li className="nav__menu__item"> Our Program </li>
          <li className="nav__menu__item"> Apply </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
