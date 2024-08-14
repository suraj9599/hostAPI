const mongoose = require("mongoose");
const uri = process.env.MONGODB_URL;
const connectDB = (uri) => {
  console.log("db connected");
  console.log(`MONGODB_URL : ${uri} and Type is ${typeof uri}`);
  return mongoose.connect(uri);
};

module.exports = connectDB;
