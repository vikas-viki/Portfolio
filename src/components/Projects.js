import React, {useEffect} from 'react'
import "../styles/Projects.css";
import crypto from "../assets/crypto.png"
import quicknotes from "../assets/quicknotes.png"
import resumeBuilder from "../assets/resumebuilder.png"
import news from "../assets/news.png"
import BmyS from "../assets/BmyS.png"
import AOS from 'aos';
import 'aos/dist/aos.css'

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Crypto Tracer",
            description: "Provides over more that 200 cryptocurrencies infomation & helping them to track their holdings easily.",
            image: crypto,
            link: 'https://tracecrypto.netlify.app/'
        },
        {
            id: 2,
            title: "Resume Builder",
            description: "Team project, that has has all the basic functionality for creating a resume easily with two pre-defined templates.",
            image: resumeBuilder,
            link: 'https://resume-builder2022.netlify.app/'
        },
        {
            id: 3,
            title: "News App",
            description: "Provides over 7 categories of news with real time updation, making it easier to get all types of new at single domain.",
            image: news,
            link: ''
        },
        {
            id: 4,
            title: "Note Maker",
            description: "Provides basic Create, Read, Update & Delete opertion on taking quick notes & maintaining user specific notes.",
            image: quicknotes,
            link: 'https://takeshortnotes.netlify.app/'
        },
        {
            id: 5,
            title: "Book My Show",
            description: "Has the basic functionality of making api requests to the server and reriveing from the sever and specifying the user about operation.",
            image: BmyS,
            link: 'https://bookmyshow-almabetter2022.netlify.app/'
        },
    ]
    useEffect(()=>{
        AOS.init({duration: 2000});
    },[]);
    return (
        <div id='projects' className='projects' >
            <span className='projects-head sec-head'>Projects</span>
            <div className='project-cards'>
                {   
                    projects.map((project, index) => {
                        return (
                                <div class="project" data-aos='zoom-in' key={index}>
                                    <div class="project-img">
                                        <img src={project.image} alt={project.title} width='400'/>
                                    </div>
                                    <strong className='project-title'> {project.title} </strong>
                                    <div class="project-description">
                                        {project.description}
                                    </div>
                                    <span className='link'><a href={project.link} target='_blank' >See live</a></span>
                                </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects