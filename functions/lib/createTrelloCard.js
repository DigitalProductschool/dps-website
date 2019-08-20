'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function buildTrelloDescription(snap) {
  const needsScholarship = snap.data().scholarship
    ? 'Yes, I need the scholarship'
    : 'No, DPS can use it to support others';
  return `### ${snap.data().name} \n ### ${
    snap.data().userType
  } \n ### Applies for\n${snap.data().track} \n ### Preferred batch\n${
    snap.data().batch
  } \n ### Email\n${
    snap.data().email
  } \n ### Do you apply for the scholarship of €750.-/month?\n${needsScholarship} \n ### How did you learn about Digital Product School?\n${
    snap.data().source
  }`;
}
exports.handler = async function(snap, trello) {
  //const id: string = snap.data()!.id;
  const email = snap.data().email;
  const name = snap.data().name;
  console.log('Firestore Object created');
  console.log(email);
  console.log('Calling Trello Api');
  //listid: 5d42ffb526fc5044ef35c2b6
  //boardid: 5d42ff6f03d92f20aaddd179
  const data = {
    name: name,
    desc: buildTrelloDescription(snap),
    pos: 'top',
    idList: '5d42ffb526fc5044ef35c2b6',
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
};
//# sourceMappingURL=createTrelloCard.js.map
