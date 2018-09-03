import * as React from 'react';

class DPSPitch extends React.Component {
  render() {
    return (
      <section className="dps-pitch u-content-wrapper u-section-margin-top">
        <div className="u-content">
          <p className="dps-pitch__content dps-pitch__content--bold">That's where Digital Product School comes in!</p>
          <p className="dps-pitch__content">
            We will show you how you act in an autonomous and interdisciplinary team and what "agile", "Scrum" and "Design Thinking" and all the other buzzwords mean.
            You will experience how it is to work with real start-up flair and how to develop digital products that solve real user problems in a lean way.
          </p>
          <p className="dps-pitch__content dps-pitch__content--small">
            Find out more about <a href="/our-program" className="u-link"><span>our program</span></a> or apply now for one of our roles below!
          </p>
        </div>
      </section>
    );
  }
}

export default DPSPitch;
