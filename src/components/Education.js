import "../styles/Education.css";
import 'aos/dist/aos.css'

import React, { useEffect } from 'react'

import AOS from 'aos';
import almabetter from "../assets/almabetter-ico.png"
import hackerrank from "../assets/hackerrank.png"
import mangloreU from "../assets/mangloreU.png"
import puboard from "../assets/puBoard.png"
import puc from "../assets/puc.png"
import sololearn from "../assets/sololearn.png"
import udemy from "../assets/udemy.png"

const Education = () => {
    useEffect(() => {
        AOS.init({ duration: 1800 });
    }, []);
    const education = [
        {
            title: 'Gas Costs Optimization',
            image: udemy,
            link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-54c120e0-788f-4b78-96bc-a27ba64abd24.jpg'
        },
        {
            title: "Introduction to AWS",
            image: almabetter,
            link: 'https://certificates.almabetter.com/en/verify/13391667101924'
        },
        {
            title: 'Data Structures and Algorithms',
            image: almabetter,
            link: 'https://certificates.almabetter.com/en/verify/19542648205321'
        },
        {
            title: "Object Oriented Programming",
            image: almabetter,
            link: 'https://certificates.almabetter.com/en/verify/53494702117097'
        },
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
    ];

    const nfts = [
        {
            image: 'https://authoring.metacrafters.io/assets/cms/Group_483385_e6b65921cf.png',
            link: 'https://solscan.io/account/2NVDMCk1AoZF7qNW97Eo6dBNSvNF8nVWwGA792X1mDa5'
        },
        {
            image: 'https://authoring.metacrafters.io/assets/cms/Group_483375_f1b416ffb4.png',
            link: 'https://solscan.io/account/2NVDMCk1AoZF7qNW97Eo6dBNSvNF8nVWwGA792X1mDa5'
        }
    ];

    const CLG = [
        {
            CourseTitle: 'Bachelor of Computer Applications',
            CollegeTitle: 'Mangalore University',
            UniversityImage: mangloreU,
            description: [
                "Comprehensive learning of several programming languages including Java, C, Python, and more.",
                "Practical implementation of learned concepts into problem solving.",
                "Enjoyable moments alongside learning.",
            ],
            marks_certificate: [
                "Present", "Present"
            ]
        },
        {
            CourseTitle: 'II Pre-University Course',
            CollegeTitle: 'Bangalore University',
            UniversityImage: puboard,
            description: [
                "Thorough understanding of theoretical aspects such as Business Economics and Accountancy.",
                "Acquired proficiency in C++ programming and applied it to problem solving.",
                "Experimented with HTML and CSS, resulting in enjoyable experiences.",
            ],
            marks_certificate: [
                "97%", puc
            ]
        }
    ]

    return (
        <section id='education' className='educations' >
            <span className='education-head section-head sec-head'>Education</span>
            <div className='school-education'>
                {
                    CLG.map((el, i) => {
                        return (
                            <div key={i} className='clg-main'>
                                <div className='clg-header'>
                                    <div className='clg-image'>
                                        <img src={el.UniversityImage} alt='image' width={100} />
                                    </div>
                                    <div className='header-details'>
                                        <span className='course-title'>{el.CourseTitle}</span>
                                        <div className='course-details'>
                                            <div className='marks-certificate'>
                                                <span className='clg-marks'>Marks: {el.marks_certificate[0]}</span>
                                                <span className='clg-certificate'><a href={el.marks_certificate[1]} target='_blank'>{el.marks_certificate[1] !== "Present" ? 'View Certificate' : 'Present'}</a></span>
                                            </div>
                                            <span className='clg-university'>- {el.CollegeTitle}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='clg-body'>
                                    <ul className='clg-body-list'>
                                        {el.description.map((el, i) => {
                                            return <li key={i} className='clg-body-item'>{el}</li>
                                        })
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="education-cards">
                {
                    nfts.map((education, index) => {
                        return (
                            <div className="education" id="nft" data-aos='fade-left' key={index}>
                                <div className="education-img">
                                    <img src={education.image} alt={education.title} width='300' style={{ borderRadius: '5px' }} />
                                </div>
                                <span className='link'><a href={education.link} target='_blank' >View</a></span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="education-cards">

                {
                    education.map((education, index) => {
                        return (
                            <div className="education" data-aos='fade-left' key={index}>
                                <div className="education-img">
                                    <img src={education.image} alt={education.title} width='100' style={{ borderRadius: '5px' }} />
                                </div>
                                <strong className='education-title'> {education.title} </strong>
                                <span className='link'><a href={education.link} target='_blank' >View</a></span>
                            </div>
                        )
                    })
                }
            </div>
        </section >
    )
}

export default Education