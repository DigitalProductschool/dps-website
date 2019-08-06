import * as functions from 'firebase-functions';
import * as TrelloNodeAPI from 'trello-node-api';

const admin = require('firebase-admin');
admin.initializeApp();

const trello = new TrelloNodeAPI();
trello.setApiKey('INSERT-YOUR-API-KEY-HERE');
trello.setOauthToken('INSERT-YOUR-TOKEN-HERE');

exports.createTrelloCard = functions.firestore
  .document(`batches/{batch}/applications/{applicationId}`)
  .onCreate(async (snap, context) => {
    //const id: string = snap.data()!.id;
    const email: string = snap.data()!.email;
    const name: string = snap.data()!.name;
    console.log('Firestore Object created');
    console.log(email);
    console.log('Calling Trello Api');
    //listid: 5d42ffb526fc5044ef35c2b6
    //boardid: 5d42ff6f03d92f20aaddd179

    let data = {
      name: name,
      desc: 'email: '.concat(email),
      pos: 'top',
      idList: '5d42ffb526fc5044ef35c2b6', //REQUIRED
      due: null,
      dueComplete: false,
      idMembers: [],
      idLabels: [],
      //urlSource: 'https://example.com',
      //fileSource: 'file',
      //idCardSource: 'CARD_ID',
      keepFromSource:
        'attachments,checklists,comments,due,labels,members,stickers',
    };
    let response;
    try {
      console.log('startging to create trello card');
      response = await trello.card.create(data);
      console.log('trello card created');
    } catch (error) {
      if (error) {
        console.log('error ', error);
      }
    }
    console.log('response', response);
  });

export const handleApplicationForm = functions.https.onRequest(
  async (request, response) => {
    console.log(request.body);

    let name = request.body['name'];
    let describeYourself = request.body['describeYourself'];
    let email = request.body['email'];
    let batch = request.body['batch'];
    let scholarship = request.body['scholarship'];
    let consent = request.body['consent'];
    let track = request.body['track'];

    try {
      await admin
        .firestore()
        .collection('batches')
        .doc('batch-'.concat(batch))
        .collection('applications')
        .add({
          name: name,
          email: email,
          userType: describeYourself,
          batch: batch,
          scholarship: scholarship,
          consent: consent,
          track: track,
        });

      response.send('Thank you for your application');
    } catch (error) {
      console.log(error);
      response.status(500).send(error);
    }
  }
);
