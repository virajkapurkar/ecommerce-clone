import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import colors from "colors";

dotenv.config();
//connect to the database
const mongoUri = process.env.MONGO_URI;
connectDB(mongoUri);
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("HELLO");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p._id === id);
  res.json(product);
});

const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode at port ${process.env.PORT}`
      .white.bgGreen.bold
  );
});
