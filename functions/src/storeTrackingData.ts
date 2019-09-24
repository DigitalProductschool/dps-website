export {};
const { google } = require('googleapis');
const functions = require('firebase-functions');

function getAppDate(appDate: any) {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const newdate =
    appDate.getDate() +
    '-' +
    monthNames[appDate.getMonth()] +
    '-' +
    appDate.getFullYear();
  return newdate;
}

exports.handler = async function(snap: any) {
  const email: string = snap.data()!.email;
  const name: string = snap.data()!.name;
  const batch: string = snap.data()!.batch;
  const userType: string = snap.data()!.userType;
  const track: string = snap.data()!.track;
  const source: string = snap.data()!.source;
  const applicationTime: any = getAppDate(snap.createTime.toDate());

  const OAuth2 = google.auth.OAuth2;
  const clientID = functions.config().spreadsheet.clientid;
  const clientSecret = functions.config().spreadsheet.clientsecret;
  const refreshToken = functions.config().spreadsheet.refreshtoken;

  const oauth2Client = new OAuth2(
    clientID, //client Id
    clientSecret, // Client Secret
    'https://developers.google.com/oauthplayground' // Redirect URL
  );

  oauth2Client.setCredentials({
    refresh_token: refreshToken,
  });

  function appendPromise(requestWithoutAuth: any) {
    return new Promise((resolve, reject) => {
      const sheets = google.sheets('v4');
      const request = requestWithoutAuth;
      return sheets.spreadsheets.values.append(
        request,
        (err: any, response: any) => {
          if (err) {
            console.log(`The API returned an error: ${err}`);
            reject(err);
            return;
          }
          resolve(response.data);
          return;
        }
      );
    });
  }

  await appendPromise({
    spreadsheetId: '1YdB5St4XUsgB3_7mVi0cGtpGpvv5OC4qSoYu5v2KOzI',
    range: 'A:G',
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    resource: {
      values: [[name, email, batch, track, userType, source, applicationTime]],
    },
    auth: oauth2Client,
  });
};
