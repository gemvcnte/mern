const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  emailAddress: {
    type:String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['dean', 'faculty']
  }

})

const User = mongoose.model('users', userSchema)


module.exports = { User };

