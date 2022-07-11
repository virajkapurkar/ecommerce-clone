import mongoose from "mongoose";
import users from "./data/users.js";
import products from "./data/products.js";
import Order from "./models/order.js";
import User from "./models/user.js";
import Product from "./models/product.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import colors from "colors";

dotenv.config();
const mongoUri = process.env.MONGO_URI;
connectDB(mongoUri);

const importData = async () => {
  try {
    //first delete all data that was previously seeded
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    //create new data
    const seededUsers = await User.insertMany(users);
    const adminId = seededUsers[0]._id;
    const sampleProducts = products.map((pd) => ({
      ...pd,
      User: adminId,
    }));
    const seededProducts = await Product.insertMany(sampleProducts);
    console.log("New Data Seeded".bgGreen.white.bold);
    process.exit();
  } catch (err) {
    if (err) console.log(`${err.message}`.bgRed.black.bold);
    else console.log("Unknown Error".bgRed.black.bold);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log("Data Cleanup Successful".bgGreen.white.bold);
    process.exit();
  } catch (err) {
    if (err) console.log(`${err.message}`.bgRed.black.bold);
    else console.log("Unknown Error".bgRed.black.bold);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
