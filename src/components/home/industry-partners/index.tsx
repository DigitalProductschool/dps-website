import * as React from 'react';


const partnerLogos = [
  'audi.jpg',
  'bmw.jpg',
  'fb.jpg',
  'nokia.jpg',
  'sap.jpg',
  'swm.jpg',
  'adac.jpg',
  'infineon.jpg',
  'telekom.jpg',
  'tuev.jpg',
];

class IndustryPartners extends React.Component {

  render() {
    return (
      <div className="industry-partners u-content-wrapper">
        <div className="industry-partners u-content">
          <h3 className="industry-partners__title u-title">
            Our Industry Partners
          </h3>
          <p className="industry-partners__description">
            Our industry partners set the challenges the teams will work on.
            And they provide some of the team members for our so-called »Company Teams«.
            These teams work with talents like you to find out how far they can get within
            three months – all the while working lean and agile. Our partners also support
            the teams with technology, access to data and interview partners.
          </p>
          <ul className="industry-partners__logos">
            {partnerLogos.map(item => <li key={item} className="industry-partners__logo"> <img alt={`industry-partner-logo-${item}`} src={`/assets/home/industry-partners/${item}`} /> </li> )}
          </ul>
        </div>
      </div>
    );
  }
}

export default IndustryPartners;
