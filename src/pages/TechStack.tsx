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
import microsoftOfficeLogo from '../images/techStack/microsoft-office-logo.png'
import sharepointLogo from '../images/techStack/sharepoint-logo.png'

const TechStack: React.FC = () => {
    return (
        <div id='tech-stack' data-techstack='tech-stack' className='text-center p-4 mt-8'>
            <h1 className='text-5xl text-[#42446E] font-bold'>Technologies Used</h1>
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
                <img src={microsoftOfficeLogo} className='w-[106px] lg:static relative bottom-7'  alt="" />
                <img src={sharepointLogo} className='w-[120px] lg:mx-0 mx-1 lg:static relative bottom-6'  alt="" />
            </div>
        </div>
    )
}

export default TechStack