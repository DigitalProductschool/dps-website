import * as React from 'react';

import Nav from '../nav/index';


class Header extends React.Component {
  render() {
    return  (
      <React.Fragment>
        <Nav />
        <video autoPlay muted loop className="header__video"> 
          <source src="assets/headervideo-1680-758.mp4" type="video/mp4" />
        </video>
      </React.Fragment>
    );
  }
}

export default Header;
