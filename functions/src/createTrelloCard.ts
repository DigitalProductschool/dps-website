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

const BATCH_TO_LABEL_ID: Map<
  string,
  Map<string, string>
> = prepareBatchToLabelIdMap();

function prepareBatchToLabelIdMap() {
  const tmp = new Map<string, Map<string, string>>();
  // Create Map from Json file
  const se = new Map(Object.entries(functions.config().labels.se));
  tmp.set('se', se);
  const pm = new Map(Object.entries(functions.config().labels.pm));
  tmp.set('pm', pm);
  const ai = new Map(Object.entries(functions.config().labels.ai));
  tmp.set('ai', ai);
  const ixd = new Map(Object.entries(functions.config().labels.ixd));
  tmp.set('ixd', ixd);
  return tmp;
}

interface Ichange {
  data: () => {
    [key: string]: string;
  };
}

function buildTrelloDescription(change: Ichange) {
  let needsScholarship: String = change.data().scholarship;
  if (needsScholarship === 'true') {
    needsScholarship = 'Yes, I need the scholarship';
  } else if (needsScholarship === 'false') {
    needsScholarship = 'No, DPS can use it to support others';
  }
  return `
  ### ${change.data()!.name}
  ${change.data().gender}
  ### Applies for
  ${change.data().track}
  ### Preferred batch
  ${change.data().batch}
  ### Email
  ${change.data().email}
  ### Do you apply for the scholarship of €750.-/month?
  ${needsScholarship}
  ### How did you learn about Digital Product School?
  ${change.data().source}
  `;
}

async function attachCvAndCoverLetter(
  change: Ichange,
  database: any,
  cardId: string
) {
  const data = change.data();
  const [bucketFiles] = await database
    .storage()
    .bucket(STORAGE_BUCKET_URL)
    .getFiles({
      prefix: `batch-${data.batch}/applications/${data.name}/${data.email}`,
    });

  for (const file of bucketFiles) {
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
  if (track === 'ai') {
    // https://trello.com/b/f9Dgk2Vj/engineering-applications
    return '5c3d919c8ec21c71f7b34e94';
  }
  // https://trello.com/b/2WturNOV/se-track-applications
  return '5e67a1e39932a47debdf9bf7';
}

function getLabelIdForTrack(track: string, batch: string): Array<string> {
  const labelMap = BATCH_TO_LABEL_ID.get(track);
  {
    if (labelMap !== undefined) {
      const labelId = labelMap.get('batch' + batch);
      if (labelId !== undefined) {
        return [labelId];
      } else {
        return [];
      }
    } else {
      return [];
    }
  }
}

exports.handler = async function(change: Ichange, database: any) {
  const labelIdForBatch = getLabelIdForTrack(
    change.data().track,
    change.data().batch
  );

  const data = {
    name: change.data().name,
    desc: buildTrelloDescription(change),
    pos: 'top',
    idList: getListId(change.data().track),
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
    await attachCvAndCoverLetter(change, database, response.id);
  } catch (error) {
    console.log('createTrelloCard, error...', error);
  }
};

export {};
