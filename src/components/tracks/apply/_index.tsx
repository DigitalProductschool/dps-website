import * as React from 'react';
import { getFirebase } from '../../../../firebase-functions/firebase';
import * as moment from 'moment';

interface IHeaderProps {
  name: string;
  url: string;
}

// this component will be thrown away, so quick & dirty
class Apply extends React.Component<IHeaderProps, {}> {
  constructor() {
    super();
    this.state = {
      batchDetails: [],
    };
  }

  componentDidMount() {
    const firebaseApp = import('firebase/app');
    const firebaseDatabase = import('firebase/firestore');
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
                  startDate: doc
                    .data()
                    .startDate.toDate()
                    .toString(),
                  endDate: doc
                    .data()
                    .endDate.toDate()
                    .toString(),
                  appStartDate: doc
                    .data()
                    .appStartDate.toDate()
                    .toString(),
                  appEndDate: doc
                    .data()
                    .appEndDate.toDate()
                    .toString(),
                },
              ],
            }))
          )
        );
    });
  }

  render() {
    const { name, url } = this.props;
    let displayBatch = this.state.batchDetails.map(batch => (
      <span key={batch.batchID}>
        # Batch #{batch.batchNumber}: {moment(batch.startDate).format('ll')} to{' '}
        {moment(batch.endDate).format('ll')} (Application phase:{' '}
        {moment(batch.appStartDate).format('ll')} to{' '}
        {moment(batch.appEndDate).format('ll')}) <br />
        <br />
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
              {' '}
              {`Apply now as ${name} at Digital Product School and take in the experience concentrate in digital product development!`}{' '}
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
