import { useState, useEffect } from 'react';
import { database } from '../../../firebase/firebase';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';

export default function useBatchDetails(props) {
  const [batchDetails, setBatchDetails] = useState([]);

  if (
    props === 'pm' ||
    props === 'se' ||
    props === 'ai' ||
    props === 'ixd' ||
    props === 'ac'
  ) {
    var appEndDate = 'appEndDate-' + props;
  } else {
    var appEndDate = 'appEndDate';
  }

  useEffect(() => {
    var currentTime = new Date();

    const q = query(
      collection(database, 'batch-details'),
      where(appEndDate, '>', currentTime),
      orderBy(appEndDate)
    );

    getDocs(q).then(snapshot => {
      let batchDetails = [];
      snapshot.forEach(
        doc =>
          (batchDetails = [
            ...batchDetails,
            {
              batchID: doc.id,
              batchNumber: doc.data().batch,
              startDate: doc.data().startDate,
              endDate: doc.data().endDate,
              appStartDate: doc.data().appStartDate,
              appEndDate: doc.get(appEndDate),
              appEndDateSe: doc.get('appEndDate-se'),
              appEndDatePm: doc.get('appEndDate-pm'),
              appEndDateAi: doc.get('appEndDate-ai'),
              appEndDateIxd: doc.get('appEndDate-ixd'),
              appEndDateAc: doc.get('appEndDate-ac'),
            },
          ])
      );
      setBatchDetails(batchDetails);
    });
  });

  return batchDetails;
}
