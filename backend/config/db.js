// config/db.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const MONGO_DB_URL = process.env.MONGO_DB_URL

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_DB_URL);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
