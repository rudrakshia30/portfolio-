import React from 'react'
import './skills.css'

import { FaPython, FaJs, FaReact, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiCplusplus, SiFigma, SiCanva } from "react-icons/si";

const Skills = () => {
  return (
    <div>
      <span className='sec'>SKILLS</span>
      <h1>Technologies & Skills</h1>

      <div className='grid'>
        <div className='category'>
          <h3>PROGRAMMING</h3>
          <ul>
            <li><FaPython /> Python</li>
            <li><SiCplusplus /> C/C++</li>
            <li><FaJs /> JavaScript</li>
            <li><FaReact /> React</li>
            <li><FaHtml5 /> HTML</li>
            <li><FaCss3Alt /> CSS</li>
          </ul>
        </div>

        <div className='category'>
          <h3>TOOLS</h3>
          <ul>
            <li><FaGitAlt /> Git</li>
            <li><FaGithub /> GitHub</li>
            <li>💻 VS Code</li>
            <li><SiFigma /> Figma</li>
            <li><SiCanva /> Canva</li>
          </ul>
        </div>

        <div className='category'>
          <h3>CONCEPTS</h3>
          <ul>
            <li>Data Structures</li>
            <li>Problem Solving</li>
            <li>OOPS basic</li>
          </ul>
        </div>

        <div className='category'>
          <h3>SOFT SKILLS</h3>
          <ul>
            <li>Leadership</li>
            <li>Teamwork</li>
            <li>Critical Thinking</li>
            <li>Communication</li>
            <li>Time Management</li>
            <li>Multi-tasking</li>
            <li>Cooperation</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills