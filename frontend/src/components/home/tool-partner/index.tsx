import * as React from 'react';

class ToolPartner extends React.Component {
  render() {
    return (
      <section className="tool-partner u-content-wrapper">
        <div className="tool-partner__content u-content">
          <h3 className="u-title">OUR TOOL PARTNERS</h3>
          <div className="tool-partner__content__logos">
            <a href="http://www.eyequant.com/?utm_source=digitalproductschoolmunich"><img className="tool-partner__content__logo" src="/assets/home/tool-partner/eyequant.jpg" /></a>
            <a href="https://www.invisionapp.com/lp/signup-1?utm_source=digitalproductschoolmunich"><img className="tool-partner__content__logo" src="/assets/home/tool-partner/invision.png" /></a>
            <a href="https://www.uxpin.com/?utm_source=digitalproductschoolmunich"><img className="tool-partner__content__logo" src="/assets/home/tool-partner/uxpin.png" /></a>
            <a href="https://github.com/"><img className="tool-partner__content__logo" src="/assets/home/tool-partner/github.png" /></a>
            <div>
              <p> funded by </p>
              <img className="tool-partner__content__logo" src="/assets/home/tool-partner/staatsministerium-logo.png" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ToolPartner;
