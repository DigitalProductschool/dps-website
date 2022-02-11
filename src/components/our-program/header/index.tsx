import * as React from 'react';
import Header from '../../shared/header/section';
import HeaderContentInside from '../../shared/header/content-inside-header';

class HeaderOurProgram extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header image="/assets/program/header/programheader.webp">
          Our Program
          <HeaderContentInside
            description="You may be skilled in your field, but when you start your career,
            there's one thing you lack: Experience."
          />
        </Header>
      </React.Fragment>
    );
  }
}

export default HeaderOurProgram;
