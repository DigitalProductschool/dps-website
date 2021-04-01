import React from 'react';
import Section from '../../shared/components/content/section';
import Cutout from '../../shared/components/content/cutout';

interface PartnerBenefitsProps {
  data: {
    title: string;
    description1: string;
    description2: string;
    benefit1: string;
    benefit2: string;
    benefit3: string;
    benefit4: string;
  };
}

export default function PartnerBenefits(props: PartnerBenefitsProps) {
  const {
    title,
    description1,
    description2,
    benefit1,
    benefit2,
    benefit3,
    benefit4,
  } = props.data;
  return (
    <div>
      <Section
        backgroundColor={'#051048'}
        textColor={'white'}
        title={title}
        className="u-section-margin-top"
      >
        <p className="u-text">{description1}</p>
        <p className="u-text section-margin">{description2}</p>
      </Section>
      <Cutout columns={4} backgroundColor={'white'} section="benefits">
        <div className="cutout-grid__icon">
          <div />
          <img
            alt="team-icon"
            className="cutout__icon-wrapper cutout__icon-wrapper__img"
            src="/assets/challenges/partner-benefits/Team.svg"
          />
          <p className="u-text cutout__list-number">01</p>
          <p className="u-text">{benefit1}</p>
        </div>

        <div className="cutout-grid__icon">
          <div />
          <img
            alt="digital-icon"
            className="cutout__icon-wrapper cutout__icon-wrapper__img"
            src="/assets/challenges/partner-benefits/Digital.svg"
          />
          <p className="u-title cutout__list-number">02</p>
          <p className="u-text">{benefit2}</p>
        </div>

        <div className="cutout-grid__icon">
          <div />
          <img
            alt="education-icon"
            className="cutout__icon-wrapper cutout__icon-wrapper__img"
            src="/assets/challenges/partner-benefits/Education.svg"
          />
          <p className="u-text cutout__list-number">03</p>
          <p className="u-text">{benefit3}</p>
        </div>

        <div className="cutout-grid__icon">
          <div />
          <img
            alt="network-icon"
            className="cutout__icon-wrapper cutout__icon-wrapper__img"
            src="/assets/challenges/partner-benefits/Network.svg"
          />
          <p className="u-text cutout__list-number">04</p>
          <p className="u-text">{benefit4}</p>
        </div>
      </Cutout>
    </div>
  );
}
