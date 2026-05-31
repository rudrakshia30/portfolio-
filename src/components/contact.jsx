import React from 'react'
import './contact.css'
const contact = () => {
  return (
    <div className='contact'>
        <h1>
        Let's <span>build </span><br/>
        something.
        </h1>
        <p className='intro'>
        open to internship, collaborations, and intersting
        problems.<br/> Drop a message- I usually respond fast.
        </p>
        <div className="butt">
            <a href="mailto:rudrakshia30@gmail.com">EMAIL</a>
            <a href="https://github.com/rudrakshia30">GITHUB</a>
            <a href="https://www.linkedin.com/in/rudrakshi-agarwal-264847379/">LINKEDIN</a>
        </div>
        <footer>
        <p>© 2026 — Designed & Developed by me</p>
        <p>Aspiring Software & AI Engineer</p>
        </footer>
    </div>
  )
}

export default contact
