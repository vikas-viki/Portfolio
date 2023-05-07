import React, { useEffect } from 'react'
import "../styles/Hero.css";
import AOS from 'aos';
import 'aos/dist/aos.css'
import scrolldown from "../assets/scrollbar.png"

const Hero = () => {
    useEffect(() => {
        AOS.init({ duration: 700 });
    }, []);
    return (
        <>
            <section className='hero' data-aos='zoom-in' id='hero'>
                <span className='hii'>Hii,</span><br />
                <span className='im'>I'm </span>
                <span className='hero-name'>Vikas kotary</span>
                <span className='hifhen'> - </span>
                <span className='hero-services' >Full Stack Developer</span><br />
                <span className='description' >Passoniate about Creating Beautiful & Scalable web apps from end to end that serve a certain purpose.

                </span>
            </section>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <img src={scrolldown} className='scrolldown-img' width='60' alt="down" />
            </div>
        </>
    )
}

export default Hero