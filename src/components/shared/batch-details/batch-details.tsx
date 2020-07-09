import * as React from 'react';
import { useEffect, useState } from 'react';
import useBatchDetails from '../useBatchDetails/index';
import isApplicationPhaseOpen from './application-phase';
import getBatchDate from './batch-date';

export default function BatchDetails(props) {
  const [batchDetails, setBatchDetails] = useState([]);
  const batchDetailsFirebase = useBatchDetails();

  useEffect(() => {
    setBatchDetails(batchDetailsFirebase);
  }, [batchDetailsFirebase]);

  if (props.isCurrentOpenApplications) {
    let displayCurrentBatches = batchDetails.map(
      function(batch) {
        if (isApplicationPhaseOpen(batch.appStartDate))
          return (
            <span>
              <b>{`# Batch#${batch.batchNumber}: `}</b>
              <br className="break" />
              <b>
                {`${getBatchDate(batch.startDate)} to ${getBatchDate(
                  batch.endDate
                )} `}
              </b>
              <br className="break" />
              {`(Applications open until ${getBatchDate(batch.appEndDate)})`}
              <br />
              <br className="break" />
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
              <b>{`# Batch#${batch.batchNumber}: `}</b>
              <br className="break" />
              <b>
                {`${getBatchDate(batch.startDate)} to ${getBatchDate(
                  batch.endDate
                )} `}
              </b>
              <br className="break" />
              {`(Applications open until ${getBatchDate(batch.appEndDate)})`}
              <br />
              <br className="break" />
            </span>
          );
        else
          return (
            <span>
              <b>{`# Batch#${batch.batchNumber}: `}</b>
              <br className="break" />
              <b>
                {`${getBatchDate(batch.startDate)} to ${getBatchDate(
                  batch.endDate
                )} `}
              </b>
              <br className="break" />
              {`(Application phase: ${getBatchDate(
                batch.appStartDate
              )} to ${getBatchDate(batch.appEndDate)})`}
              <br />
              <br className="break" />
            </span>
          );
      }.bind(this)
    );

    return <p>{displayAllBatches}</p>;
  }
}
