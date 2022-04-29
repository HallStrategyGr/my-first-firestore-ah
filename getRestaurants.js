import { restaurantsCol } from './connectDB.js'
    // restaurantsCol.get()    //get All restaurants
    //     .then(snapshot => {
    //         snapshot.docs.forEach(doc => console.log(doc.data())) //loop through all results        
    //     })
    //     .catch(console.error)

        restaurantsCol
            //.where('name', '==', 'Bolay')
            .where('rating', '>=', 4.75)
            .get()
            .then(snapshot => {
            snapshot.docs.forEach(doc => console.log(doc.data())) //loop through all results        
        })
        .catch(console.error)