const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { google } = require('googleapis');

exports.handler = async function(snap: any) {
  const email: string = snap.data()!.email;
  const name: string = snap.data()!.name;
  console.log(email);
  const OAuth2 = google.auth.OAuth2;
  const clientID =
    '950996531347-m4mebs9tli5e0qfbdu47hqttaqvqmumk.apps.googleusercontent.com';
  const clientSecret = 'RxMIUc6PnE5ai_fUt0GW9Rk_';
  const refreshToken = '1/3uPU4hNoEWMwSfiknW8LhfhpUDHi5aODdpl6feFvWU4';

  const oauth2Client = new OAuth2(
    clientID, //client Id
    clientSecret, // Client Secret
    'https://developers.google.com/oauthplayground' // Redirect URL
  );

  console.log(' before set credentials......');

  oauth2Client.setCredentials({
    refresh_token: refreshToken,
  });

  console.log(' after set credentials......');

  const accessToken = oauth2Client.getAccessToken();
  console.log('Access Token' + accessToken);

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

  console.log('AWAIT....');
  await appendPromise({
    spreadsheetId: '1YdB5St4XUsgB3_7mVi0cGtpGpvv5OC4qSoYu5v2KOzI',
    range: 'A:B',
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    resource: {
      values: [[email, name]],
    },
    auth: accessToken,
  });
};
