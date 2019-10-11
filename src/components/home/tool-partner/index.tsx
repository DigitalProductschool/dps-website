import * as React from 'react';

class ToolPartner extends React.Component {
  render() {
    return (
      <section className="tool-partner u-content-wrapper">
        <div className="tool-partner__content u-content">
          <h3 className="u-title">TOOL PARTNERS</h3>
          <div className="tool-partner__content__logos">
            <img alt="tool-partner-eyequant" className="tool-partner__content__logo" src="/assets/home/tool-partner/eyequant.jpg" />
            <img alt="tool-partner-invision" className="tool-partner__content__logo" src="/assets/home/tool-partner/invision.png" />
            <img alt="tool-partner-uxpin" className="tool-partner__content__logo" src="/assets/home/tool-partner/uxpin.png" />
            <img alt="tool-partner-github" className="tool-partner__content__logo" src="/assets/home/tool-partner/github.png" />
            <div>
              <h3 className="u-title">TOOL PARTNERS</h3>
              <p> a program by </p>
              <p> funded by </p>
              <p> in cooperation with </p>
              <img alt="tool-partner-tum.png" className="tool-partner__content__logo" src="/assets/home/tool-partner/tum.png" />
              <img alt="tool-partner-staatsministerium-logo" className="tool-partner__content__logo" src="/assets/home/tool-partner/staatsministerium-logo.png" />
              <img alt="tool-partner-tum.png" className="tool-partner__content__logo" src="/assets/home/tool-partner/tum.png" />

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ToolPartner;
