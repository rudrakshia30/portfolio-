import React from "react";

const About = () => {
  return (
    <div className="home">
      <div className="h-content" data-aos="fade-right">
        <h3>🟢 AVAILABLE FOR WORK</h3>

        <h1>Rudrakshi Agarwal</h1>

        <p className="subs">
          Engineering Student | B.Tech CSE&apos;29
        </p>

        <div className="info-cards">
          <div className="info-card">
            <span className="info-title">CGPA</span>
            <h3>8.9 / 10</h3>
          </div>
          <div className="info-card">
            <span className="info-title">College</span>
            <h3>IIIT Delhi</h3>
          </div>
        </div>
        <p className="about">
          Hello, I&apos;m Rudrakshi, an 18-year-old Computer Science student
          currently pursuing a B.Tech in Computer Science and Engineering at
          IIIT Delhi.
          <br />
          <br />
          I&apos;m a passionate learner, creator, and technology enthusiast who
          enjoys exploring software development, artificial intelligence, and
          emerging technologies. I love turning ideas into projects, solving
          real-world problems, and continuously challenging myself through
          hands-on learning and experimentation.
        </p>

        <h2>Future Goals</h2>

        <p className="goals">
          Looking ahead, my goal is to become a skilled Software and AI
          Engineer, contributing to innovative solutions that create meaningful
          impact. I strive to stay up-to-date with technological advancements,
          embrace lifelong learning, and grow both personally and professionally
          through consistency, hard work, smart problem-solving, and a strong
          desire to keep improving every day.
        </p>
      </div>

      <div className="pfp">
        <img src="/profile.jpeg" alt="Rudrakshi Agarwal" />

        <a
          href="/resume.pdf"
          download="Rudrakshi_Agarwal_Resume.pdf"
          className="resume-btn"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default About;