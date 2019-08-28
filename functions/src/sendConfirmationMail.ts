'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

exports.handler = async function(snap: any) {
  const email: string = snap.data()!.email;
  const name: string = snap.data()!.name;
  console.log('Firestore Object created');
  console.log(email);

  const OAuth2 = google.auth.OAuth2;
  const APP_NAME = 'Digital Product School';
  const clientID = functions.config().sender.apiclientid;
  const clientSecret = functions.config().sender.apiclientsecret;
  const refreshToken = functions.config().sender.apirefreshtoken;

  const oauth2Client = new OAuth2(
    clientID, //client Id
    clientSecret, // Client Secret
    'https://developers.google.com/oauthplayground' // Redirect URL
  );

  oauth2Client.setCredentials({
    refresh_token: refreshToken,
  });

  console.log('before access token');
  const accessToken = oauth2Client.getAccessToken();
  console.log('after access token');
  console.log(accessToken);
  //const accessToken = tokens.credentials.access_token;
  console.log('second');
  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'application@dpschool.io',
      clientId: clientID,
      clientSecret: clientSecret,
      refreshToken: refreshToken,
      accessToken: accessToken,
    },
  });

  console.log('smtpTransport done......');

  const mailOptions = {
    from: `${APP_NAME} <application@dpschool.io>`,
    to: `${email}`,
    subject: `Thanks for applying at ${APP_NAME}!`,
    text: ` Hi ${name}, \n \n We received your application. Thanks for wanting to be a part of the \n Digital Product School! \n \n We will start to evaluate the applications about 12 weeks before the next \n batch starts and get in touch with you. If you and your skills fit our \n needs we will invite you to an interview. Latest four weeks before the \n batch starts you will know if you are in the next round. \n If you have any questions, just email us at hello@dpschool.io \n \n Cheers, \n Sascha \n \n Digital Product School is a project by \n UnternehmerTUM GmbH \n Lichtenbergstr. 6 \n 85748 Garching bei München \n +49891894691232 \n \n www.digitalproductschool.io \n hello@dpschool.io`,
  };

  console.log('mailOptions done......');

  smtpTransport.sendMail(mailOptions, (error: any, info: any) => {
    console.log(accessToken);
    if (error) {
      console.log(error.message);
      smtpTransport.close();
    }
    return 'mail sent';
  });

  console.log('sendMail done');
};
