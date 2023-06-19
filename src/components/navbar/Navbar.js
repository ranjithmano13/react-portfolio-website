import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <nav className='navlink'>
    <ul className='navlink-list'>
        <li><a href='#hero'>Home</a></li>
        <li><a >About</a></li>
        <li><a>Tech Stacks</a></li>
        <li><a>Portfolio</a></li>
        <li><a>Get In Touch</a></li>
    </ul>
    </nav>
  )
}

export default Navbar