import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link as ScrollLink } from "react-scroll"
import * as Scroll from "react-scroll"
import Hamburger from 'hamburger-react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import resumeIcon from '../images/resume-icon.png'
import profilePicture from '../images/ProfilePicture.jpeg'

const Navbar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false)

    const toggleMenu = () => setOpen(!open)

    const navigate = useNavigate()
    const scroller = Scroll.scroller

    const goToPageAndScroll = async (selector: any) => {
        await navigate("/")
        await scroller.scrollTo(selector, {
            duration: 500,
            smooth: true,
            offset: -15,
            spy: true
        })
    }

    return (
        <>
            <ScrollLink to="/" spy={true} smooth={true} offset={-75} duration={500} />
            <ScrollLink to="tech-stack" spy={true} smooth={true} offset={-75} duration={500} />
            <ScrollLink to="projects" spy={true} smooth={true} offset={-75} duration={500} />
            <ScrollLink to="contact" spy={true} smooth={true} offset={-75} duration={500} />
            <div className='flex items-center justify-between lg:mx-auto p-7 bg-slate-100'>
                <div className="flex items-center">
                    <button className='font-medium' onClick={() => goToPageAndScroll("home")}>Hussein Dawod</button>
                    <img src={profilePicture} className='mx-3 h-[50px] w-[50px] rounded-full border-cyan-400 border-2' />
                </div>
                <div className={`${open ? 'flex justify-end' : 'hidden'} lg:flex lg:items-center lg:w-auto w-full`}>
                    <div className='nav-items text-sm'>
                        <ul>
                            <li className='block text-black lg:inline-block lg:hover:text-gray-500 px-4 py-2'>
                                <button onClick={() => goToPageAndScroll("home")}>Home</button>
                            </li>
                            <li className='block text-black lg:inline-block lg:hover:text-gray-500 px-4 py-2'>
                                <button onClick={() => goToPageAndScroll("tech-stack")}>Tech Stack</button>
                            </li>
                            <li className='block text-black lg:inline-block lg:hover:text-gray-500 px-4 py-2'>
                                <button onClick={() => goToPageAndScroll("projects")}>Projects</button>
                            </li>
                            <li className='block text-black lg:inline-block lg:hover:text-gray-500 px-4 py-2'>
                                <button onClick={() => goToPageAndScroll("contact")}>Contact</button>
                            </li>
                            <li className="inline-block text-black lg:inline-block lg:hover:text-gray-500 px-4 py-2">
                                <a href="https://github.com/hdawod1" target="_blank" rel="noopener noreferrer">
                                    <BsGithub className="inline-block align-middle" />
                                </a>
                            </li>
                            <li className="inline-block text-black lg:inline-block lg:hover:text-gray-500 px-4 py-2">
                                <a href="https://www.linkedin.com/in/hussein-dawod-63206418b/" target="_blank" rel="noopener noreferrer">
                                    <BsLinkedin className="inline-block align-middle" />
                                </a>
                            </li>
                            <li className="inline-block text-black lg:inline-block mb-[-6px] mx-3">
                                <a href="https://drive.google.com/file/d/1uVVC9hpjSML2oWFnArWXvqAnKUL-Kj4-/view" target="_blank" rel="noopener noreferrer">
                                    <img src={resumeIcon} alt="" className='h-5 lg:hover:opacity-70' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lg:hidden mx-4 h-6 w-6 cursor-pointer mb-6" onClick={toggleMenu}>
                    <Hamburger />
                </div>
            </div>
        </>
    )
}

export default Navbar
