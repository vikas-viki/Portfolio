import React, {useState} from 'react'
import "../styles/main.css"
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Contact from '../components/Contact'

const App = () => {

  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className='main-container'>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}

export default App