const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

exports.handler = async function(snap: any) {
  const email: string = snap.data().email;
  const name: string = snap.data().name;

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

  const accessToken = oauth2Client.getAccessToken();

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

  const mailOptions = {
    from: `${APP_NAME} <application@dpschool.io>`,
    to: `${email}`,
    subject: `Thanks for applying at ${APP_NAME}!`,
    text: `Hi ${name},

We received your application. Thanks for wanting to be a part of the Digital Product School! 

We will start to evaluate the applications about 12 weeks before the next batch starts and get in touch with you. If you and your skills fit our needs we will invite you to an interview. Latest four weeks before the batch starts you will know if you are in the next round. 

If you have any questions, just email us at hello@dpschool.io 

Cheers, 
Sascha 

Digital Product School is a project by 
UnternehmerTUM GmbH 
Lichtenbergstr. 6 
85748 Garching bei München
+49891894691232 

www.digitalproductschool.io 
hello@dpschool.io`,
  };

  smtpTransport.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      console.log(error.message);
      smtpTransport.close();
    }
    return 'mail sent';
  });
};
