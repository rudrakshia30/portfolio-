import React from 'react'
import './navbar.css'
const navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">RA</div>
    <ul class="navlinks">
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="#github">GITHUB</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#contact">CONTACT</a></li>
    </ul>

    </div>
  )
}

export default navbar