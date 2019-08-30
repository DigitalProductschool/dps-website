import * as functions from 'firebase-functions';
import * as TrelloNodeAPI from 'trello-node-api';

const createTrelloCard = require('./createTrelloCard');
const handleFormSubmit = require('./handleFormSubmit');
const admin = require('firebase-admin');
const { isProduction } = require('./constants');

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

admin.initializeApp({
  // take default credentials for the firebase service account
  // here's how credentials discovery work:
  // https://cloud.google.com/docs/authentication/production
  credential: admin.credential.applicationDefault(),
  ...config,
});

const defaultRegion = 'europe-west1';

if (!functions.config().trello) {
  throw new Error(
    'Please configure firebase environment variables. Look at the readme for more info'
  );
}

const trello = new TrelloNodeAPI();
trello.setApiKey(functions.config().trello.key);
trello.setOauthToken(functions.config().trello.token);

exports.handleApplicationForm = functions
  .region(defaultRegion)
  .https.onRequest(async (req, res) => {
    await handleFormSubmit.handler(req, res, admin);
  });

exports.createTrelloCard = functions
  .region(defaultRegion)
  .firestore.document(`batches/{batch}/applications/{applicationId}`)
  .onCreate(async (snap, context) => {
    createTrelloCard.handler(snap, trello);
  });
