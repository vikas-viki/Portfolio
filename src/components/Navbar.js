import React, { useEffect } from 'react'
import "../styles/Navbar.css"
import AOS from 'aos';
import 'aos/dist/aos.css'
const Navbar = () => {
    
    useEffect(()=>{
        AOS.init({duration: 700});
    },[]);

    return (
        <div className='navabar' data-aos='fade-down'>
            <h3 className='name'>Vikas kotary</h3>
            <ul className='navs'>
                <li className='menu-item'><a href="#">Home</a></li>
                <li className='menu-item'><a href="#skills">Skills</a></li>
                <li className='menu-item'><a href="#projects">Projects</a></li>
                <li className='menu-item'><a href="#education">Education</a></li>
                <li className='menu-item'><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
}
export default Navbar