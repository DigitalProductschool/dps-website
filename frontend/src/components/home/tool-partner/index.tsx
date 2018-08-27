import * as React from 'react';

class ToolPartner extends React.Component {
  render() {
    return (
      <section className="tool-partner u-content-wrapper">
        <div className="tool-partner__content u-content">
          <h3 className="u-title">OUR TOOL PARTNERS</h3>
          <div className="tool-partner__content__logos">
            <img className="tool-partner__content__logo" src="/assets/home/tool-partner/eyequant.jpg" />
            <img className="tool-partner__content__logo" src="/assets/home/tool-partner/invision.png" />
            <img className="tool-partner__content__logo" src="/assets/home/tool-partner/uxpin.png" />
            <img className="tool-partner__content__logo" src="/assets/home/tool-partner/github.png" />
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
