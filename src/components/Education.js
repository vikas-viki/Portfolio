import React, {useEffect} from 'react'
import "../styles/Education.css";
import hackerrank from "../assets/hackerrank.png"
import sololearn from "../assets/sololearn.png"
import almabetter from "../assets/almabetter.png"
import puc from "../assets/puc.png"
import puboard from "../assets/puboard.png"
import mangloreU from "../assets/mangloreU.png"
import AOS from 'aos';
import 'aos/dist/aos.css'

const Education = () => {
    useEffect(()=>{
        AOS.init({duration: 1800});
    },[]);
    const education = [


        {
            title: 'Introduction to Web',
            image: almabetter,
            link: 'https://certificates.almabetter.com/en/verify/05301540693571'
        },
        {
            title: 'Introduction to JavaScript',
            image: sololearn,
            link: 'https://www.sololearn.com/certificates/CC-2DTFHNTM'
        },
        {
            title: 'JavaScript Basic',
            image: hackerrank,
            link: 'https://www.hackerrank.com/certificates/6fa3fe6ff0e7'
        },
        {
            title: 'JavaScript Intermediate',
            image: sololearn,
            link: 'https://www.sololearn.com/certificates/CC-JO04DRBC'
        },
        {
            title: 'JavaScript Intermediate',
            image: hackerrank,
            link: 'https://www.hackerrank.com/certificates/fd0addaf8b68'
        },
        {
            title: 'React Basic',
            image: hackerrank,
            link: 'https://www.hackerrank.com/certificates/c136120bf879'
        },
        {
            title: 'Java Basic',
            image: hackerrank,
            link: 'https://www.hackerrank.com/certificates/902c006d1243'
        },
    ]
    return (
        <div id='education' className='educations' >
            <span className='education-head sec-head'>Education</span>
            <div className='school-education'>
                <div className='degree' data-aos='fade-right'>
                    <span>
                        <img src={mangloreU} width='100' alt="Manglore University" />
                    </span>
                    <span className='edu-details'>
                        <span className='education-title'>BCA - Manglore University <span className='education-time'>(2022 - Present)</span></span>
                        <span className='score-certificate'>
                            <span className='score'>Score: CGPA() </span>
                            {/* <span className='edu-view' >View</span> */}
                        </span>
                    </span>
                </div>
                <div className='puc' data-aos='fade-right'>
                    <span>
                        <img src={puboard} width='107' alt="PU" />
                    </span>
                    <span className='edu-details'>
                        <span className='education-title'>PU - Banglore board <span className='education-time'>(2020 - 2022)</span></span>
                        <span className='score-certificate'>
                            <span className='score' >Score: 97%</span>
                            <span className='edu-view' ><a href={puc} target='_blank' >View</a></span>
                        </span>
                    </span>
                </div>
            </div>
            <div class="education-cards">
                {
                    education.map((education, index) => {
                        return (
                            <div class="education" data-aos='fade-left' key={index}>
                                <div class="education-img">
                                    <img src={education.image} alt={education.title} width='100' style={{ borderRadius: '5px' }} />
                                </div>
                                <strong className='education-title'> {education.title} </strong>
                                <span className='link'><a href={education.link} target='_blank' >View</a></span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Education