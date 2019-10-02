import * as React from 'react';
import { getFirebase } from '../../../firebase/firebase';
import { ApplyButton } from '../header/_index';

interface IHeaderProps {
  name: string;
  url: string;
  track: string;
}

function getBatchDate(batchDate) {
  let shortMonthName = new Intl.DateTimeFormat('en-US', { month: 'short' })
    .format;
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let date = batchDate.toDate();
  let newdate =
    monthNames[date.getMonth()] +
    ' ' +
    date.getDate() +
    ', ' +
    date.getFullYear();
  return newdate;
}

// this component will be thrown away, so quick & dirty
class Apply extends React.Component<IHeaderProps, {}> {
  constructor(props: IHeaderProps) {
    super(props);
    this.state = {
      batchDetails: [],
    };
  }

  componentDidMount() {
    const firebaseApp = import('@firebase/app');
    const firebaseDatabase = import('@firebase/firestore');
    var currentTime = new Date();

    Promise.all([firebaseApp, firebaseDatabase]).then(([firebase]) => {
      const database = getFirebase(firebase).firestore();
      database
        .collection('batch-details')
        .where('appEndDate', '>', currentTime)
        .orderBy('appEndDate')
        .get()
        .then(snapshot =>
          snapshot.forEach(doc =>
            this.setState(prevState => ({
              batchDetails: [
                ...prevState.batchDetails,
                {
                  batchID: doc.id,
                  batchNumber: doc.data().batch,
                  startDate: doc.data().startDate,
                  endDate: doc.data().endDate,
                  appStartDate: doc.data().appStartDate,
                  appEndDate: doc.data().appEndDate,
                },
              ],
            }))
          )
        );
    });
  }

  render() {
    const { name, url, track } = this.props;

    let displayBatch = this.state.batchDetails.map(batch => (
      <span key={batch.batchID} style={{ marginTop: '15px', display: 'block' }}>
        <b>
          {`#Batch #${batch.batchNumber}: ${getBatchDate(
            batch.startDate
          )} to ${getBatchDate(batch.endDate)} `}
        </b>
        {`(Application phase: ${getBatchDate(
          batch.appStartDate
        )} to ${getBatchDate(batch.appEndDate)})`}
      </span>
    ));

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
            {displayBatch}
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

export default Apply;
