'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

var config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID

};
firebase.initializeApp(config);
// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// Sends an email confirmation when a user changes his mailing list subscription.
exports.sendEmailConfirmation = functions.database.ref('contacts/{pushID}').onWrite((change) => {
  const snapshot = change.after
  const val = snapshot.val();
  const mailOptions = {
    from: 'gmailEmail',
    to: gmailEmail,
  };
  // Building Email message.
  mailOptions.subject = `New contact form from your portfolio - ${val.name} - ${val.email}`
  mailOptions.text = `${val.message}`
  return mailTransport.sendMail(mailOptions)
    .then(() => console.log("new contact form submission"))
    .catch((error) => console.error('There was an error while sending the email:', error));
});
