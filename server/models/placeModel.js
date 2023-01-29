const mongoose = require("mongoose")

const dataSchema = mongoose.Schema({
  place: String,
  side: String,
  hotel: String,
  description: String,
  location: String,
  longitude: Number,
  latitude: Number ,
  images: Array,
  marked: Boolean ,
})

const Place = mongoose.model("places", dataSchema)
module.exports = Place