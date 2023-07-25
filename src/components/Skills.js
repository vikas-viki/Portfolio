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
import solidity from "../assets/solidity.png";
import figma from "../assets/figma.png"
import bootstrap from "../assets/bootstrap.png"
import hardhat from "../assets/hardhat.png"
import chainlink from "../assets/chainlink.png"
import AOS from 'aos';
import 'aos/dist/aos.css'
import ethersjs from "../assets/ethersjs.png";
import tailwind from "../assets/tailwindcss.png";
import alchemy from "../assets/alchemy.png";
import pinata from "../assets/pinata.png";
import opensea from "../assets/opensea.png";

const Skills = () => {
    useEffect(()=>{
        AOS.init({duration: 2000});
    },[]);
    const skills = [
        
        {
            name: 'Chainlink Oracle',
            icon : chainlink
        },
        {
            name: 'OpenSea SDK',
            icon : opensea
        },
        {
            name: 'Pinata SDK',
            icon : pinata
        },
        {
            name: 'Alchemy SDK',
            icon : alchemy
        },
        {
            name: "Ethers JS",
            icon: ethersjs
        },
        {
            name: "Solidity",
            icon: solidity
        },
        {
            name: "Hardhat",
            icon: hardhat
        },        
        {
            name: "NPM",
            icon: npm
        },
        {
            name: "GitHub",
            icon: github
        },
        ,
        {
            name: "Figma",
            icon: figma
        },
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
            name: "Tailwind css",
            icon: tailwind
        },
        {
            name: "Bootstrap",
            icon: bootstrap
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
    ]
    return (
        <section id='skills' className='skills' >
            <span className='skills-head section-head sec-head'>Skills</span>
            <div className="skill-cards">
                {
                    skills.map((skill, index) => {
                        return (
                            <div className="card" data-aos='flip-left' key={index}>
                                <div className="icon">
                                    <img src={skill.icon} alt={skill.name} width='100'  />
                                </div>
                                <strong className='skill-name'> {skill.name} </strong>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Skills