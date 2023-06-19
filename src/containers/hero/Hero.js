import React, { useEffect, useState } from 'react'
import './hero.css'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {VscLinkExternal} from 'react-icons/vsc'
import {MdComputer} from 'react-icons/md'

const Hero = () => {

    const [techStack,setTechStack] = useState('React');
    const techStacks = ['React','HTML','CSS','Javascript','NextJs']

    useEffect(()=>{
    let currIndex = 0;

        const interval = setInterval(()=>{
            setTechStack(techStacks[currIndex]);
            currIndex = (currIndex+1)%techStacks.length
        },2000)
        return ()=> clearInterval(interval)
    },[])

  return (
    <section className='hero-section section__margin section__padding'>
        <aside className='hero-section-aside'>
            <div className='container'>
            <h3>Front End Developer</h3>
            <div className='social-card'>
                <ul className='social-card-list'>
                    <li><a><BsLinkedin/> LinkedIn <VscLinkExternal/></a></li>
                    <li><a><BsGithub/> GitHub <VscLinkExternal/></a></li>
                </ul>
            </div>
            </div>
            
        </aside>
        <main className='hero-section-main'>
            <h1>I develop <MdComputer/></h1>
            <h1>Websites, WebApps</h1> 
            <h2 >using</h2>
            <h1 className='dynamic-text'>{techStack}</h1>
        </main>
    </section>
  )
}

export default Hero