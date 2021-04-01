import * as React from 'react';

interface WhoCanJoinProps {
  url: string;
}

class WhoCanJoin extends React.Component<WhoCanJoinProps, {}> {
  render() {
    return (
      <section className="who-can-join u-content-wrapper">
        <div className="who-can-join__content u-content">
          <h2 className="u-title uppercase">Who can join?</h2>
          <div className="who-can-join__content__description">
            <p className="u-text">
              The conference is from the alumni of Digital Product School for
              the alumni. But we are not a closed group! We invite everyone
              interested in state-of-the-art digital product development and the
              Digital Product School to join and have two inspirational days
              together!
              <br />
            </p>
            <p className="u-text">
              <a
                className="u-button u-button__apply who-can-join__button"
                href={this.props.url}
                target="_blank"
              >
                Get your ticket here!
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default WhoCanJoin;
