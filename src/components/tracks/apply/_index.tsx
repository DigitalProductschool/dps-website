import * as React from 'react';

interface IHeaderProps {
  name: string;
  url: string;
}

// this component will be thrown away, so quick & dirty
class Apply extends React.Component<IHeaderProps, {}> {
  render() {
    const { name, url } = this.props;

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
              {' '}
              {`Apply now as ${name} at Digital Product School and take in the experience concentrate in digital product development!`}{' '}
            </b>
          </p>
          <br />
          <p>
            Dates and deadlines of the upcoming batches:<br /><br />
              # Batch #9: Jan. 7 to March 27, 2020 (Application deadline: October 13, 2019)  <br /><br />
              # Batch #10: May 4 to July 24, 2020 (Application phase starts in October 2019) <br /><br />
              # Batch #11: Sept. 8 to Nov. 27, 2020 (Application phase starts in February 2020)
          </p>
          <div className="tracks__apply-button-wrapper">
            <a
              className="u-button u-button__apply u-button--reversed tracks__apply-button"
              href={`/application/${url}`}
            >
              Apply as {name}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Apply;
