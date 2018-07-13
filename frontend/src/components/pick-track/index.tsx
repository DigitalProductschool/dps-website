import * as React from 'react';


interface IPickTrackState {
  active: 'pm' | 'se' | 'ai' | 'ixd' | null;
}

class PickTrack extends React.Component<{}, IPickTrackState> {
  constructor(props: {}) {
    super(props);
    this.state = { active: null };
  }

  render() {
    const { active } = this.state;

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
                <img className="pick-tracks__track__icon" src="/assets/pm-icon.png" style={active === 'pm' ? { opacity: 0 } : {}} />
              </div>
              <p className="pick-track__track__description">
                <b> Product Managers </b> are responsible for defining a product that solves discovered problems
                and driving decision-making. They also take care of the team's ressources.
              </p>
              <button 
                className="pick-track__track__button pick-track__track__button--pm u-button u-button--reversed"
                onMouseOver={() => this.setState({ active: 'pm' })}
                onMouseOut={() => this.setState({ active: null })}
              > 
                APPLY AS PM 
              </button>
            </li>
            <li className="pick-track__track">
              <div className="pick-tracks__track__image-wrapper">
                <div className="pick-tracks__track__image pick-tracks__track__image--ixd" />
                <img className="pick-tracks__track__icon" src="/assets/ixd-icon.png" style={active === 'ixd' ? { opacity: 0 } : {}} />
              </div>
              <p className="pick-track__track__description">
                <b> Interaction Designers </b> understand how users and technology communicate with each other and focus
                on designing engaging interfaces with well thought out behaviors.
              </p>
              <button 
                className="pick-track__track__button pick-track__track__button--ixd u-button u-button--reversed"
                onMouseOver={() => this.setState({ active: 'ixd' })}
                onMouseOut={() => this.setState({ active: null })}
              > 
                APPLY AS IxD 
              </button>
            </li>
            <li className="pick-track__track">
              <div className="pick-tracks__track__image-wrapper">
                <div className="pick-tracks__track__image pick-tracks__track__image--se" />
                <img className="pick-tracks__track__icon" src="/assets/se-icon.png" style={active === 'se' ? { opacity: 0 } : {}} />
              </div>
              <p className="pick-track__track__description">
                <b> Software Engineers </b> bring ideas to life through coding. They engineer systems that are scalable, secure and usable.
                They do amazing things that look like magic to others.
              </p>
              <button 
                className="pick-track__track__button pick-track__track__button--se u-button u-button--reversed"
                onMouseOver={() => this.setState({ active: 'se' })}
                onMouseOut={() => this.setState({ active: null })}
              > 
                APPLY AS SE 
              </button>
            </li>
            <li className="pick-track__track">
              <div className="pick-tracks__track__image-wrapper">
                <div className="pick-tracks__track__image pick-tracks__track__image--ai" />
                <img className="pick-tracks__track__icon" src="/assets/ai-icon.png" style={active === 'ai' ? { opacity: 0 } : {}} />
              </div>
              <p className="pick-track__track__description">
                <b> Artificial Intelligence Engineers </b> use technology to identify data patterns, build self-learning systems and automate repetitive work. 
                By doing this they take a product to a whole new level.
              </p>
              <button 
                className="pick-track__track__button pick-track__track__button--ai u-button u-button--reversed"
                onMouseOver={() => this.setState({ active: 'ai' })}
                onMouseOut={() => this.setState({ active: null })}
              > 
                  APPLY AS AI 
              </button>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default PickTrack;
