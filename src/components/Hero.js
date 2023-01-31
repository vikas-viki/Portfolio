import React from 'react'
import "../styles/Hero.css";

const Hero = () => {
    
    return (
        <div className='hero' id='hero'>
            <span className='hii'>Hii,</span><br />
            <span className='im'>I'm </span>
            <span className='hero-name'>Vikas kotari</span>
            <span className='hifhen'> - </span>
            <span className='hero-services' >Web Developer</span><br />
            <span className='description'>Passionate about creating beautiful & scalable projects from end to end and to make it availaible to needed ones.</span>
        </div>
    )
}

export default Hero