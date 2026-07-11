import { useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Contact from './components/contact'
import About from './components/about'
import Skill from './components/skills'
import Git from './components/git'
import Project from './components/project'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120
    })
  }, [])


  useEffect(() => {
    const cursor = document.querySelector('.cursor-glow')

    function moveCursor(event) {
      if (!cursor) {
        return
      }

      cursor.style.left =event.clientX + 'px'
      cursor.style.top =event.clientY + 'px'
    }

    window.addEventListener('mousemove',moveCursor)

    return () => {
      window.removeEventListener('mousemove',moveCursor)
    }
  }, [])

  return (
    <BrowserRouter>

      <div className="app">
        <div
          className="animated-background"
          aria-hidden="true"
        >
          <div className="background-blob blob-one"></div>
          <div className="background-blob blob-two"></div>
          <div className="background-blob blob-three"></div>
          <div className="background-blob blob-four"></div>
        </div>

        <div
          className="cursor-glow"
          aria-hidden="true"
        ></div>

        <div className="website-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/skills" element={<Skill />}/>
            <Route path="/github" element={<Git />}/>
            <Route path="/projects" element={<Project />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App