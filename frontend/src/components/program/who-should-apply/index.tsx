import * as React from 'react';

class WhoShouldApply extends React.Component {
  render() {
    return (
      <section className="who-should-apply u-content-wrapper">
        <div className="who-should-apply__content u-content">
          <h2 className="u-title">Who should apply</h2>
          <div className="who-should-apply__content__description">
            <p className="u-text">
              At DPS learning is all about collaboration, how to discover a proper problem and building it as a team. We won't teach you how to become a Software Engineer, a Data Scientist or an Interaction Designer. If you lack the fundamental skills of those roles do not apply. <br /><br />
              For Product Managers it is a bit different: They can have all sorts of backgrounds since the main skill of a great Product Manager is being able to detect business opportinities in user needs while getting the team behind a collective vision. You can only achieve this by gaining experience. If you are passionate about this, please apply! :-)
            </p>
            <img src="/assets/who-should-apply-desc.jpg" className="u-image" />
          </div>
        </div>
      </section>
    )
  }
}

export default WhoShouldApply;
