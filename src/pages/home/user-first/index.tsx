import * as React from 'react';

class UserFirst extends React.Component {
  render() {
    return (
      <section className="user-first u-content-wrapper u-section-margin-top">
        <div className="user-first__content u-content">
          <h3 className="user-first__content__title">
            Users first. <span className="u-outline u-outline--reversed"> Always! </span>
          </h3>
          <div className="user-first__content__description">
            <p>
              We are user-centric. Our teams find solutions to real problems they've validated before. And they rule out bad ideas through experiments.
              The good ideas are then built in an agile manner.
            </p>

            <p>
              Teams work either on problem spaces provided by our partner companies or they tackle their own problems as a so-called »Wild Team«.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default UserFirst;
