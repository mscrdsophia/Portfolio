import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import About from './pages/About'
import BottomNav from './components/BottomNav'
import Footer from './components/Footer'
import Projects from './pages/Projects'


function App() {
  return (
  <div>
  <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<About />} />
 <Route path="/projects" element={<Projects />} />
  </Routes>
  <BottomNav />
  <Footer />
   </div>
  )
}

export default App
