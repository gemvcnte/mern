import React, { useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await axios.get('/api/u5er/login');
        const { role } = response.data;

        if (role === 'dean') {
          console.log('User is a dean');
          // Additional actions specific to the dean if needed
        } else if (role === 'faculty') {
          console.log('User is a faculty');
          // Additional actions specific to the faculty if needed
        } else {
          console.log("Couldn't fetch or unknown role");
        }

        // Redirect based on the user's role
        navigate(role === 'dean' ? '/dean/dashboard' : '/faculty/dashboard');
      } catch (error) {
        console.error('Error fetching user role:', error);
      }
    };

    fetchUserRole();
  }, [navigate]);

  return (
    <div>
      <Sidebar />
      <div>Super Admin Sidebar</div>
    </div>
  );
};

export default Dashboard;

