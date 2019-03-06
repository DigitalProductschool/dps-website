import * as React from 'react';

class ApplyNow extends React.Component {
  render() {
    return (
      <section className="apply-now u-content-wrapper">
        <div className="apply-now__content u-content">
          <h2 className="u-title">Become an experienced digital product maker!</h2>
          <div className="apply-now__content__description u-grid-4-6">
            <p className="u-text">
              Digital Product School will show you how you act in an autonomous and interdisciplinary team and what "agile", "Scrum" and "Design Thinking" and all the other buzzwords mean. You will experience how it is to work with real start-up flair and how to develop digital products that solve real user problems in a lean way.
            </p>
            <img alt="apply-now-image" className="apply-now__content__description__image u-image" src="/assets/apply/apply-now-desc.JPG" />
          </div>
        </div>
      </section>
    );
  }
}

export default ApplyNow;
