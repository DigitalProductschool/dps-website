import * as React from 'react';
import BatchDetails from '../../shared/batch-details/batch-details';
import { ApplyButton } from '../header/_index';

interface IHeaderProps {
  name: string;
  description: string;
  url: string;
  track: string;
}

// this component will be thrown away, so quick & dirty
class Tracks extends React.Component<IHeaderProps, {}> {
  render() {
    const { description } = this.props;

    return (
      <div className="u-content-wrapper">
        <div
          className="u-content"
          style={{
            marginTop: '60px',
          }}
        >
          <div className="bePart-content__title">BE PART OF DPS</div>

          <b className="bePart-content__subtitle">{description}</b>

          <br />
          <p className="bePart-content__batchDetails">
            Dates and deadlines of the upcoming batches:
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
