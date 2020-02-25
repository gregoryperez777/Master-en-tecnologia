import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'; 

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://firestore-grafica-344a4.firebaseio.com"
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
    response.json({
        msj: 'Hola mundo desde funciones firebase'
    });
});
