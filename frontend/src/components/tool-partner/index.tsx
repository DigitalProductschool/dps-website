import * as React from 'react';

class ToolPartner extends React.Component {
  render() {
    return (
      <section className="tool-partner u-content-wrapper">
        <div className="tool-partner__content u-content">
          <h3 className="u-title">OUR TOOL PARTNERS</h3>
          <div className="tool-partner__content__logos">
            <a href="http://www.eyequant.com/?utm_source=digitalproductschoolmunich"><img className="tool-partner__content__logo" src="/assets/eyequant.jpg" /></a>
            <a href="https://www.invisionapp.com/lp/signup-1?utm_source=digitalproductschoolmunich"><img className="tool-partner__content__logo" src="/assets/invision.png" /></a>
            <a href="https://www.uxpin.com/?utm_source=digitalproductschoolmunich"><img className="tool-partner__content__logo" src="/assets/uxpin.png" /></a>
            <a href="https://github.com/"><img className="tool-partner__content__logo" src="/assets/github.png" /></a>
            <div>
              <p> funded by </p>
              <img className="tool-partner__content__logo" src="/assets/staatsministerium-logo.png" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ToolPartner;
