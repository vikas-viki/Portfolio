import React, { useEffect, useState } from 'react';
import "../styles/Navbar.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className='navabar' data-aos='fade-down'>
      <h3 className='name'>Vikas kotary</h3>
      <ul className='navs'>
        <li
          className={`sec-head ${activeSection === 'Home' ? 'active' : ''}`}
          onClick={() => handleSectionClick('Home')}
        >
          <a href="#" className='a'>Home</a>
        </li>
        <li
          className={`sec-head ${activeSection === 'Skills' ? 'active' : ''}`}
          onClick={() => handleSectionClick('Skills')}
        >
          <a href="#skills" className='a'>Skills</a>
        </li>
        <li
          className={`sec-head ${activeSection === 'Projects' ? 'active' : ''}`}
          onClick={() => handleSectionClick('Projects')}
        >
          <a href="#projects" className='a'>Projects</a>
        </li>
        <li
          className={`sec-head ${activeSection === 'Education' ? 'active' : ''}`}
          onClick={() => handleSectionClick('Education')}
        >
          <a href="#education" className='a'>Education</a>
        </li>
        <li
          className={`sec-head ${activeSection === 'Contact' ? 'active' : ''}`}
          onClick={() => handleSectionClick('Contact')}
        >
          <a href="#contact" className='a'>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
