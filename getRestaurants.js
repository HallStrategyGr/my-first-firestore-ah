import admin from "firebase-admin"; //imports firebase library of tools

import serviceAccount from './credentials.js'; //import our credentials to connect to firebase

admin.initializeApp({ //connects to our firebase project
  credential: admin.credential.cert(serviceAccount) //creating a certificate from our credentials
});

//Now we are connected to our Firebase project and related services

const db = admin.firestore(); //creates a short cut to access the Firestore database

 //creating an object --in this case a specific restaurant 
    //we want to add to our database

    const restaurantsCol = db.collection('restaurants');
    
    restaurantsCol.get()    //get All restaurants
        .then(snapshot => {
            snapshot.docs.forEach(doc => console.log(doc.data())) //loop through all results        
        })
        .catch(console.error)