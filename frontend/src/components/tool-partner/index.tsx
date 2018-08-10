import * as React from 'react';

class ToolPartner extends React.Component {
  render() {
    return (
      <section className="tool-partner u-content-wrapper">
        <div className="tool-partner__content u-content">
          <h3 className="u-title">OUR TOOL PARTNERS</h3>
          <div className="tool-partner__content__logos">
            <img className="tool-partner__content__logo" src="/assets/eyequant.jpg" />
            <img className="tool-partner__content__logo" src="/assets/invision.png" />
            <img className="tool-partner__content__logo" src="/assets/uxpin.png" />
            <img className="tool-partner__content__logo" src="/assets/github.png" />
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
