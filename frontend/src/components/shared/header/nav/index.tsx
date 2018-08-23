import * as React from 'react';

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
          <a href="/index">
            <img className="nav__logo" src={`${logo}`} />
          </a>
          <ul className="nav__menu">
            <li className="nav__menu__item">
              <a href="/index"> Home </a>
            </li>
            <li className="nav__menu__item">
              <a href="/our-program">
                Our Program
              </a>
            </li>
            <li className="nav__menu__item">
              <a href="https://utum.typeform.com/to/qkkFHF">
                Apply
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
