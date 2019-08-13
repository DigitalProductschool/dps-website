import * as functions from 'firebase-functions';
import * as TrelloNodeAPI from 'trello-node-api';

const createTrelloCard = require('./createTrelloCard');
const handleFormSubmit = require('./handleFormSubmit');

const admin = require('firebase-admin');
admin.initializeApp();

const trello = new TrelloNodeAPI();
trello.setApiKey('SET_API_KEY');
trello.setOauthToken('SET_AUTH_TOKEN');

exports.createTrelloCard = functions.firestore
  .document(`batches/{batch}/applications/{applicationId}`)
  .onCreate(async (snap, context) => {
    createTrelloCard.handler(snap, trello);
  });

exports.handleApplicationForm = functions.https.onRequest(async (req, res) => {
  await handleFormSubmit.handler(req, res, admin);
});
