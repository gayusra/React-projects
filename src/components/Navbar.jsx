import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
     <>
       <nav>
        <h1>logo</h1>
        <ul>
            <li><Link to={'/home'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/menu'}>Menu</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
       </nav>
     </>
  )
}

export default Navbar
