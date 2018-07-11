import * as React from 'react';


const partnerLogos = [
  'audi-logo.png',
  'bmw.png',
  'daimler.png',
  'facebook.png',
  'ibm.png',
  'nokia.png',
  'adac.png',
  'sap.png',
  'swm.png',
  'infineon.png',
  'man.png',
  'telekom.svg',
  'tuv.png',
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
            {partnerLogos.map(item => <li className="industry-partners__logo"> <img src={`/assets/${item}`} /> </li> )}
          </ul>
        </div>
      </div>
    );
  }
}

export default IndustryPartners;
