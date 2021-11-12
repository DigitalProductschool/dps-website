import * as functions from 'firebase-functions';

const createTrelloCard = require('./createTrelloCard');
const handleFormSubmit = require('./handleFormSubmit');
const sendConfirmationMail = require('./sendConfirmationMail');
const storeTrackingData = require('./storeTrackingData');
const whatsnew = require('./whatsnew');
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
exports.handleApplicationForm = functions
  .region(defaultRegion)
  .https.onRequest(async (req, res) => {
    return await handleFormSubmit.handler(req, res, admin);
  });

exports.whatsnewfacebook = functions
  .region(defaultRegion)
  .https.onRequest(async (req, res) => {
    return await whatsnew.facebook(req, res, admin);
  });

exports.whatsnewyoutube = functions
  .region(defaultRegion)
  .https.onRequest(async (req, res) => {
    return await whatsnew.youtube(req, res, admin);
  });

exports.storeTrackingData = functions
  .region(defaultRegion)
  .firestore.document(`batches/{batch}/applications/{applicationId}`)
  .onCreate(async (snap, context) => {
    return await storeTrackingData.handler(snap, context, admin);
  });

exports.sendConfirmationMail = functions
  .region(defaultRegion)
  .firestore.document(`batches/{batch}/applications/{applicationId}`)
  .onCreate(async snap => {
    return await sendConfirmationMail.handler(snap);
  });

exports.createTrelloCard = functions
  .region(defaultRegion)
  .firestore.document(`batches/{batch}/applications/{applicationId}`)
  .onCreate(async snap => {
    await createTrelloCard.handler(snap, admin);
  });
