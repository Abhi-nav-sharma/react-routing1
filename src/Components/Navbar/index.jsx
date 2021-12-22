import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <div style={{display:'flex',gap:'1rem',justifyContent:'center'}}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about-us">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/login">Login</Link>
      </div>
    </>
  )
}

export default NavBar
