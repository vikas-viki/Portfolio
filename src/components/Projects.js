import React, {useEffect} from 'react'
import "../styles/Projects.css";
import crypto from "../assets/crypto.png"
import quicknotes from "../assets/quicknotes.png"
import resumeBuilder from "../assets/resumebuilder.png"
import news from "../assets/news.png"
import BmyS from "../assets/BmyS.png"
import pillow from "../assets/pillow.png"
import CrowdFunding from "../assets/crowdFunding.png";
import scanner from "../assets/0xscanner.png"
import AOS from 'aos';
import 'aos/dist/aos.css'

const Projects = () => {
    const projects = [
        {
            id: 8,
            title: '0xScanner',
            description: "Scan your blockchain address on multiple chains for balance, transactions, ERC20 tokens, NFTs & more, with standardized results.",
            image: scanner,
            link: 'https://0xscanner.on.fleek.co/',
            github: 'https://github.com/vikas-viki/0xScanner'
        },
        {
            id: 7,
            title: 'Crowd Funding',
            description: "A blockchain-based crowdfunding platform that enables anyone to create and manage fundraising campaigns with ease, security and efficiency.",
            image: CrowdFunding,
            link: 'https://crowd-funding-fyr8.onrender.com/',
            github: 'https://github.com/vikas-viki/Crowd-Funding-client'
        },
        {
            id: 6,
            title: "Pillow",
            description: "Decentralized & automated approach to real estate transactions, eliminating intermediaries, reducing costs, increasing transparency & efficiency.",
            image: pillow,
            link: '',
            github: 'https://github.com/vikas-viki/Pillow'
        },
        {
            id: 5,
            title: "Crypto Tracer",
            description: "The dashboard provides real-time price data for over 200 cryptocurrencies, making it a valuable resource for investors seeking to stay informed.",
            image: crypto,
            link: 'https://tracecrypto.netlify.app/',
            github: 'https://github.com/vikas-viki/crypto-tracer-frontend'
        },
        {
            id: 4,
            title: "Resume Builder",
            description: "The team-developed resume builder provides basic functionality for creating a professional resume with two pre-defined templates for easy use.",
            image: resumeBuilder,
            link: 'https://resume-builder2022.netlify.app/',
            github: 'https://github.com/vikas-viki/Resume-Builder'
        },
        {
            id: 3,
            title: "News App",
            description: "The News API-powered app offers real-time updates across seven categories, providing easy access to a wide range of news articles from top sources.",
            image: news,
            link: '',
            github: 'https://github.com/vikas-viki/Get-my-news'
        },
        {
            id: 2,
            title: "Note Maker",
            description: "The basic note maker enables users to perform essential CRUD operations, helping them take quick notes and manage personal notes efficiently.",
            image: quicknotes,
            link: 'https://takeshortnotes.netlify.app/',
            github: 'https://github.com/vikas-viki/iNotebook-client'
        },
        /*
        {
            id: 1,
            title: "Book My Show",
            description: "The full-stack app showcases API requests, data retrieval, user feedback, and essential components of full-stack development.",
            image: BmyS,
            link: 'https://bookmyshow-almabetter2022.netlify.app/',
            github: 'https://github.com/vikas-viki/BookMyShow-frontend'
        },
        */
    ]
    useEffect(()=>{
        AOS.init({duration: 2000});
    },[]);
    return (
        <section id='projects' className='projects' >
            <span className='projects-head section-head sec-head'>Projects</span>
            <div className='project-cards'>
                {   
                    projects.map((project, index) => {
                        return (
                                <div className="project" data-aos='zoom-in' key={index}>
                                    <div className="project-img">
                                        <img src={project.image} alt={project.title} width='400' height='212'/>
                                    </div>
                                    <strong className='project-title'> {project.title} </strong>
                                    <div className="project-description">
                                        {project.description}
                                    </div>
                                    <span className='link'>
                                        <a href={project.link} target='_blank' >See live</a>
                                        <a href={project.github} target='_blank' >GitHub repo</a>
                                    </span>
                                </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects