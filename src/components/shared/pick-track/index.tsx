import * as React from 'react';
import BatchDetails from '../batch-details/index';

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
            <li key="pm" className="pick-track__track">
              <a href="/apply/product-management/">
                <div className="pick-tracks__track__image-wrapper">
                  <div className="pick-tracks__track__image pick-tracks__track__image--pm" />

                  <img
                    alt="pm-icon"
                    className="pick-tracks__track__icon"
                    src="/assets/shared/pick-track/pm-icon.png"
                    style={active === 'pm' ? { opacity: 0.1 } : {}}
                  />
                </div>
              </a>
              <p className="pick-track__track__description">
                <a className="u-link" href="/apply/product-management/">
                  <span> Product Managers </span>
                </a>{' '}
                are responsible for defining a product that solves discovered
                problems and driving decision-making. They also take care of the
                team's resources. <br />
                <a className="u-link" href="/apply/product-management/">
                  <span>More ...</span>
                </a>{' '}
              </p>
              <a
                className="pick-track__track__button pick-track__track__button--pm u-button u-button--reversed"
                href="/application/product-management/"
                onMouseOver={() => this.setState({ active: 'pm' })}
                onMouseOut={() => this.setState({ active: null })}
              >
                Apply as PM
              </a>
            </li>

            <li key="ixd" className="pick-track__track">
              <a href="/apply/interaction-design/">
                <div className="pick-tracks__track__image-wrapper">
                  <div className="pick-tracks__track__image pick-tracks__track__image--ixd" />

                  <img
                    alt="ixd-icon"
                    className="pick-tracks__track__icon"
                    src="/assets/shared/pick-track/ixd-icon.png"
                    style={active === 'ixd' ? { opacity: 0.1 } : {}}
                  />
                </div>
              </a>
              <p className="pick-track__track__description">
                <a className="u-link" href="/apply/interaction-design/">
                  <span>Interaction Designers</span>
                </a>{' '}
                understand how users and technology communicate with each other
                and focus on designing engaging interfaces with well thought out
                behaviours.
                <br />
                <a className="u-link" href="/apply/interaction-design/">
                  <span>More ...</span>
                </a>{' '}
              </p>
              <a
                className="pick-track__track__button pick-track__track__button--ixd u-button u-button--reversed"
                href="/application/interaction-design/"
                onMouseOver={() => this.setState({ active: 'ixd' })}
                onMouseOut={() => this.setState({ active: null })}
              >
                Apply as IxD
              </a>
            </li>
            <li key="se" className="pick-track__track">
              <a href="/apply/software-engineering/">
                <div className="pick-tracks__track__image-wrapper">
                  <div className="pick-tracks__track__image pick-tracks__track__image--se" />

                  <img
                    alt="se-icon"
                    className="pick-tracks__track__icon"
                    src="/assets/shared/pick-track/se-icon.png"
                    style={active === 'se' ? { opacity: 0.1 } : {}}
                  />
                </div>
              </a>
              <p className="pick-track__track__description">
                <a className="u-link" href="/apply/software-engineering/">
                  <span>Software Engineers</span>
                </a>{' '}
                bring ideas to life through coding. They engineer systems that
                are scalable, secure and usable. They do amazing things that
                look like magic to others.
                <br />
                <a className="u-link" href="/apply/software-engineering/">
                  <span>More ...</span>
                </a>{' '}
              </p>
              <a
                className="pick-track__track__button pick-track__track__button--se u-button u-button--reversed"
                href="/application/software-engineering/"
                onMouseOver={() => this.setState({ active: 'se' })}
                onMouseOut={() => this.setState({ active: null })}
              >
                Apply as SE
              </a>
            </li>
            <li key="ai" className="pick-track__track">
              <a href="/apply/artificial-intelligence/">
                <div className="pick-tracks__track__image-wrapper">
                  <div className="pick-tracks__track__image pick-tracks__track__image--ai" />

                  <img
                    alt="ai-icon"
                    className="pick-tracks__track__icon"
                    src="/assets/shared/pick-track/ai-icon.png"
                    style={active === 'ai' ? { opacity: 0.1 } : {}}
                  />
                </div>
              </a>
              <p className="pick-track__track__description">
                <a className="u-link" href="/apply/artificial-intelligence/">
                  <span>Artificial Intelligence Engineers</span>
                </a>{' '}
                use algorithms to identify data patterns, build self-learning
                systems, automate repetitive work and take a product to a whole new level.<br />
                <a className="u-link" href="/apply/artificial-intelligence/">
                  <span>More ...</span>
                </a>{' '}
              </p>
              <a
                className="pick-track__track__button pick-track__track__button--ai u-button u-button--reversed"
                href="/application/artificial-intelligence/"
                onMouseOver={() => this.setState({ active: 'ai' })}
                onMouseOut={() => this.setState({ active: null })}
              >
                Apply as AI
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
      return (
        <p className="pick-track__description">
          There are three batches per year, usually starting in January, May,
          and September.
          <br />
          <b>Dates and deadlines of the upcoming batches:</b> <br />
          <BatchDetails isCurrentOpenApplications={false} />
        </p>
      );
    } else {
      return (
        <p className="pick-track__description">
          Our teams are »cross-functional«. This means that product managers,
          interaction designers, software engineers and artificial intelligence
          engineers work together to find out what the user needs and to build
          the product.
        </p>
      );
    }
  }
}

export default PickTrack;
