import { useState, useEffect } from 'react';
import { getFirebase } from '../../../firebase/firebase';

export default function useBatchDetails(props) {
  const [batchDetails, setBatchDetails] = useState([]);

  if (props === 'pm' || props === 'se' || props === 'ai' || props === 'ixd') {
    var appEndDate = 'appEndDate-' + props;
  } else {
    var appEndDate = 'appEndDate';
  }

  useEffect(() => {
    const firebaseApp = import('@firebase/app');
    const firebaseDatabase = import('@firebase/firestore');
    var currentTime = new Date();

    Promise.all([firebaseApp, firebaseDatabase]).then(([firebase]) => {
      const database = getFirebase(firebase).firestore();
      database
        .collection('batch-details')
        .where(appEndDate, '>', currentTime)
        .orderBy(appEndDate)
        .get()
        .then(snapshot => {
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
                },
              ])
          );
          setBatchDetails(batchDetails);
        });
    });
  }, [props]);

  return batchDetails;
}
