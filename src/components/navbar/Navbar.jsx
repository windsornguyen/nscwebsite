import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  return (
    <div className = "nsc__navbar">
      <div className = "nsc__navbar-links">
        <div className = "nsc__navbar-links_logo">
          <img src = { logo } alt = "Nassau Street Capital Logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar