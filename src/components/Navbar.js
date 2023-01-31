import React from 'react'
import "../styles/Navbar.css"

const Navbar = () => {
    return (
        <div className='navabar'>
            <h3 className='name'>Vikas kotari</h3>
            <ul className='navs'>
                <li><a href="#">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
}
export default Navbar