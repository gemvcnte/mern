const mongoose = require('mongoose');


const announcementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  typeOfAnnouncement: {
    type: String,
    required: true,
    enum: ['Holiday', 'Exam', 'School Event', 'School Assessment', 'Class Cancellation']
  },
  createdBy: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: 'pending'
  },
})


const Announcement = mongoose.model('announcements', announcementSchema);


module.exports = { Announcement};
