import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'; 
import * as express from 'express';
import * as cors from 'cors';

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://firestore-grafica-344a4.firebaseio.com"
});

// Crea una referencia a la DB usando las credenciales

const db = admin.firestore();


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
    response.json({
        msj: 'Hola mundo desde funciones firebase'
    });
});

export const getGOTY = functions.https.onRequest( async (request, response) => {
    const gotyRef = db.collection('goty');
    const docsSnap = await gotyRef.get();

    /*
        Esto es un error,  esto es como tomar una fotografia de toda la DB 
        incluyendo su configuracion.
    
        response.json(docsSnap);
    */

    const juegos = docsSnap.docs.map(doc => doc.data());

    response.json(juegos);

});

const app = express();

app.use(cors({ origin: true }));

app.get('/goty', async (req, res) => {
    const gotyRef = db.collection('goty');
    const docsSnap = await gotyRef.get();
    const juegos = docsSnap.docs.map(doc => doc.data());

    res.json(juegos);
});

app.post('/goty/:id', async (req, res) => {
    const { id } = req.params;
    
    const gameRef = db.collection('goty').doc(id);
    const gameSnap = await gameRef.get();

    if(!gameSnap.exists) {
        res.status(404).json({
            ok: false,
            mensaje: 'No existe un juego con ese ID',
        });
    } else {
        const antes = gameSnap.data() || { votes: 0 };
        await gameRef.update({
            votes: antes.votes + 1,
        });

        res.json({
            ok: true,
            mensaje: `Gracias por tu voto para ${antes.name}`, 
        });
    }
});


export const api = functions.https.onRequest( app );