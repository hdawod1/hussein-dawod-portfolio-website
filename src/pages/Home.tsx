import React from 'react'
import profilePicture from '../images/ProfilePicture.jpeg'

const Home: React.FC = () => {
    return (
        <div id='home' data-name="home" className='h-auto p-3 lg:flex lg:items-center lg:justify-around text-center lg:text-left flex-grow'>
            <div className='lg:w-[600px] w-auto'>
                <div className='text-left lg:mr-0'>
                    <h1 className='text-[2.7rem] text-[#42446E] font-bold'>About Me</h1>
                    <p className='text-lg text-[#666666] font-normal'>I am a React Developer working with JavaScript, TypeScript, ReactJS and ReduxJS. My portfolio includes projects such as a user-friendly Mock GPT-4 info site and a todo list app, which demonstrate my proficiency in React TypeScript development. I am passionate about creating engaging user experiences and am excited to contribute to your organization's growth. Let's connect and discuss how I can bring value to your team.</p>
                </div>
                <div>
                    <h1 className='text-[2.7rem] text-[#42446E] font-bold text-left'>Experience</h1>
                    <div className='mt-3 lg:flex flex-col'>
                        <div className='lg:flex justify-between'>
                            <div>
                                <p className='text-xl text-[#666666] text-left'>Research and Technology Assistant</p>
                                <div className='flex text-xs text-[#A7A7A7]'>
                                    <p>Ericsson Canada Inc</p>
                                    <p className='ml-3 lg:ml-8'>Ottawa, ON</p>
                                </div>
                            </div>
                            <div className='lg:ml-8 text-xs lg:mb-3 lg:my-0 my-3='>
                                <div className='bg-[#D7FFE0] w-fit mr-auto p-2 relative right-1 lg:left-6 lg:ml-auto lg:p-[12px] rounded-[100px]'>
                                    <p className=' lg:text-right text-[#018C0F]'>Co-op</p>
                                </div>
                                <p className='text-[#A7A7A7] mt-1 text-left'>Feb 2018 - June 2018</p>
                            </div>
                        </div>
                        <ul className='text-left ml-4 lg:ml-7 list-disc text-xs'>
                            <li>Contributed to administrative tasks using Microsoft Office Tools, as well as updating the Ericsson SharePoint Website</li>
                            <li>Updated library book records assisting in a relocation project by cataloging and physically relocating books within the building</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1 className='text-[2.7rem] text-[#42446E] font-bold text-left'>Education</h1>
                    <div className='lg:flex justify-center lg:items-start lg:justify-between '>
                        <div>
                            <p className='text-xl text-[#666666] text-left'>Algonquin College</p>
                            <p className='text-left text-sm text-[#A7A7A7]'>Web Development and Internet Applications</p>
                        </div>
                        <p className='lg:mx-4 mt-3 text-left lg:mt-0 text-xs text-[#A7A7A7]'>Sep 2019 - Present</p>
                    </div>
                    <div className='my-3 lg:flex justify-center lg:items-start lg:justify-between'>
                        <div>
                            <p className='text-xl text-[#666666] text-left'>AY Jackson Secondary School</p>
                            <p className='text-left text-sm text-[#A7A7A7]'>High School Diploma (OSSD)</p>
                        </div>
                        <p className='lg:mx-4 mt-3 text-left lg:mt-0 text-xs text-[#A7A7A7]'>Sep 2015 - June 2019</p>
                    </div>
                </div>
            </div>  
            <img src={profilePicture} alt="Profile Picture" className='flex-shrink h-[150px] w-[150px] lg:h-[400px] lg:w-[400px] rounded-full border-cyan-400 border-4 lg:border-8 m-auto lg:m-0 relative right-6 top-2 lg:static lg:right-0 lg:top-0' />
        </div>
    )
}

export default Home