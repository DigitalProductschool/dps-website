import * as React from 'react';

import About from './about/index';
import Contact from './contact/index';
import LinkRow from './link-row/index';

interface IFooterProps {
  addSectionClass?: string;
}

class Footer extends React.Component<IFooterProps, {}> {
    render() {
      const sectionClass = this.props.addSectionClass || '';

        return (
            <section className={`footer ${sectionClass}`}>
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
