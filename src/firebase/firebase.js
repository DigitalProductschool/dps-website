import isProduction from '../utils/isProduction';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

let config = {
  apiKey: 'AIzaSyB4LM0aCPAXvGBOrgmgWOchxS2QsiXunSg',
  authDomain: 'dps-website-staging-0.firebaseapp.com',
  databaseURL: 'https://dps-website-staging-0.firebaseio.com',
  projectId: 'dps-website-staging-0',
  storageBucket: 'dps-website-staging-0.appspot.com',
  messagingSenderId: '950996531347',
  appId: '1:950996531347:web:8028f05790ed7da0',
};

if (isProduction) {
  config = {
    apiKey: 'AIzaSyDLCePgRPpr3eMy_bExSJxdLXqZkmGdxJA',
    authDomain: 'dps-website-244212.firebaseapp.com',
    databaseURL: 'https://dps-website-244212.firebaseio.com',
    projectId: 'dps-website-244212',
    storageBucket: 'dps-website-244212.appspot.com',
    messagingSenderId: '836682187511',
    appId: '1:836682187511:web:37d705d934ff1b54',
  };
}

// Initialize Firebase
export const app = initializeApp(config);
// Initialize Cloud Firestore and get a reference to the service
export const database = getFirestore(app);
