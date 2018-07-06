import * as React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <section className="footer">
              <div className="footer__content u-content">
                <img className="footer__logo" src="/assets/dps-logo-white.svg" />
                <div className="footer__content__runby">
                  DPS is a program run by 
                </div>
              </div>
            </section>
        );
    }
}

export default Footer;
