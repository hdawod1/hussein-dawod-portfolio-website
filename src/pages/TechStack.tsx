import React from 'react'
import html5Logo from '../images/techStack/html5-logo.png'
import css3Logo from '../images/techStack/css3-logo.png'
import tailwindLogo from '../images/techStack/tailwind-logo.png'
import jsLogo from '../images/techStack/js-logo.png'
import typescriptLogo from '../images/techStack/typescript-logo.png'
import reactLogo from '../images/techStack/react-logo.png'
import reduxLogo from '../images/techStack/redux-logo.png'
import GitHubLogo from '../images/techStack/github-logo.png'
import vscodeLogo from '../images/techStack/vscode-logo.png'
import figmaLogo from '../images/techStack/figma-logo.png'

const TechStack: React.FC = () => {
    return (
        <div id='tech-stack' data-techstack='tech-stack' className='text-center p-4 mt-8'>
            <h1 className='text-5xl text-[#42446E] font-bold'>My Tech Stack</h1>
            <p className='mt-3 text-2xl'> Technologies I've been working with recently</p>
            <div className='grid grid-cols-5 m-5 lg:mt-3 gap-2 relative sm:left-[4%] lg:left-[7%]'>
                <img src={html5Logo} alt="" />
                <img src={css3Logo} alt="" />
                <img src={tailwindLogo} className='w-[106px]' alt="" />
                <img src={jsLogo} alt="" />
                <img src={typescriptLogo} className='w-[106px]' alt="" />
                <img src={reactLogo} alt="" />
                <img src={reduxLogo} alt="" />
                <img src={GitHubLogo} className='w-[106px]' alt="" />
                <img src={vscodeLogo} className='w-[106px]' alt="" />
                <img src={figmaLogo} className='w-[75px]'  alt="" />
            </div>
        </div>
    )
}

export default TechStack