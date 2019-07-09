import * as React from 'react';

interface IPickTrackProps {
  isApplyNowVersion: boolean;
}

interface IPickTrackState {
  active: 'pm' | 'se' | 'ai' | 'ixd' | null;
}

class PickTrack extends React.Component<IPickTrackProps, IPickTrackState> {
  constructor(props: IPickTrackProps) {
    super(props);
    this.state = { active: null };
  }

  render() {
    const { active } = this.state;

    return (
      <section className="pick-track u-content-wrapper">
        <div className="pick-track__content u-content">
          <h3 className="pick-track__title u-title"> {this.renderTitle()} </h3>
          {this.renderDescription()}
          <ul className="pick-track__tracks">
            <li className="pick-track__track">

            <a
              href="/apply/product-management/"
            >
              <div className="pick-tracks__track__image-wrapper">

                <div className="pick-tracks__track__image pick-tracks__track__image--pm" />

                  <img alt="pm-icon" className="pick-tracks__track__icon" src="/assets/shared/pick-track/pm-icon.png" style={active === 'pm' ? { opacity: 0.1 } : {}} />

              </div>
              </a>
              <p className="pick-track__track__description">
                <b> Product Managers </b> are responsible for defining a product that solves discovered problems
                and driving decision-making. They also take care of the team's resources.
              </p>
              <a
                className="pick-track__track__button pick-track__track__button--pm u-button u-button--reversed"
                href="/apply/product-management/"
                onMouseOver={() => this.setState({ active: 'pm' })}
                onMouseOut={() => this.setState({ active: null })}
              >
                APPLY AS PM
              </a>
            </li>

            <li className="pick-track__track">
            <a
              href="/apply/interaction-design/"
            >
              <div className="pick-tracks__track__image-wrapper">

                <div className="pick-tracks__track__image pick-tracks__track__image--ixd" />

                <img alt="ixd-icon" className="pick-tracks__track__icon" src="/assets/shared/pick-track/ixd-icon.png" style={active === 'ixd' ? { opacity: 0.1 } : {}} />

              </div>
              </a>
              <p className="pick-track__track__description">
                <b> Interaction Designers </b> understand how users and technology communicate with each other and focus
                on designing engaging interfaces with well thought out behaviours.
              </p>
              <a
                className="pick-track__track__button pick-track__track__button--ixd u-button u-button--reversed"
                href="/apply/interaction-design/"
                onMouseOver={() => this.setState({ active: 'ixd' })}
                onMouseOut={() => this.setState({ active: null })}
              >
                APPLY AS IxD
              </a>
            </li>
            <li className="pick-track__track">
            <a
              href="/apply/software-engineering/"
            >
              <div className="pick-tracks__track__image-wrapper">

                <div className="pick-tracks__track__image pick-tracks__track__image--se" />

                <img alt="se-icon" className="pick-tracks__track__icon" src="/assets/shared/pick-track/se-icon.png" style={active === 'se' ? { opacity: 0.1 } : {}} />

              </div>
              </a>
              <p className="pick-track__track__description">
                <b> Software Engineers </b> bring ideas to life through coding. They engineer systems that are scalable, secure and usable.
                They do amazing things that look like magic to others.
              </p>
              <a
                className="pick-track__track__button pick-track__track__button--se u-button u-button--reversed"
                href="/apply/software-engineering/"
                onMouseOver={() => this.setState({ active: 'se' })}
                onMouseOut={() => this.setState({ active: null })}
              >
                APPLY AS SE
              </a>
            </li>
            <li className="pick-track__track">
            <a
              href="/apply/artificial-intelligence/"
            >

              <div className="pick-tracks__track__image-wrapper">

                <div className="pick-tracks__track__image pick-tracks__track__image--ai" />

                <img alt="ai-icon" className="pick-tracks__track__icon" src="/assets/shared/pick-track/ai-icon.png" style={active === 'ai' ? { opacity: 0.1 } : {}}/>

              </div>
              </a>
              <p className="pick-track__track__description">
                <b> Artificial Intelligence Engineers </b> use algorithms to identify data patterns, build self-learning systems and automate repetitive work.
                By doing this they take a product to a whole new level.
              </p>
              <a
                className="pick-track__track__button pick-track__track__button--ai u-button u-button--reversed"
                href="/apply/artificial-intelligence/"
                onMouseOver={() => this.setState({ active: 'ai' })}
                onMouseOut={() => this.setState({ active: null })}
              >
                  APPLY AS AI
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }

  renderTitle() {
    if (this.props.isApplyNowVersion) {
      return 'Pick your track and apply now!';
    } else {
      return 'Pick your track';
    }
  }

  renderDescription() {
    if (this.props.isApplyNowVersion) {
      return <p className="pick-track__description">
          There are three batches per year, usually starting in January, May, and September.<br />
          <b>Currently, you can apply for the following batches:</b> <br />
          <b># Batch #8: Sept. 10 to Nov. 29, 2019</b> (Application deadline: July 14, 2019) <br />
          <b># Batch #9: Jan. 7 to March 27, 2020</b> (Application deadline: October 13, 2019)
        </p>;
    } else {
      return <p className="pick-track__description">
        Our teams are »cross-functional«. This means that product managers, interaction designers,
        software engineers and artificial intelligence engineers work together to find out what the
        user needs and to build the product.
      </p>;
    }
  }
}

export default PickTrack;
