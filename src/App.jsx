import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Contact from './components/contact'
import About from './components/about'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skill from './components/skills'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skill />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
