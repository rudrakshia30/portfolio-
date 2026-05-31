import React from 'react'
import './navbar.css'
import { NavLink } from "react-router-dom";
const navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">RA</div>
    <ul className="navlinks">
        <li><NavLink to="/">ABOUT</NavLink></li>
        <li><NavLink to="/skills">SKILLS</NavLink></li>
        <li><NavLink to="/github">GITHUB</NavLink></li>
        <li><NavLink to="/projects">PROJECTS</NavLink></li>
        <li><NavLink to="/contact">CONTACT</NavLink></li>
    </ul>

    </div>
  )
}

export default navbar