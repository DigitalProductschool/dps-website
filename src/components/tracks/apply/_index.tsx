import * as React from 'react';

const trackNames = {
  pm: 'Product Manager',
  ixd: 'Interaction Designer',
  ai: 'AI Engineer',
  se: 'Software Engineer',
}

// this component will be thrown away, so quick & dirty
export default (props: { track: "pm" | "ai" | "se" | "ixd" }) => {
  let trackName = trackNames[props.track];

  return (
    <div className="u-content-wrapper">
      <div
        className="u-content"
        style={{
          marginTop: "120px",
        }}
      >
      <h3
        style={{
          margin: "50px 0",
        }}
      > 
        BE PART OF DPS 
      </h3>
      <p> 
        <b> {`Apply now as ${trackName} at Digital Product School and take in the experience concentrate in digital product development!`} </b>
      </p>
      <br />
      <p>
        Currently, you can apply for the following batches: <br /><br />
        # Batch #9: Jan. 7 to March 27, 2020 (Application deadline: October 13, 2019)  <br /><br />
        # Batch #10: May 4 to July 24, 2020 (Application phase starts in December 2019) <br /><br />
        # Batch #11: Sept. 8 to Nov. 27, 2020 (Application phase starts in May 2020)
      </p>
      <div className="tracks__apply-button-wrapper">
        <a
          className="u-button u-button__apply u-button--reversed tracks__apply-button" 
          href={`https://utum.typeform.com/to/qkkFHF?role=${props.track}&ref=website&entry-point=track-page-bottom`}
        >
          Apply as {trackName}
        </a>
      </div>
    </div>
  
  </div>
  );
}
