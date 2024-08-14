const mongoose = require("mongoose");

const connectDB = (uri) => {
  uri = String(uri)
  console.log("db connected");
  return mongoose.connect(uri);
};

module.exports = connectDB;
