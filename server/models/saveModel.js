const mongoose = require("mongoose")

const dataSchema = mongoose.Schema({
  user: String,
  bookmark: String
})

const Bookmarks = mongoose.model("bookmarks", dataSchema)
module.exports = Bookmarks