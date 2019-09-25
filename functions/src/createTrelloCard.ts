const isProduction = require('./constants').isProduction;
const TrelloNodeAPI = require('trello-node-api');
const functions = require('firebase-functions');
const FormData = require('form-data');
const fetch = require('node-fetch');
const STORAGE_BUCKET_URL = require('./constants').STORAGE_BUCKET_URL;
const trello = new TrelloNodeAPI();
const trelloKey = functions.config().trello.key;
const trelloToken = functions.config().trello.token;
trello.setApiKey(trelloKey);
trello.setOauthToken(trelloToken);

interface ISnap {
  data: () => {
    [key: string]: string;
  };
}

function buildTrelloDescription(snap: ISnap) {
  const needsScholarship: String = snap.data().scholarship
    ? 'Yes, I need the scholarship'
    : 'No, DPS can use it to support others';

  return `
  ### ${snap.data()!.name}
  ${snap.data().userType}
  ### Applies for
  ${snap.data().track}
  ### Preferred batch
  ${snap.data().batch}
  ### Email
  ${snap.data().email}
  ### Do you apply for the scholarship of €750.-/month?
  ${needsScholarship}
  ### How did you learn about Digital Product School?
  ${snap.data().source}
  `;
}

async function attachCvAndCoverLetter(
  snap: ISnap,
  database: any,
  cardId: string
) {
  const data = snap.data();
  const [bucketFiles] = await database
    .storage()
    .bucket(STORAGE_BUCKET_URL)
    .getFiles({
      prefix: `batch-${data.batch}/applications/${data.name}/${data.email}`,
    });

  for (let file of bucketFiles) {
    const formData = new FormData();
    const download = await file.download();
    formData.append('file', download[0], file.name);
    formData.append('key', trelloKey);
    formData.append('token', trelloToken);

    await fetch(` https://api.trello.com/1/cards/${cardId}/attachments/`, {
      method: 'POST',
      body: formData,
    });
  }
}

function getCardId(track: string) {
  if (!isProduction) {
    // https://trello.com/b/RNVAchTV/api-test-board
    return '5d809d6c15e98c4c83075183';
  }

  if (track === 'pm') {
    // https://trello.com/b/0XE3F4JY/pm-track-applications
    return '5c0e4ab452364949dde812b1';
  }

  if (track === 'ixd') {
    // https://trello.com/b/XqoNQKp7/ixd-track-applications
    return '5ca222869b5ec76a56a9fb6a';
  }

  // https://trello.com/b/f9Dgk2Vj/engineering-applications
  return '5c3d919c8ec21c71f7b34e94';
}

exports.handler = async function(snap: ISnap, database: any) {
  const data = {
    name: snap.data().name,
    desc: buildTrelloDescription(snap),
    pos: 'top',
    idList: getCardId(snap.data().track),
    due: null,
    dueComplete: false,
    idMembers: [],
    idLabels: [],
    keepFromSource:
      'attachments,checklists,comments,due,labels,members,stickers',
  };

  let response: { id: string } = { id: '' };
  try {
    response = await trello.card.create(data);
    await attachCvAndCoverLetter(snap, database, response.id);
  } catch (error) {
    console.log('createTrelloCard, error...', error);
  }
};

export {};
