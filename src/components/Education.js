import React from 'react'
import "../styles/Education.css";
import hackerrank from "../assets/hackerrank.png"
import sololearn from "../assets/sololearn.png"
import almabetter from "../assets/almabetter.png"

const Education = () => {
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
            <span className='education-head'>Education</span>
            <div className='school-education'>
                <div className='degree'>
                    <span className='education-title'>BCA - Manglore University <span className='education-time'>(2022 - Present)</span></span>
                    <br />
                    <br />
                    <br />
                    <span className='score'>Score: CGPA() </span>
                </div>
                <div className='puc'>
                    <span className='education-title'>PU - Banglore board <span className='education-time'>(2020 - 2022)</span></span>
                    <br />
                    <br />
                    <br />
                    <span className='score' >Score: 97%</span>
                </div>
            </div>
            <div class="education-cards">
                {
                    education.map((education, index) => {
                        return (
                            <div class="education" key={index}>
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