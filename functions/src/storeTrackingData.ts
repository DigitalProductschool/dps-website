const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { google } = require('googleapis');

exports.handler = async function(snap: any) {
  const email: string = snap.data()!.email;
  console.log(email);
};
