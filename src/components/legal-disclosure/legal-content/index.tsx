import * as React from 'react';
import Seo from '../../seo';

class LegalContent extends React.Component {
  render() {
    return (
      <section className="legal u-content-wrapper">
        <Seo />
        <div className="legal__content u-content">
          <h1>LEGAL NOTICE</h1>

          <p>Digital Product School is a program run by UnternehmerTUM GmbH.</p>

          <h3>INFORMATION IN ACCORDANCE WITH SECTION 5 TMG</h3>
          <p>
            UnternehmerTUM GmbH
            <br />
            Lichtenbergstr. 6<br />
            85748 Garching b. München
            <br />
          </p>

          <h3>REPRESENTED BY</h3>
          <p>
            Prof. Dr. Helmut Schönenberger (CEO)
            <br />
            Claudia Frey
            <br />
            Stefan Drüssler
            <br />
            Thomas Zeller
            <br />
            Dr. Andreas Liebl
          </p>

          <h3>CONTACT INFORMATION</h3>
          <p>
            +49 89-18 94 69-0
            <br />
            +49 89-18 94 69-1199
            <br />
            <a href="mailto:hello@dpschool.io" className="u-link">
              <span>info@unternehmertum.de</span>
            </a>
          </p>

          <h3>REGISTER ENTRY</h3>
          <p>
            Entry in: Handelsregister
            <br />
            Register Court: Amtsgericht München
            <br />
            Register Number: HRB 141703
          </p>

          <h3>VAT NUMBER</h3>
          <p>
            VAT identification number in accordance with Section 27 a of the
            German VAT act
            <br />
            DE 252 789 694
          </p>

          <h3>Responsible in Accordance with Section 18 Paragraph 2 MStV</h3>
          <p>
            Prof. Dr. Helmut Schönenberger (CEO)
            <br />
            Claudia Frey
            <br />
            Stefan Drüssler
            <br />
            Thomas Zeller
            <br />
            Dr. Andreas Liebl
            <br />
            <br />
            <br />
          </p>

          <h2>DISCLAIMER</h2>

          <h3>ACCOUNTABILITY FOR CONTENT</h3>
          <p>
            The contents of our pages have been created with the utmost care.
            However, we cannot guarantee the contents' accuracy, completeness or
            topicality. According to statutory provisions, we are furthermore
            responsible for our own content on these web pages. In this matter,
            please note that we are not obliged to monitor the transmitted or
            saved information of third parties, or investigate circumstances
            pointing to illegal activity. Our obligations to remove or block the
            use of information under generally applicable laws remain unaffected
            by this as per §§ 8 to 10 of the Telemedia Act (TMG).
          </p>

          <h3>ACCOUNTABILITY FOR LINKS</h3>
          <p>
            Responsibility for the content of external links (to web pages of
            third parties) lies solely with the operators of the linked pages.
            No violations were evident to us at the time of linking. Should any
            legal infringement become known to us, we will remove the respective
            link immediately.
          </p>

          <h3>COPYRIGHT</h3>
          <p>
            Our web pages and their contents are subject to German copyright
            law. Unless expressly permitted by law, every form of utilizing,
            reproducing or processing works subject to copyright protection on
            our web pages requires the prior consent of the respective owner of
            the rights. Individual reproductions of a work are only allowed for
            private use. The materials from these pages are copyrighted and any
            unauthorized use may violate copyright laws.
          </p>
        </div>
      </section>
    );
  }
}

export default LegalContent;
