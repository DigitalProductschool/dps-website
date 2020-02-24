export {};
const { google } = require('googleapis');
const functions = require('firebase-functions');
const GenderApi = require('gender-api.com-client');

function getAppDate(appDate: any) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const newdate =
    appDate.getDate() +
    '-' +
    monthNames[appDate.getMonth()] +
    '-' +
    appDate.getFullYear();
  return newdate;
}

exports.handler = async function(snap: any, context: any, admin: any) {
  const name: string = snap.data()!.name;
  const batch: string = snap.data()!.batch;
  const track: string = snap.data()!.track;
  const source: string = snap.data()!.source;
  const applicationTime: any = getAppDate(snap.createTime.toDate());
  const docId = context.params.applicationId;
  const batchId = context.params.batch;

  const OAuth2 = google.auth.OAuth2;
  const clientID = functions.config().spreadsheet.clientid;
  const clientSecret = functions.config().spreadsheet.clientsecret;
  const refreshToken = functions.config().spreadsheet.refreshtoken;
  const genderApiKey = functions.config().spreadsheet.genderapikey;
  const googleSheetID = functions.config().spreadsheet.id;

  const oauth2Client = new OAuth2(
    clientID, //client Id
    clientSecret, // Client Secret
    'https://developers.google.com/oauthplayground' // Redirect URL
  );

  oauth2Client.setCredentials({
    refresh_token: refreshToken,
  });

  // api used: https://gender-api.com/en/clients
  const genderApiClient = new GenderApi.Client(genderApiKey);
  genderApiClient.getByFirstName(name, function(result: any) {
    admin
      .firestore()
      .collection('batches')
      .doc(batchId)
      .collection('applications')
      .doc(docId)
      .update({
        applicationDate: applicationTime,
        gender: result.gender,
      })
      .then(function() {
        console.log('Document successfully updated!');
      })
      .catch(function(error: any) {
        console.log('Error adding document: ', error);
      });

    const request = {
      spreadsheetId: googleSheetID, //test sheet
      range: 'A:E',
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [[batch, track, source, applicationTime, result.gender]],
      },
      auth: oauth2Client,
    };

    const sheets = google.sheets('v4');
    return sheets.spreadsheets.values.append(request, (err: any) => {
      if (err) {
        console.log(`The API returned an error: ${err}`);
        throw new Error(err);
        return;
      }
      return;
    });
  });
};
