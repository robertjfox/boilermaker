import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="navbarCont">
      <Link to="/" className="link">
        <h1>HOME</h1>
      </Link>
      <Link to="/about" className="link">
        <h1>ABOUT</h1>
      </Link>
      <Link to="/portfolio" className="link">
        <h1>PORTFOLIO</h1>
      </Link>
    </div>
  )
}

export default Navbar
