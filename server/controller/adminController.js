const dotenv = require('dotenv');
const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const router = express.Router();
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
dotenv.config();

router.post('/faculty/login', expressAsyncHandler(async (req,res) => {
  try {

    const { emailAddress, password } = req.body;

    const user = await User.findOne({emailAddress})

    if (!user) {
      return res.status(400).json({message: 'Invalid email or password'})
    } 

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return res.status(400).json({message: 'Invalid emiail or password'});
    }

    res.json({role: user.role, fullName: user.fullName})
    
  } catch (error) {
    res.status(500).json({message: 'Internal server error. Please try again later.'})
  }
}))



router.post('/faculty/create-announcement', expressAsyncHandler(async (req,res) => {
  try {

    
    await announcement.save()
    
  } catch (error) {
    res.status(500).json({message: `Internal server error. Please try again later. ${error}`})
  }
}))




module.exports = router
