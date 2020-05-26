export {};
const { google } = require('googleapis');
const functions = require('firebase-functions');
const GenderApi = require('gender-api.com-client');

function getAppDate(appDate: any) {
  const day = (appDate.getDate() < 10 ? '0' : '') + appDate.getDate();
  const month =
    (appDate.getMonth() + 1 < 10 ? '0' : '') + (appDate.getMonth() + 1);

  const newdate =
    appDate.getFullYear() +
    '-' +
    month +
    '-' +
    day +
    ' ' +
    appDate.getHours() +
    ':' +
    appDate.getMinutes() +
    ':' +
    appDate.getSeconds();

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
    clientID, // Client ID
    clientSecret, // Client Secret
    'https://developers.google.com/oauthplayground' // Redirect Url
  );

  oauth2Client.setCredentials({
    refresh_token: refreshToken,
  });

  // URL of the API: https://gender-api.com/en/clients

  const genderApiClient = new GenderApi.Client(genderApiKey);
  genderApiClient.getByFirstName(name, function(result: any) {
    admin
      .firestore()
      .collection('batches')
      .doc(batchId)
      .collection('applications')
      .doc(docId)
      .update({
        gender: result.gender, // Save the gender in firestore
      })
      .then(function() {
        console.log('Document successfully updated!');
      })
      .catch(function(error: any) {
        console.log('Error adding document: ', error);
      });

    const request = {
      spreadsheetId: googleSheetID, // ID of the GoogleSheet
      range: 'A:E',
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [[batch, track, source, applicationTime, result.gender]],
      },
      auth: oauth2Client,
    };

    // In case of errors

    const sheets = google.sheets('v4');
    return sheets.spreadsheets.values.append(request, (err: any) => {
      if (err) {
        console.log(`The API returned an error: ${err}`);
        throw new Error(err);
      }
      return;
    });
  });
};
