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
    clientID, // Client ID
    clientSecret, // Client Secret
    'https://developers.google.com/oauthplayground' // Redirect Url
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
    html: `Hi ${name}, <br><br>
    We received your application. Thanks for wanting to be a part of the Digital Product School! <br><br>
    We will start to evaluate the applications about 12 weeks before the next batch starts and get in touch with you. If you and your skills fit our needs we will invite you to an interview. Latest four weeks before the batch starts you will know if you are in the next round. <br><br>
    If you have any questions, just email us at hello@dpschool.io and stay in touch with us on social media: <br><br>
    <a href="https://www.instagram.com/digitalproductschool/"># Instagram </a><br>
    <a href="https://www.facebook.com/digitalproductschool/"># Facebook </a><br>
    <a href="https://www.linkedin.com/company/digital-product-school/"># LinkedIn </a><br>
    <a href="https://twitter.com/dpschool_io"># Twitter </a><br>
    <a href="https://twitter.com/dpschool_io"># Medium  </a><br><br>
    Cheers,<br>
    Michael <br><br>
    Digital Product School is a project by <br>
    UnternehmerTUM GmbH <br>
    Lichtenbergstr. 6 <br>
    85748 Garching bei München <br>
    +49891894691232 <br><br>
    www.digitalproductschool.io <br>
    hello@dpschool.io`,
  };

  smtpTransport.sendMail(mailOptions, (error: any) => {
    if (error) {
      console.log(error.message);
      smtpTransport.close();
    }
    return 'mail sent';
  });
};
