const mongoose = require('mongoose')
const Schema = mongoose.Schema
const restaurantSchema = new Schema({
  id: {
    type: Number
  },
  name: {
    type: String,
    required: true,
    // trim: true
  },
  name_en: {
    type: String,
    required: true,
    // trim: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true,
    // trim: true
  },
  location: {
    type: String,
    required: true,
    // trim: true
  },
  phone: {
    type: String,
    required: true
  },
  google_map: {
    type: String,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    required: true,
    // trim: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    required: true
  }
})

module.exports = mongoose.model('Restaurant', restaurantSchema)