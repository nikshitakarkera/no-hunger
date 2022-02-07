const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');const express = require('express');const engines = require('consolidate');var hbs = require('handlebars');const admin = require('firebase-admin');
const app = express();app.engine('hbs',engines.handlebars);app.set('views','./views');app.set('view engine','hbs');

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://zero-hunger-78b52-default-rtdb.asia-southeast1.firebasedatabase.app"
});

async function getFirestore(){const firestore_con  = await admin.firestore();const writeResult = firestore_con.collection('sample').doc('sample_doc').get().then(doc => {
    if (!doc.exists) { console.log('No such document!'); }
    else {return doc.data();}})
    .catch(err => { console.log('Error getting document', err);});return writeResult
    }