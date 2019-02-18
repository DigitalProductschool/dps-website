import * as React from 'react';

class Adac extends React.Component {
  render() {
    return (
      <section className="adac u-content-wrapper">
        <div className="adac__content u-content">
          <h3 className="u-title">DPS IN 7 MINUTES</h3>
          <div className="adac__content__desc">Our partner ADAC made a small documentary about DPS. Maybe you have 7 spare minutes to watch it. :-)</div>
          <div className="u-youtube">
            <iframe src="https://www.youtube-nocookie.com/embed/OPjJJ6jMx5A?rel=0" title="video: ADAC about Digital Product School" sandbox='allow-scripts'></iframe>
          </div>
        </div>
      </section>
    );
  }
}

export default Adac;
