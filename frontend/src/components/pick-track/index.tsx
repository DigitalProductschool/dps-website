import * as React from 'react';


class PickTrack extends React.Component {
  render() {
    return (
      <section className="pick-track u-content-wrapper">
        <div className="pick-track__content u-content">
          <h3 className="pick-track__title u-title"> Pick your track </h3>
          <p className="pick-track__description"> 
          Our teams are »cross-functional«. This means that Product Managers, Interaction Designers,
          Software Engineers and Artificial Intelligence Engineers work together to find out what the 
          user needs and to build the product.
          </p>
          <ul className="pick-track__tracks">
            <li className="pick-track__track">
              <div className="pick-tracks__track__image-wrapper">
                <div className="pick-tracks__track__image pick-tracks__track__image--pm" />
                <img className="pick-tracks__track__icon" src="/assets/pm-icon.png" />
              </div>
              <p className="pick-track__track__description">
                <b> Product Managers </b> are responsible for defining a product that solves discovered problems
                and driving decision-making. They also take care of the team's ressources.
              </p>
              <button className="pick-track__track__button u-button u-button--reversed"> APPLY AS PM </button>
            </li>
            <li className="pick-track__track">
              <div className="pick-tracks__track__image-wrapper">
                <div className="pick-tracks__track__image pick-tracks__track__image--ixd" />
                <img className="pick-tracks__track__icon" src="/assets/ixd-icon.png" />
              </div>
              <p className="pick-track__track__description">
                <b> Product Managers </b> are responsible for defining a product that solves discovered problems
                and driving decision-making. They also take care of the team's ressources.
              </p>
              <button className="pick-track__track__button u-button u-button--reversed"> APPLY AS IxD </button>
            </li>
            <li className="pick-track__track">
              <div className="pick-tracks__track__image-wrapper">
                <div className="pick-tracks__track__image pick-tracks__track__image--se" />
                <img className="pick-tracks__track__icon" src="/assets/se-icon.png" />
              </div>
              <p className="pick-track__track__description">
                <b> Product Managers </b> are responsible for defining a product that solves discovered problems
                and driving decision-making. They also take care of the team's ressources.
              </p>
              <button className="pick-track__track__button u-button u-button--reversed"> APPLY AS SE </button>
            </li>
            <li className="pick-track__track">
              <div className="pick-tracks__track__image-wrapper">
                <div className="pick-tracks__track__image pick-tracks__track__image--ai" />
                <img className="pick-tracks__track__icon" src="/assets/ai-icon.png" />
              </div>
              <p className="pick-track__track__description">
                <b> Product Managers </b> are responsible for defining a product that solves discovered problems
                and driving decision-making. They also take care of the team's ressources.
              </p>
              <button className="pick-track__track__button u-button u-button--reversed"> APPLY AS AI </button>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default PickTrack;
