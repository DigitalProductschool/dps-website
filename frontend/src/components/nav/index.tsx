import * as React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <p> Here is our Nav </p>
        <ul className="nav__items">
          <li className="nav__item"> Home </li>
          <li className="nav__item"> Our Program </li>
          <li className="nav__item"> Apply </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
