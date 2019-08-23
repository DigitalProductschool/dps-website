import * as functions from 'firebase-functions';
import * as TrelloNodeAPI from 'trello-node-api';

const createTrelloCard = require('./createTrelloCard');
const handleFormSubmit = require('./handleFormSubmit');
const admin = require('firebase-admin');
const serviceAccount = require('../dps-website-staging.firebase.key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const defaultRegion = 'europe-west1';

exports.handleApplicationForm = functions
  .region(defaultRegion)
  .https.onRequest(async (req, res) => {
    await handleFormSubmit.handler(req, res, admin);
  });

if (functions.config().trello) {
  const trello = new TrelloNodeAPI();
  trello.setApiKey(functions.config().trello.key);
  trello.setOauthToken(functions.config().trello.token);

  exports.createTrelloCard = functions
    .region(defaultRegion)
    .firestore.document(`batches/{batch}/applications/{applicationId}`)
    .onCreate(async (snap, context) => {
      createTrelloCard.handler(snap, trello);
    });
} else {
  console.error('Trello config unavailable');
}
