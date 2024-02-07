const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI)
    console.log('Database connected.')
  } catch (error) {
    console.error('Error connecting to MongoDB, ', error.message)
  }
}

module.exports = connectDB
