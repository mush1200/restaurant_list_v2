const db = require('../../config/mongoose')
const Restaurant = require('../restaurant')

const data = require('../../restaurant.json')
const restaurantList = data.results

//連線成功
db.once('open', () => {
  console.log('mongodb connected!')
  restaurantList.forEach((restaurant) => 
    Restaurant.create({
      id: restaurant.id,
      name: restaurant.name,
      name_en: restaurant.name_en,
      category: restaurant.category,
      image: restaurant.image,
      location: restaurant.location,
      phone: restaurant.phone,
      google_map: restaurant.google_map,
      rating: restaurant.rating,
      description: restaurant.description
    })
  )
  console.log('Success to set the seeder!')
})

