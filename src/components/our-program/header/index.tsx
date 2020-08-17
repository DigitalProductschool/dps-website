import * as React from 'react';
import Header from '../../shared/header/section';

class HeaderOurProgram extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header image="/assets/program/header/programheader.jpg">
          OUR PROGRAM
          <br />
          <p className="our-program__header-content__description">
            You may be skilled in your field, but when you start your career,
            there's one thing you lack:
            <p>Experience.</p>
          </p>
        </Header>
      </React.Fragment>
    );
  }
}

export default HeaderOurProgram;
