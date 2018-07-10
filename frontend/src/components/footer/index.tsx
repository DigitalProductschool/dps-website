import * as React from 'react';

import About from './about/index';
import Contact from './contact/index';
import LinkRow from './link-row/index';

class Footer extends React.Component {
    render() {
        return (
            <section className="footer">
              <div className="footer__content u-content">
                <About />
                <Contact />
              </div>
              <LinkRow />
            </section>
        );
    }
}

export default Footer;
