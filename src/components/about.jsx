import React from 'react'

const about = () => {
  return (
    <div className='home'>
        <div className='h-content'>
          <h3>🟢 AVAILABLE FOR WORK</h3>
          <h1>Rudrakshi Agarwal</h1>
          <p className='subs'>Engineering Student | B.Tech CSE'29</p>
          <p className='about'>Hello, I'm Rudrakshi, an 18-year-old Computer Science student currently pursuing a B.Tech in Computer Science and Engineering at IIIT Delhi.<br /><br />
            I'm a passionate learner, creator, and technology enthusiast who enjoys exploring software development, artificial intelligence, and emerging technologies. I love turning ideas into projects, solving real-world problems, and continuously challenging myself through hands-on learning and experimentation. </p>
          <h2> Future Goals</h2>
          <p className='goals'>Looking ahead, my goal is to become a skilled Software and AI Engineer, contributing to innovative solutions that create meaningful impact. I strive to stay up-to-date with technological advancements, embrace lifelong learning, and grow both personally and professionally through consistency, hard work, smart problem-solving, and a strong desire to keep improving every day.</p>
        </div>
        <div className="pfp"><img src="/profile.jpeg" alt="Rudrakshi" />
           <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              Download Resume
            </a>
        </div>
      </div>
  )
}

export default about