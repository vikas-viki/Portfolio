import React , {useEffect} from 'react'
import "../styles/Hero.css";
import AOS from 'aos';
import 'aos/dist/aos.css'

const Hero = () => {
    useEffect(()=>{
        AOS.init({duration: 700});
    },[]);
    return (
        <div className='hero'  data-aos='zoom-in' id='hero'>
            <span className='hii'>Hii,</span><br />
            <span className='im'>I'm </span>
            <span className='hero-name'>Vikas kotary</span>
            <span className='hifhen'> - </span>
            <span className='hero-services' >Web Developer</span><br />
            <span className='description'>Passionate about creating beautiful & scalable projects from end to end and to make it availaible to needed ones.</span>
        </div>
    )
}

export default Hero