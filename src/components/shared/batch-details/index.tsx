import * as React from 'react';
import { getFirebase } from '../../../firebase/firebase';

interface BatchDetailsProps {
  isCurrentOpenApplications: boolean;
}

class BatchDetails extends React.Component<BatchDetailsProps> {
  constructor(props: BatchDetailsProps) {
    super(props);
    this.state = { batchDetails: [] };
  }

  getBatchDate(batchDate) {
    let shortMonthName = new Intl.DateTimeFormat('en-US', { month: 'short' })
      .format;
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
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

  isApplicationPhaseOpen(applicationStartDate) {
    const today = new Date();
    let givenDate = applicationStartDate.toDate();
    return givenDate <= today;
  }

  render() {
    if (this.props.isCurrentOpenApplications) {
      let displayCurrentBatches = this.state.batchDetails.map(
        function(batch) {
          if (this.isApplicationPhaseOpen(batch.appStartDate))
            return (
              <span>
                <b>
                  {`#Batch #${batch.batchNumber}: ${this.getBatchDate(
                    batch.startDate
                  )} to ${this.getBatchDate(batch.endDate)} `}
                </b>
                {`(Applications open until ${this.getBatchDate(
                  batch.appEndDate
                )})`}
                <br />
              </span>
            );
        }.bind(this)
      );

      return <p>{displayCurrentBatches}</p>;
    } else {
      let displayAllBatches = this.state.batchDetails.map(
        function(batch) {
          if (this.isApplicationPhaseOpen(batch.appStartDate))
            return (
              <span>
                <b>
                  {`#Batch #${batch.batchNumber}: ${this.getBatchDate(
                    batch.startDate
                  )} to ${this.getBatchDate(batch.endDate)} `}
                </b>
                {`(Applications open until ${this.getBatchDate(
                  batch.appEndDate
                )})`}
                <br />
              </span>
            );
          else
            return (
              <span>
                <b>
                  {`#Batch #${batch.batchNumber}: ${this.getBatchDate(
                    batch.startDate
                  )} to ${this.getBatchDate(batch.endDate)} `}
                </b>
                {`(Application phase: ${this.getBatchDate(
                  batch.appStartDate
                )} to ${this.getBatchDate(batch.appEndDate)})`}
                <br />
              </span>
            );
        }.bind(this)
      );

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
