import React, {useEffect} from 'react';
import "../styles/Skills.css";
import css from "../assets/css.png"
import mongodb from "../assets/database-storage.png"
import webpack from "../assets/webpack.png"
import react from "../assets/react.png"
import nodejs from "../assets/nodejs.png"
import html from "../assets/html-5.png"
import js from '../assets/js.png'
import npm from  "../assets/npm.png"
import github from "../assets/github.png"
import redux from "../assets/redux.png"
import solidity from "../assets/solidity.png"
import AOS from 'aos';
import 'aos/dist/aos.css'

const Skills = () => {
    useEffect(()=>{
        AOS.init({duration: 2000});
    },[]);
    const skills = [
        {
            name: "HTML",
            icon: html
        },
        {
            name: "CSS",
            icon: css
        },
        {
            name: "JavaScript",
            icon: js
        },
        {
            name: "Reactjs",
            icon: react
        },
        {
            name: "Redux",
            icon: redux
        },
        {
            name: "MongoDB",
            icon: mongodb
        },
        {
            name: "Webpack",
            icon: webpack
        },
        {
            name: "Node js",
            icon: nodejs
        },
        {
            name: "NPM",
            icon: npm
        },
        {
            name: "GitHub",
            icon: github
        },
        {
            name: "Solidity",
            icon: solidity
        }
    ]
    return (
        <div id='skills' className='skills' >
            <span className='skills-head sec-head'>Skills</span>
            <div class="skill-cards">
                {
                    skills.map((skill, index) => {
                        return (
                            <div class="card" data-aos='flip-left' key={index}>
                                <div class="icon">
                                    <img src={skill.icon} alt={skill.name} width='100' />
                                </div>
                                <strong className='skill-name'> {skill.name} </strong>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills