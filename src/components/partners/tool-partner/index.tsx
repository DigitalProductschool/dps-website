import * as React from 'react';

class ToolPartner extends React.Component {
  render() {
    return (
      <section className="tool-partner u-content-wrapper">
        <div className="tool-partner__content u-content">
          <h3 className="u-title uppercase">TOOL PARTNERS</h3>
          <div className="tool-partner__content__logos">
            <img
              alt="Eyequant"
              title="Eyequant, tool partner of Digital Product School"
              className="tool-partner__content__logo"
              src="/assets/home/tool-partner/eyequant.webp"
            />
            <img
              alt="Invision"
              title="Invision, tool partner of Digital Product School"
              className="tool-partner__content__logo"
              src="/assets/home/tool-partner/invision.webp"
            />
            <img
              alt="github"
              title="github, tool partner of Digital Product School"
              className="tool-partner__content__logo"
              src="/assets/home/tool-partner/github.webp"
            />
            <img
              alt="TAWNY"
              title="TAWNY, tool partner of Digital Product School"
              className="tool-partner__content__logo"
              src="/assets/home/tool-partner/tawny.webp"
            />
            <img
              alt="UXPIN"
              title="UXPIN, tool partner of Digital Product School"
              className="tool-partner__content__logo"
              src="/assets/home/tool-partner/uxpin.webp"
            />
          </div>
          <div
            style={{
              marginTop: '120px',
              marginBottom: '60px',
            }}
          >
            <h3 className="u-title uppercase">ENABLERS &amp; SUPPORTERS</h3>
            <div className="enabler-partner-wrapper">
              <div className="enabler-partner">
                <h6>part of the </h6>
                <div>
                  <img
                    alt="Mobility Hub"
                    title="Digital Product School is part of the Digital Hub Mobility by UnternehmerTUM"
                    className="tool-partner__content__logo"
                    src="/assets/home/tool-partner/newmobilityhub.webp"
                  />
                </div>
              </div>

              <div className="enabler-partner">
                <h6>in cooperation with </h6>
                <img
                  alt="Technical University of Munich (TUM)"
                  title="Digital Product School is conducted in cooperation with the Technical University of Munich (TUM)"
                  className="tool-partner__content__logo"
                  src="/assets/home/tool-partner/tum.webp"
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
