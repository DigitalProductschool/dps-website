import * as React from 'react';

class AfterDps extends React.Component {

  render() {
    return (
      <section className="after-dps u-content-wrapper">
        <div className="after-dps__content u-content">
          <h2 className="u-title">What happens with the products?</h2>
          <div className="after-dps__content__companies">
            <img className="after-dps__content__companies__image u-image" src="/assets/after-dps-companies.jpg" />
            <p className="u-text">
              The partner companies decide how to proceed with the products created at DPS. Sometimes, they create a spin-off to give space to a fresh start-up. Or maybe they integrate the results into an already existing project. Some decide to make the code public.
            </p>
          </div>
          <div className="after-dps__content__wild">
            <p className="u-text">
              Regarding the Wild Teams – it is totally up to them how their journey continues. Maybe the team will decide on founding a start-up (like MAIoT did) or they will take their product to develop it further with people who are not part of DPS. No matter what the teams decide – we give all the support to create the chance to spark something great.
            </p>
            <img className="after-dps__content__wild__image u-image" src="/assets/after-dps-wild.jpg" />
          </div>
        </div>
      </section>
    )
  }
}

export default AfterDps;
