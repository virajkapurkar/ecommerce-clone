import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import colors from "colors";
import productRouter from "./routes/productsRoute.js";
import errorHandler from "./middleware/errorHandler.js";

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

app.use("/api", productRouter);
app.use(errorHandler);

const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode at port ${process.env.PORT}`
      .white.bgGreen.bold
  );
});
