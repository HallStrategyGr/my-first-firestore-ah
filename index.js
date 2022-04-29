import { restaurantsCol } from "./connectDB.js"
    
    const restaurant = {
    name: 'Mister01',
    address: '555 N Federal Hwy Suite #5, Boca Raton, FL 33432',
    cuisine: 'Pizza',
    rating: 4.9,
    phone: '(786) 677-2903',
}

db.collection('restaurants').add(restaurant) //adding the restaurant to our restaurants cellection
    .then(doc => console.log('Created restaurant', doc.id)) //handle resolve
    .catch(err => console.error(err))//handle reject

const restaurant2 = {
    name: 'Bolay',
    address: '7060 W Palmetto Park Rd, Boca requestAnimationFrame, FL 33433',
    cuisine: 'American',
    rating: 4.6,
}

async function addRestaurant(data) {
    try {
    const doc = await restaurantsCol.add(data) //add restaurant to collection 
    console.log('Created restaurant', doc.id) //handle resolve
    } catch(err) {
    console.error(err) //handle reject
    }
}
addRestaurant(restaurant2)