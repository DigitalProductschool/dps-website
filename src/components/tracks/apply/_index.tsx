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
            Currently, you can apply for the following batches: <br />
            <br /># Batch #8: Sept. 10 to Nov. 29, 2019 (Application deadline:
            July 14, 2019)
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
