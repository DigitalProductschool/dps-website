'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const functions = require('firebase-functions');
const TrelloNodeAPI = require('trello-node-api');
const createTrelloCard = require('./createTrelloCard');
const handleFormSubmit = require('./handleFormSubmit');
const admin = require('firebase-admin');
admin.initializeApp();
const trello = new TrelloNodeAPI();
trello.setApiKey(functions.config().trello.key);
trello.setOauthToken(functions.config().trello.token);
const defaultRegion = 'europe-west1';
exports.createTrelloCard = functions
  .region(defaultRegion)
  .firestore.document(`batches/{batch}/applications/{applicationId}`)
  .onCreate(async (snap, context) => {
    createTrelloCard.handler(snap, trello);
  });
exports.handleApplicationForm = functions
  .region(defaultRegion)
  .https.onRequest(async (req, res) => {
    await handleFormSubmit.handler(req, res, admin);
  });
//# sourceMappingURL=index.js.map
