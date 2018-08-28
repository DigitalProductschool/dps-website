import * as React from 'react';

class ApplyNow extends React.Component {
  render() {
    return (
      <section className="apply-now u-content-wrapper">
        <div className="apply-now__content u-content">
          <h2 className="u-title">Apply now and Become Experienced!</h2>
          <div className="apply-now__content__description u-grid-4-6">
            <p className="u-text">
              You can be the best graduate of all time, but when you go to your first job after uni, you're a newbie. Maybe you have heard that modern tech companies nowadays work in "agile teams" and no longer in departments and divisions. Instead of top-down management there are flat hierarchies and that the teams organize themselves and their projects on their own. You also might have heard about "agile", "Scrum" and "Design Thinking". But what's that in reality? How does it work in the real world of world?
            </p>
            <img className="apply-now__content__description__image u-image" src="/assets/apply/apply-now-desc.JPG" />
          </div>
        </div>
      </section>
    );
  }
}

export default ApplyNow;
