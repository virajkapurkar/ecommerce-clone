import mongoose from "mongoose";
import colors from "colors";
async function connectDB(uri) {
  try {
    await mongoose.connect(String(uri));
    console.log("Successfully connected to DB".bgGreen.white.bold);
  } catch (err) {
    console.log(
      `Error occurred while connecting to DB: ${err.message}`.bgRed.black.bold
    );
    process.exit(1);
  }
}

export { connectDB };
