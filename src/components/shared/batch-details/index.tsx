import * as React from 'react';
import { getFirebase } from '../../../firebase/firebase';

interface BatchDetailsProps {
  isCurrentOpenApplications: boolean;
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

function dateCompare(date) {
  let today = new Date();
  let givenDate = date.toDate();
  return givenDate <= today;
}

class BatchDetails extends React.Component<BatchDetailsProps> {
  constructor(props: BatchDetailsProps) {
    super(props);
    this.state = { batchDetails: [] };
  }

  render() {
    let displayAllBatches = this.state.batchDetails.map(batch => (
      <span>
        <b>
          {`#Batch #${batch.batchNumber}: ${getBatchDate(
            batch.startDate
          )} to ${getBatchDate(batch.endDate)} `}
        </b>
        {`(Application phase: ${getBatchDate(
          batch.appStartDate
        )} to ${getBatchDate(batch.appEndDate)})`}
        <br />
      </span>
    ));

    let displayCurrentBatches = this.state.batchDetails.map(
      function(batch) {
        if (dateCompare(batch.appStartDate))
          return (
            <span>
              <b>
                {`#Batch #${batch.batchNumber}: ${getBatchDate(
                  batch.startDate
                )} to ${getBatchDate(batch.endDate)} `}
              </b>
              {`(Application phase: ${getBatchDate(
                batch.appStartDate
              )} to ${getBatchDate(batch.appEndDate)})`}
              <br />
            </span>
          );
      }.bind(this)
    );

    if (this.props.isCurrentOpenApplications) {
      return <p>{displayCurrentBatches}</p>;
    } else {
      return <p>{displayAllBatches}</p>;
    }
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
}

export default BatchDetails;
