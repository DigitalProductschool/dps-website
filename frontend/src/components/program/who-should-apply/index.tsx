import * as React from 'react';

class WhoShouldApply extends React.Component {
  render() {
    return (
      <section className="who-should-apply u-content-wrapper">
        <div className="who-should-apply__content u-content">
          <h2 className="u-title">Who should apply</h2>
          <div className="who-should-apply__content__description">
            <p className="u-text">
              At DPS it is all about learning: How to discover a proper problem, how to validate a solution, how to collaborate in an agile team, how to behave as a teamplayer and, last but not least, getting to know a lot of state-of-the-art methodologies, techniques and tools to develop a digital product like a real lean start-up. 
              <br /><br />
              So, if you are highly motivated and keen on improving your professional as well as your personal skills, apply for one of our four roles.
              <br /><br />
              However, if you are applying for the roles of software engineer, data scientist or interaction designer, you should have the fundamental skills in your role, e.g. a Bachelor degree.
            </p>
            <img src="/assets/who-should-apply-desc.jpg" className="u-image" />
          </div>
        </div>
      </section>
    )
  }
}

export default WhoShouldApply;
