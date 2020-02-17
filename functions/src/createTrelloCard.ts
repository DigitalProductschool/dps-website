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

const BATCH_TO_LABEL_ID: Map<string, string> = prepareBatchToLabelIdMap();

function prepareBatchToLabelIdMap() {
  let tmp = new Map();

  tmp.set('10', '5e4a8e67f8a655639d64b317');
  tmp.set('11', '5e4a8e8e8387dd6dfcb7ad73');
  tmp.set('12', '5d42ff6faf988c41f21f3203');
  tmp.set('13', '5e4a8e7eead52b0487b5a660');
  tmp.set('14', '5d42ff6faf988c41f21f3200');
  tmp.set('15', '5d42ff6faf988c41f21f3201');

  return tmp;
}

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
  ### Name 

  ### Gender
  ${snap.data().userType}
  ### Applies for
  ${snap.data().track}
  ### Preferred batch
  ${snap.data().batch}
  ### Email

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

function getListId(track: string) {
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

function getLabelIdForBatch(batch: string): Array<string> {
  let labelId = BATCH_TO_LABEL_ID.get(batch);

  if (labelId !== undefined) {
    return [labelId];
  } else {
    return [];
  }
}

exports.handler = async function(snap: ISnap, database: any) {
  const labelIdForBatch = getLabelIdForBatch(snap.data().batch);

  const data = {
    name: snap.data().email,
    desc: buildTrelloDescription(snap),
    pos: 'top',
    idList: getListId(snap.data().track),
    due: null,
    dueComplete: false,
    idMembers: [],
    idLabels: labelIdForBatch,
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
