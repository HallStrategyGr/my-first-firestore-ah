// Created restaurant tE3zEuie3C2bWZaqy3jT
// Created restaurant ZudW4yu5C57OaQ7gxnlz

import admin from "firebase-admin"; //imports firebase library of tools

import serviceAccount from './credentials.js'; //import our credentials to connect to firebase

admin.initializeApp({ //connects to our firebase project
  credential: admin.credential.cert(serviceAccount) //creating a certificate from our credentials
});

//Now we are connected to our Firebase project and related services

const db = admin.firestore(); //creates a short cut to access the Firestore database

const restaurantsCol = db.collection('restaurants'); //creating an object --in this case a specific restaurant 
    //we want to add to our database
    restaurantsCol.doc('tE3zEuie3C2bWZaqy3jT').delete()
    .then(res => console.log('Success deleting tE3zEuie3C2bWZaqy3jT!!'))
    .catch(err => console.error('Error deleting tE3zEuie3C2bWZaqy3jT: ', err))

    restaurantsCol.doc('ZudW4yu5C57OaQ7gxnlz').delete()
    .then(res => console.log('Success deleting ZudW4yu5C57OaQ7gxnlz!!'))
    .catch(err => console.error('Error deleting ZudW4yu5C57OaQ7gxnlz: ', err))