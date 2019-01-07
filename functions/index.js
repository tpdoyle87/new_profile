'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
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
exports.sendEmailConfirmation = functions.database.ref('/contacts').onCreate((change) => {
  const snapshot = change.after;
  const val = snapshot.val();

  const mailOptions = {
    from: 'tdoyleengler.com" <noreply@firebase.com>',
    to: gmailEmail,
  };

  const subscribed = val.subscribedToMailingList;

  // Building Email message.
  mailOptions.subject = "New contact form from your portfolio"
  mailOptions.text = val

  return mailTransport.sendMail(mailOptions)
    .then(() => console.log("new contact form submission"))
    .catch((error) => console.error('There was an error while sending the email:', error));
});
