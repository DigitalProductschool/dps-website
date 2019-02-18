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
      <b> {`Apply now as a ${trackName} at Digital Product School and take in the experience concentrate in digital product development!`} </b>
    </p>
    <br />
    <p>
      Currently, you can apply for the following batches: <br />
      - Batch #7: May 2 to July 26, 2019
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
  );
}
