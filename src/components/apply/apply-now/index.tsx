import * as React from 'react';

class ApplyNow extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="apply-now u-content-wrapper">
          <div className="apply-now__content u-content">
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.56)',
                zIndex: '-1',
              }}
            ></div>
            <h1 className="apply-now__content__title">
              Become an experienced digital product maker!
            </h1>
          </div>
        </section>
        <div className="apply-now__image u-content-wrapper">
          <div className="apply-now__image-content u-content">
            <div className="apply-now__image-content__image">
              <p>
                Digital Product School will show you how you act in an
                autonomous and interdisciplinary team and what "agile", "Scrum"
                and "Design Thinking" and all the other buzzwords mean. You will
                experience how it is to work with real start-up flair and how to
                develop digital products that solve real user problems in a lean
                way.
                <br />
                Find out more about{' '}
                <a href="/our-program" className="u-link">
                  <span>our program</span>
                </a>{' '}
                or apply now for one of our roles below!
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ApplyNow;
