require("dotenv").config();
const express = require("express");
const nodemon = require("nodemon");
const app = express();
const products_routes = require("./routes/products");
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hi, I'm live");
});

//middleware or to set router
app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`${PORT} Yes I am connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
