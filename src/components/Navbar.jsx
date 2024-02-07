import React from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='w-full flex justify-between p-10'>
        <div>
          <img src={''} alt="Logo" />
        </div>
        <div>
          <ul className='flex '>
            <li className='px-3'><Link to={'/'}>News</Link></li>
            <li className='px-3'><Link to={'https://pensms.phinma.edu.ph/apply/au'}>Apply</Link></li>
          </ul>
        </div>
        
      </nav>
    </div>
  )
}

export default Navbar
