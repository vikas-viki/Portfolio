import React from 'react'
import "../styles/main.css"
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Education from '../components/Education'

const App = () => {
  return (
    <div className='main-container'>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
    </div>
  )
}

export default App