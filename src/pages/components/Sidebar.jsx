// Sidebar.js
import React from 'react';
import {
  DashboardOutlined,
  AnnouncementOutlined,
  PersonOutlined
} from '@mui/icons-material'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 p-4">
      <h2 className="text-xl font-bold mb-4">Announsync</h2>
      <ul>
       <li className='mb-2'><Link to={'/dean/dashboard'}><DashboardOutlined /> Dashboard</Link></li>
       <li className='mb-2'><Link to={'/dean/announcement'}><AnnouncementOutlined /> Announcement</Link></li>
       <li className='mb-2'><Link to={'/dean/profile'}><PersonOutlined /> Profile</Link></li>


      </ul>
    </div>
  );
};

export default Sidebar;

