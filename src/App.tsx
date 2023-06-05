import React from 'react'
import Home from './pages/Home'
import TechStack from './pages/TechStack'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='tech-stack' element={<TechStack />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
