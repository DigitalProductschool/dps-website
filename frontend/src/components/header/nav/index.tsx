import * as React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__content u-content">
          <img className="nav__logo" src="/assets/dps-logo-white.svg" />
          <ul className="nav__menu">
            <li className="nav__menu__item"> 
              <a href="/index"> Home </a>
            </li>
            <li className="nav__menu__item">
              <a href="/assets/program-info.pdf">
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
