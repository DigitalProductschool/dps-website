import * as React from 'react';
import { Link } from 'gatsby';

interface INavProps {
  addClass?: string;
  logo?: string;
}

class Nav extends React.Component <INavProps, {}>{
  render() {
    const addClass = this.props.addClass || '';
    const logo = this.props.logo || "/assets/shared/dps-logo-white.svg";

    return (
      <nav className={`nav ${addClass}`}>
        <div className={`nav__content u-content ${addClass}`}>
          <Link to="/">
            <img alt="nav-logo" className="nav__logo" src={`${logo}`} />
          </Link>
          <ul className="nav__menu">
            <li className="nav__menu__item">
              <Link to="/"> Home </Link>
            </li>
            <li className="nav__menu__item">
              <Link to="/our-program"> Our Program </Link>
            </li>
            <li className="nav__menu__item">
              <Link to="/apply"> Apply </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
