import * as React from 'react';
import isApplicationPhaseOpen from './application-phase';
import getBatchDate from './batch-date';

export default function displayCurrentBatchesDropdown(batchDetails) {
  let dropdown = batchDetails.map(batch => {
    if (isApplicationPhaseOpen(batch.appStartDate)) {
      return (
        <option value={batch.batchNumber} key={batch.batchID}>
          {`Batch#${batch.batchNumber}: ${getBatchDate(batch.startDate)} 
            to ${getBatchDate(batch.endDate)} `}
        </option>
      );
    }
    return '';
  });
  return dropdown;
}
