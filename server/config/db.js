require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })  
      .then(() => {
        console.log("DB Connetion Successfull");
      })
      }catch (err) {
        console.log(err)
        process.exit(1)
      }
}

module.exports = connectDB