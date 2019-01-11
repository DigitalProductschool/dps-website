import * as React from 'react';

import Nav from '../../shared/header/nav/index';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="tracks__header u-content-wrapper">
          <Nav />
          <div className="tracks__header-content u-content">
            <h1 className="tracks__header-content__title">
              APPLY AS <br /> PRODUCT MANAGER
            </h1>
            <p className="tracks__header-content__description">
              The Product Manager (PM) makes sure that the team shares a vision regarding the problem to be solved. This starts with identifying possible target groups and driving the problem interviews. PMs are responsible for the product's progress, but also ensure that the major risks have been eliminated before the engineers start building it – through lean experiments and excessive usability testing.
           </p>
            <p className="tracks__header-content__description">
              In our agile product development team you work at the intersection between business and technology to provide the best user experience – in close collaboration with designers and engineers. <br />
              Together you envision the product, which requires you to research your customers and the problems they have that you’re trying to solve. During the project you will define and iterate the product as you go, solve problems as they pop up and closely manage scope so you can get the right product out on time.
            </p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Header;
