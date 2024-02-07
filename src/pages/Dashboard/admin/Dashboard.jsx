import React, { useEffect } from 'react'

import {} from '@/components/ui/button'

import { BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom';
import Sidebar from '../../components/Sidebar'
const TeacherDashboard = () => {
  const navigate = useNavigate()


  useEffect(() => {
    const fetchUserRole = async () => {
      try {

        const response = await axios.get('/api/u5er/login')

        const role = response.data

        if (role === 'faculty') {
          navigate('/faculty/dashboard');
        } else {
          console.log("couldn't fetch.")
        }
      } catch (error) {
        console.error('error fetching user role: ',  error)
      }
    }

    fetchUserRole();
  }, [navigate])
  return (
    <div>
      <Sidebar />
      <div>
        Admin Sidebar
      </div>
      
    </div>
  )
}

export default TeacherDashboard
