import * as React from 'react';

class ToolPartner extends React.Component {
  render() {
    return (
      <section className="tool-partner u-content-wrapper">
        <div className="tool-partner__content u-content">
          <h3 className="u-title">TOOL PARTNERS</h3>
          <div className="tool-partner__content__logos">
            <img
              alt="Eyequant"
              title="Eyequant, tool partner of Digital Product School"
              className="tool-partner__content__logo"
              src="/assets/home/tool-partner/eyequant.jpg"
            />
            <img
              alt="Invision"
              title="Invision, tool partner of Digital Product School"
              className="tool-partner__content__logo"
              src="/assets/home/tool-partner/invision.png"
            />
            <img
              alt="UXPIN"
              title="UXPIN, tool partner of Digital Product School"
              className="tool-partner__content__logo"
              src="/assets/home/tool-partner/uxpin.png"
            />
            <img
              alt="github"
              title="github, tool partner of Digital Product School"
              className="tool-partner__content__logo"
              src="/assets/home/tool-partner/github.png"
            />
            <div>
              <p> DPS is a program by </p>
              <p> funded by </p>
              <p> in cooperation with </p>
              <img
                alt="UnternehmerTUM"
                title="Digital Product School is a program by UnternehmerTUM"
                className="tool-partner__content__logo"
                src="/assets/home/tool-partner/UnternehmerTUM.png"
              />
              <img
                alt="Bavarian Ministry of Economic Affairs, Regional Development and Energy"
                title="Digital Product School is funded by the Bavarian Ministry of Economic Affairs, Regional Development and Energy"
                className="tool-partner__content__logo"
                src="/assets/home/tool-partner/staatsministerium-logo.png"
              />
              <img
                alt="Technical University Munich"
                title="Digital Product School takes place in kooperation with the Technical University Munich (TUM)"
                className="tool-partner__content__logo"
                src="/assets/home/tool-partner/tum.png"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ToolPartner;
