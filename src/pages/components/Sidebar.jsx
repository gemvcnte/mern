// Sidebar.js
import React from 'react';
// import {
//   Dashboard,
//   Announcement,
//   Person
// } from '@mui/icons-material'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 p-4">
      <h2 className="text-xl font-bold mb-4">Announsync</h2>
      <ul>
       <li className='mb-2'><Link to={'/dean/dashboard'}><Dashboard className='' /> Dashboard</Link></li>
       <li className='mb-2'><Link to={'/dean/announcement'}><Announcement /> Announcement</Link></li>
       <li className='mb-2'><Link to={'/dean/profile'}><Person/> Profile</Link></li>


      </ul>
    </div>
  );
};

export default Sidebar;

