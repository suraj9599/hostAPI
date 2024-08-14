const mongoose = require("mongoose");
const uri = process.env.MONGODB_URL.toString();
const connectDB = (uri) => {
  console.log("db connected");
  return mongoose.connect(uri);
};

module.exports = connectDB;
