import React from 'react'
import './skills.css'
const skills = () => {
  return (
    <div>
        <span className='sec'>SKILLS</span>
        <h1>What I work with</h1>
        <div className='grid'>
            <div className='category'>
                <h3>PROGRAMMING</h3>
                <ul>
                    <li>Python</li>
                    <li>C/C++</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>
            <div className='category'>
                <h3>TOOLS</h3>
                <ul>
                    <li>Git & GitHub</li>
                    <li>VS Code</li>
                    <li>Figma</li>
                    <li>Canva</li>
                </ul>
            </div>
            <div className='category'>
                <h3>CONCEPTS</h3>
                <ul>
                    <li>Data Structures</li>
                    <li>Problem Solving</li>
                    <li>OOPS (basic)</li>
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

export default skills