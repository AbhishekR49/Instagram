const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/insta-fs";
    await mongoose.connect(mongoUri);
    console.log("mongodb connected");
  } catch (error) {
    console.log("error in connecting db", error);
  }
};

module.exports = connectDb;