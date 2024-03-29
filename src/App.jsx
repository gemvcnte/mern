import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard/superAdmin/Dashboard'
import TeacherDashboard from './pages/Dashboard/faculty/TeacherDashboard'
import NewsPage from './pages/News/NewsPage'
import LoginPage from './pages/Login/LoginPage'
import AllAnnouncement from './pages/allAnnouncement/AllAnnouncement'
import { Link } from 'react-router-dom'
import SideBar from './components/SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<NewsPage />} ></Route>
          <Route path='/sidebar' element={<SideBar />} ></Route>
          <Route path='/announcements' element={<AllAnnouncement />}></Route>
          <Route path='/auth/login' element={<LoginPage />}></Route>
          <Route path='/dean/dashboard' element={<Dashboard />}></Route>
          <Route path='/faculty/dashboard' element={<TeacherDashboard />}></Route>
        </Routes>

      </Router>
      
    </>
  )
}

export default App
