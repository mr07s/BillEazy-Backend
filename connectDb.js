const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.mode === "dev"
        ? process.env.dev_MONGODB_URL
        : process.env.prod_MONGODB_URL
    );
    console.log(
      process.env.mode === "dev"
        ? process.env.dev_MONGODB_URL
        : process.env.prod_MONGODB_URL
    );
    console.log(
      `Connected to MongoDb Database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error in Mongodb ${error}`.bgRed.white);
  }
};
module.exports = connectDB;
