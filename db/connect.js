const mongoose = require("mongoose");
const uri = MONGODB_URL;
const connectDB = (uri) => {
  console.log("db connected");
  return mongoose.connect(uri);
};

module.exports = connectDB;
