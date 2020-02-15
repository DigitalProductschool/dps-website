import * as React from 'react';
import BatchDetails from '../../shared/batch-details/index';
import { ApplyButton } from '../header/_index';

interface IHeaderProps {
  name: string;
  url: string;
  track: string;
}

// this component will be thrown away, so quick & dirty
class Tracks extends React.Component<IHeaderProps, {}> {
  render() {
    const { name, url, track } = this.props;

    return (
      <div className="u-content-wrapper">
        <div
          className="u-content"
          style={{
            marginTop: '120px',
          }}
        >
          <h3
            style={{
              margin: '50px 0',
            }}
          >
            BE PART OF DPS
          </h3>
          <p>
            <b>
              {`Apply now as ${name} at Digital Product School and take in the experience concentrate in digital product development!`}
            </b>
          </p>
          <br />
          <p>
            Dates and deadlines of the upcoming batches:
            <br />
            <br />
            <BatchDetails isCurrentOpenApplications={false} />
          </p>
          <div className="tracks__apply-button-wrapper">
            <ApplyButton
              {...this.props}
              className="u-button u-button__apply u-button--reversed tracks__apply-button"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Tracks;
