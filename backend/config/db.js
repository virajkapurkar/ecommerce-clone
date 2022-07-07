import mongoose from "mongoose";

async function connectDB(uri) {
  try {
    await mongoose.connect(String(uri));
    console.log("Successfully connected to DB");
  } catch (err) {
    console.log(`Error occurred while connecting to DB: ${err.message}`);
    process.exit(1);
  }
}

export { connectDB };
