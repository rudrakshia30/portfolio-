import React from "react";
import "./skills.css";

import {
  FaPython,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaChartLine,
  FaChartArea,
  FaFileExcel,
  FaBrain,
  FaProjectDiagram,
  FaLightbulb,
  FaCubes,
  FaUserTie,
  FaUsers,
  FaComments,
  FaClock,
  FaTasks,
  FaHandshake,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiFigma,
  SiCanva,
  SiFastapi,
  SiPandas,
  SiNumpy,
  SiOpencv,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

const Skills = () => {
  return (
    <div>
      <span className="sec">SKILLS</span>
      <h1>Technologies & Skills</h1>

      <div className="grid">
        {/* Programming */}
        <div className="category" data-aos="fade-up">
          <h3>PROGRAMMING</h3>

          <ul>
            <li>
              <FaPython />
              Python
            </li>

            <li>
              <SiCplusplus />
              C/C++
            </li>

            <li>
              <FaJs />
              JavaScript
            </li>
          </ul>
        </div>

        {/* Frameworks */}
        <div className="category" data-aos="fade-up">
          <h3>FRAMEWORKS & TECHNOLOGIES</h3>

          <ul>
            <li>
              <SiFastapi />
              FastAPI
            </li>

            <li>
              <FaReact />
              React
            </li>

            <li>
              <FaHtml5 />
              HTML
            </li>

            <li>
              <FaCss3Alt />
              CSS
            </li>
          </ul>
        </div>

        {/* AI/ML */}
        <div className="category" data-aos="fade-up">
          <h3>AI/ML & COMPUTER VISION</h3>

          <ul>
            <li>
              <SiPandas />
              Pandas
            </li>

            <li>
              <SiNumpy />
              NumPy
            </li>

            <li>
              <FaChartLine />
              Matplotlib
            </li>

            <li>
              <FaChartArea />
              Seaborn
            </li>

            <li>
              <SiOpencv />
              OpenCV
            </li>

            <li>
              <FaBrain />
              LLM Integration
            </li>
          </ul>
        </div>

        {/* Developer Tools */}
        <div className="category" data-aos="fade-up">
          <h3>DEVELOPER TOOLS</h3>

          <ul>
            <li>
              <FaFileExcel />
              Excel
            </li>

            <li>
              <FaGithub />
              GitHub
            </li>

            <li>
              <FaGitAlt />
              Git
            </li>

            <li>
              <VscCode />
              VS Code
            </li>

            <li>
              <SiFigma />
              Figma
            </li>

            <li>
              <SiCanva />
              Canva
            </li>
          </ul>
        </div>

        {/* Core Concepts */}
        <div className="category" data-aos="fade-up">
          <h3>CORE CONCEPTS</h3>

          <ul>
            <li>
              <FaProjectDiagram />
              Data Structures and Algorithms
            </li>

            <li>
              <FaLightbulb />
              Problem Solving
            </li>

            <li>
              <FaCubes />
              OOP Basics
            </li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="category" data-aos="fade-up">
          <h3>SOFT SKILLS</h3>

          <ul>
            <li>
              <FaUserTie />
              Leadership
            </li>

            <li>
              <FaUsers />
              Teamwork
            </li>

            <li>
              <FaBrain />
              Critical Thinking
            </li>

            <li>
              <FaComments />
              Communication
            </li>

            <li>
              <FaClock />
              Time Management
            </li>

            <li>
              <FaTasks />
              Multitasking
            </li>

            <li>
              <FaHandshake />
              Cooperation
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;