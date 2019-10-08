import * as React from 'react';
import { getFirebase } from '../../../firebase/firebase';

import Nav from '../../shared/nav/index';

type trackData = {
  title: string;
  description1: string;
};

const data: {
  se: trackData;
  pm: trackData;
  ixd: trackData;
  ai: trackData;
} = {
  se: {
    title: 'Software Engineer',
    description1:
      'Apply as Software Engineer now and take in the experience concentrate in digital product development',
  },
  ai: {
    title: 'AI Engineer',
    description1:
      'Apply as AI Engineer now and take in the experience concentrate in digital product development',
  },
  pm: {
    title: 'Product Manager',
    description1:
      'Apply as Product Manager now and take in the experience concentrate in digital product development',
  },
  ixd: {
    title: 'Interaction Designer',
    description1:
      'Apply as Interaction Designer now and take in the experience concentrate in digital product development',
  },
};

interface IHeaderProps {
  track: 'se' | 'pm' | 'ixd' | 'ai';
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

class Header extends React.Component<IHeaderProps, {}> {
  constructor(props: IHeaderProps) {
    super(props);
    this.state = { batchDetails: [] };
  }

  render() {
    const { track } = this.props;
    let displayBatch = this.state.batchDetails.map(
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

    return (
      <section
        className={`applications__header u-content-wrapper applications__header--${track}`}
      >
        <Nav logo="/assets/tracks/dps-logo-white.png" />
        <div className="applications__header-content u-content">
          <h1 className="applications__header-content__title">
            APPLY AS <br /> {data[track].title}
          </h1>
          <br />
          <p>Currently you can apply for the following batches:</p>
          <p>{displayBatch}</p>
        </div>
      </section>
    );
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

export default Header;
