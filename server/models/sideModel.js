const mongoose = require("mongoose")

const dataSchema = mongoose.Schema({
  side: String,
  description: String,
  longitude: Number,
  latitude: Number ,
  images: Array
})

const Side = mongoose.model("sides", dataSchema)
module.exports = Side