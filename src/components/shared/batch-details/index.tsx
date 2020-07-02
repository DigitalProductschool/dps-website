import * as React from 'react';
import { useEffect, useState } from 'react';
import useBatchDetails from '../useBatchDetails/index';

export default function BatchDetails(props) {
  const [batchDetails, setBatchDetails] = useState([]);
  const batchDetailsFirebase = useBatchDetails();

  useEffect(() => {
    setBatchDetails(batchDetailsFirebase);
  }, [batchDetailsFirebase]);

  console.log(batchDetailsFirebase);

  function getBatchDate(batchDate) {
    let shortMonthName = new Intl.DateTimeFormat('en-US', { month: 'short' })
      .format;
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
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

  function isApplicationPhaseOpen(applicationStartDate) {
    const today = new Date();
    let givenDate = applicationStartDate.toDate();
    return givenDate <= today;
  }

  if (props.isCurrentOpenApplications) {
    let displayCurrentBatches = batchDetails.map(
      function(batch) {
        if (isApplicationPhaseOpen(batch.appStartDate))
          return (
            <span>
              <b>
                {`#Batch #${batch.batchNumber}: ${getBatchDate(
                  batch.startDate
                )} to ${getBatchDate(batch.endDate)} `}
              </b>
              {`(Applications open until ${getBatchDate(batch.appEndDate)})`}
              <br />
            </span>
          );
      }.bind(this)
    );

    return <p>{displayCurrentBatches}</p>;
  } else {
    let displayAllBatches = batchDetails.map(
      function(batch) {
        if (isApplicationPhaseOpen(batch.appStartDate))
          return (
            <span>
              <b>
                {`#Batch #${batch.batchNumber}: ${getBatchDate(
                  batch.startDate
                )} to ${getBatchDate(batch.endDate)} `}
              </b>
              {`(Applications open until ${getBatchDate(batch.appEndDate)})`}
              <br />
            </span>
          );
        else
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

    return <p>{displayAllBatches}</p>;
  }
}
