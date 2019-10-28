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
          </div>
          <div>
            <h3 className="u-title">ENABLERS & SUPPORTERS</h3>
            <div className="enabler-partner-wrapper">
              <div className="enabler-partner">
                <h6>a program by </h6>
                <img
                  alt="UnternehmerTUM"
                  title="Digital Product School is a program by UnternehmerTUM"
                  className="tool-partner__content__logo"
                  src="/assets/home/tool-partner/UnternehmerTUM.png"
                />
              </div>
              <div className="enabler-partner">
                <h6>part of the </h6>
                <div>
                  <img
                    alt="Mobility Hub"
                    title="Digital Product School is a program by UnternehmerTUM"
                    className="tool-partner__content__logo"
                    src="/assets/home/tool-partner/mobilityhub.png"
                  />
                </div>
              </div>
              <div className="enabler-partner">
                <h6>part of the </h6>
                <img
                  alt="Mobility Hub Ecosystem"
                  title="Digital Product School is a program by UnternehmerTUM"
                  className="tool-partner__content__logo"
                  src="/assets/home/tool-partner/mobilityhubecosystem.png"
                />
              </div>
              <div className="enabler-partner">
                <h6>in cooperation with </h6>
                <img
                  alt="UnternehmerTUM"
                  title="Digital Product School is a program by UnternehmerTUM"
                  className="tool-partner__content__logo"
                  src="/assets/home/tool-partner/tum.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ToolPartner;
