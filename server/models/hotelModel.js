const mongoose = require("mongoose")

const dataSchema = mongoose.Schema({
  name: String,
  description: String,
  location: String,
  images: Array
})

const Hotel = mongoose.model("hotels", dataSchema)
module.exports = Hotel