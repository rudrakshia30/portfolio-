import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Contact from './components/contact'
import About from './components/about'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skill from './components/skills'
import Git from "./components/git";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/github" element={<Git />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
