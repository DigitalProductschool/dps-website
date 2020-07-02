import { useState, useEffect } from 'react';
import { getFirebase } from '../../../firebase/firebase';

export default function useBatchDetails() {
  const [batchDetails, setBatchDetails] = useState([]);

  useEffect(() => {
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
                  appEndDate: doc.data().appEndDate,
                },
              ])
          );

          setBatchDetails(batchDetails);
        });
    });
  }, []);

  return batchDetails;
}
