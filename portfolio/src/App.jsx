import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import About from './pages/About'
import BottomNav from './components/BottomNav'



function App() {
  return (
  <div>
  <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<About />} />
 
  </Routes>
  <BottomNav />
   </div>
  )
}

export default App
