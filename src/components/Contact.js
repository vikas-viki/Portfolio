import React, { useEffect } from 'react'
import "../styles/Contact.css"
import profile from "../assets/profile.png"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import google from "../assets/google.png"
import youtube from "../assets/youtube.png"
import resume from "../assets/resume.png"
import AOS from 'aos';
import 'aos/dist/aos.css'

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1900 });
    }, []);
    return (
        <section id='contact' className='contacts'>
            <span className='contact-head section-head sec-head'>Contact Me</span>
            <div className='contact-info'>
                <span data-aos='flip-right'>
                    <img src={profile} alt="profile" className='profile-img' height='500' />
                </span>
                <div className='availaibles' data-aos='flip-left'>
                    <span>
                        <span className='social-head' >Social media</span>
                        <div className='handle-links'>
                            <a href='https://www.linkedin.com/in/vikas-kotari-6a0918240/' target='_blank'><img src={linkedin} alt='linkedin' width='30' /></a>
                            <a href='https://github.com/vikas-viki' target='_blank' ><img src={github} alt='github' style={{backgroundColor: '#fff', borderRadius: '2px'}} width='30' /></a>
                            <a href="../assets/resume.pdf" target="_blank"><img src={resume} alt='resume' width='30' /></a>
                            <a href="mailto:vikaskotary001@gmail.com" ><img src={google} alt='google' width='30' /></a>
                            <a href="https://www.youtube.com/@webdevsolutions" traget='_blank' ><img src={youtube} alt='youtube' width='30' /></a>
                        </div>
                    </span>
                    <span className='youtube'>
                        <span className='social-head'>Youtube</span>
                        <span className='youtube-desc'>
                            To create a community where everyone can solve their problems in building Web apps and for developing personal communication.
                        </span>
                        <span>
                            <a href='https://www.youtube.com/@webdevsolutions' target='_blank' className='youtube-button' >
                                <button className="btn-donate">
                                    Visit Youtube
                                </button>
                            </a>
                        </span>
                    </span>
                    <span>
                        <span className='social-head '>Contact number: <span className='contact-num'>+91 9741787607</span></span>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Contact