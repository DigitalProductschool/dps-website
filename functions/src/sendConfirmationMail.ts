const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

exports.handler = async function(snap: any) {
  const email: string = snap.data().email;
  const name: string = snap.data().name;
  var track: string = snap.data().track;
  switch (track) {
    case 'pm': {
      track = 'Product Manager';
      break;
    }
    case 'se': {
      track = 'Software Engineer';
      break;
    }
    case 'ai': {
      track = 'AI Engineer';
      break;
    }
    case 'ixd': {
      track = 'Interaction Designer';
      break;
    }
    case 'pmc': {
      track = 'Product Marketing & Communications Manager';
      break;
    }
    case 'ac': {
      track = 'Agile Team Coach';
      break;
    }
    default: {
      track = 'DPS';
      break;
    }
  }
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
    subject: `Your application at ${APP_NAME}!`,
    html: `Hi ${name}, <br><br>
    Thanks for your application at Digital Product School! <br><br>
    We received your application for ${track}. We will start to evaluate the applications about 12 weeks before the next batch starts and get in touch with you. If you and your skills fit our needs we will invite you to an interview. The latest four weeks before the batch starts you will know if you are in the next round. <br><br>
    If you have any questions, just email us at hello@dpschool.io and stay in touch with us on social media: <br><br>
    <a href="https://www.facebook.com/digitalproductschool/"># Facebook</a><br>
    <a href="https://twitter.com/dpschool_io"># Twitter</a><br>
    <a href="https://www.linkedin.com/company/digital-product-school/"># LinkedIn</a><br>
    <a href="https://www.instagram.com/digitalproductschool/"># Instagram</a><br>
    <a href="https://leaks.digitalproductschool.io/"># Medium</a><br><br>
    Cheers,<br>
    Your DPS Team <br><br><br>
    --<br><br>
    Digital Product School<br>
    by UnternehmerTUM GmbH<br>
    Lichtenbergstr. 6<br>
    85748 Garching bei München<br>
    +49 89-18 94 69-0<br>
    <a href="https://www.unternehmertum.de/">www.unternehmertum.de</a><br>
    <a href="https://digitalproductschool.io/">www.digitalproductschool.io</a><br>
    <a href = "mailto:hello@dpschool.io">hello@dpschool.io</a><br><br>

    <a href="https://www.facebook.com/digitalproductschool/"> Facebook </a>|<a href="https://twitter.com/dpschool_io"> Twitter  </a>|<a href="https://www.linkedin.com/company/digital-product-school/"> LinkedIn </a>|<a href="https://www.instagram.com/digitalproductschool/"> Instagram </a>|<a href="https://leaks.digitalproductschool.io/"> Medium </a><br><br>

    Managing Directors:<br>
    Prof. Dr. Helmut Schönenberger (CEO), Claudia Frey,<br>
    Stefan Drüssler, Thomas Zeller, Dr. Andreas Liebl<br>
    Chairwoman of the supervisory board: Susanne Klatten<br>
    Register Court, Munich: HRB 141703<br>
    VAT: DE 252 789 694`,
  };

  smtpTransport.sendMail(mailOptions, (error: any) => {
    if (error) {
      console.log(error.message);
      smtpTransport.close();
    }
    return 'mail sent';
  });
};
