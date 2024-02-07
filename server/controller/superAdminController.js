const { User } = require('../models/userModel');
const { Announcement } = require('../models/announcementModel');
const bcrypt = require('bcrypt');
const expressAsyncHandler = require('express-async-handler')
const express = require("express");
const router = express.Router();

// login function for all users
router.post('/u5er/login', expressAsyncHandler(async (req, res) => {
  try {
    const { emailAddress, password } = req.body;

    const user = await User.findOne({ emailAddress });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const compareUserPassword = await bcrypt.compare(password, user.password);

    if (!compareUserPassword) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

     res.status(200).json({ role: user.role, fullName: user.fullName }); 
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error. Please try again later.' });
  }
}));


router.post('/dean/create-super-admin', expressAsyncHandler(async (req, res) => {
  try {

    const { fullName, emailAddress, password, birthDate } = req.body;

    const existingSuperAdmin = await User.findOne({ emailAddress, role: 'dean' })


    if (existingSuperAdmin) {
      res.status(400).json({ message: 'Email already exists with another user.' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const superAdmin = new User({
      fullName,
      emailAddress,
      password: hashedPassword,
      birthDate,
      role: "dean"
    })

    await superAdmin.save();

    res.status(201).json({message: 'Account created.'})

  } catch (error) {
    console.error(error)
    res.status(500).json({message: `There is an error ${error}`})
  }
}))


router.post('/dean/create-faculty', expressAsyncHandler(async (req, res) => {
  try {

    const { fullName, emailAddress, password, birthDate, } = req.body;

    const existingFaculty = await User.findOne({ emailAddress });

    if (existingFaculty) {
      res.status(400).json({ message: 'Email already exists with another user.' })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const facultyTeacher = new User({
      fullName,
      emailAddress,
      password: hashedPassword,
      birthDate,
      role: "faculty"
    })

    await facultyTeacher.save()

    res.status(201).json({ message: 'Teacher has been created.' })

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: `${error}` })
  }
}))



router.post('/dean/delete-faculty', expressAsyncHandler(async (req, res) => {
  try {
    const { emailAddress } = req.body;

    const admin = await User.findOneAndDelete({ emailAddress, role: 'faculty' });

    if (!admin) {
      res.status(400).json({ message: 'Admin not found.' })
    }

    res.status(200).json({ message: 'Admin has been deleted.' })
  } catch (error) {
    res.status(500).json({ message: 'Teacher has been removed' })
  }
}))




router.get('/dean/announcement/get-all-announcements', expressAsyncHandler(async (req, res) => {
  try {

    const allAnnouncements = await Announcement.find()

    if (!allAnnouncements) {
      return res.status(404).json({message: 'No announcements as of now'})
    }
    res.status(200).json({ data: allAnnouncements })

  } catch (error) {
    res.status(500).json({ message: 'Internal server error. Please try again later.' })
  }
}))



router.get('/dean/get-all-pending', expressAsyncHandler(async (req, res) => {
  try {



    const pendingAnnouncements = await Announcement.find({status: 'pending'});


    if (!pendingAnnouncements) {
      res.status(404).json({message: 'No pending announcements as of now.'})
    }


    res.status(200).json({message: 'Pending Announcements retrieved: ',pendingAnnouncements})

    

  } catch (error) {
    res.status(500).json({ message: 'Internal server error. Please try again later.' })
  }
}))


router.post('/dean/create-announcement', expressAsyncHandler(async (req,res) => {
  try {
    // const
    
  } catch (error) {
    res.status(500).json({message: 'Internal server error. Please try again later.'})
    console.error(error);
  }
}))



module.exports = router
