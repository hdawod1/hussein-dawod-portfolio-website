import React from 'react'
import profilePicture from '../images/ProfilePicture.jpeg'

const Home: React.FC = () => {
    return (
        <div id='home' data-name="home" className='h-auto p-3 lg:flex lg:items-center lg:justify-around text-center lg:text-left flex-grow'>
            <div className='lg:w-[600px] w-auto'>
                <div className='text-left lg:mr-0'>
                    <h1 className='text-[2.7rem] text-[#42446E] font-bold'>About Me</h1>
                    <p className='text-lg text-[#666666] font-normal'>I'm a Front-End React Developer working with JavaScript, TypeScript, React.js and Redux.js. Explore my projects, including a user-friendly Mock GPT-4 info site and a todo list app, showcasing my implementation of React TypeScript development. I'm passionate about creating engaging user experiences and eager to contribute to your organization's progression. Let's connect and discuss how I can add value to your team.</p>
                </div>
                <div>
                    <h1 className='text-[2.7rem] text-[#42446E] font-bold text-left'>Experience</h1>
                    <div>
                        <div className='lg:flex lg:items-center lg:justify-between'>
                            <div>
                                <p className='text-xl text-[#666666] text-left lg:mr-0'>Professional Development</p>
                                <div className='flex text-xs text-[#A7A7A7]'>
                                    <p>Career Break</p>
                                    <p className='ml-3 lg:ml-8'>Ottawa, ON</p>
                                </div>
                            </div>
                            <div className='text-xs'>
                                <p className='text-[#A7A7A7] mt-1 text-left lg:mr-0'>Oct 2022 - Present</p>
                            </div>
                            
                        </div>
                        <ul className='text-left ml-4 lg:ml-7 list-disc text-xs'>
                            <li className='break-all'>Independently developed skills in JavaScript, React, TypeScript, Redux, and Tailwind CSS</li>
                            <li className='break-all'>Recent projects include a user-friendly Mock GPT-4 info site and a Redux Toolkit-powered todo list app</li>
                            <li className=''>Demonstrated commitment to continuous learning, staying updated with industry trends, and ready to contribute expertise to front-end development opportunities</li>
                        </ul>
                    </div>
                    <div className='mt-3 lg:flex flex-col'>
                        <div className='lg:flex justify-between'>
                            <div>
                                <p className='text-xl text-[#666666] text-left'>Fulfillment Associate (Stower)</p>
                                <div className='flex text-xs text-[#A7A7A7]'>
                                    <p>Amazon.com Inc.</p>
                                    <p className='ml-3 lg:ml-8'>Ottawa, ON</p>
                                </div>
                            </div>
                            <div className='lg:ml-8 text-xs'>
                                <div className='bg-[#D7FFE0] w-fit mr-auto p-2 relative right-1 lg:left-6 lg:ml-auto lg:p-[12px] rounded-[100px]'>
                                    <p className=' lg:text-right text-[#018C0F]'>Full Time</p>
                                </div>
                                <p className='text-[#A7A7A7] mt-1 text-left'>Sep 2022 - Oct 2022</p>
                            </div>
                        </div>
                        <ul className='text-left ml-4 lg:ml-7 list-disc text-xs'>
                            <li>Scanned and Positioned products on a portable pod within the warehouse</li>
                            <li>Conducted quality control inspections to ensure items were free of defects for customer satisfaction</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1 className='text-[2.7rem] text-[#42446E] font-bold text-left'>Education</h1>
                    <div className='lg:flex justify-center lg:items-start lg:justify-between'>
                        <div>
                            <p className='text-xl text-[#666666] text-left'>High School Diploma (OSSD)</p>
                            <p className='text-left text-xs text-[#A7A7A7]'>AY Jackson Secondary School</p>
                        </div>
                        <p className='lg:mx-4 mt-3 text-left lg:mt-0 lg:mx-0 text-xs text-[#A7A7A7]'>Sep 2015 - June 2019</p>
                    </div>
                </div>
            </div>  
            <img src={profilePicture} alt="Profile Picture" className='flex-shrink h-[150px] w-[150px] lg:h-[300px] lg:w-[300px] rounded-full border-cyan-400 border-4 lg:border-8 m-auto lg:m-0 relative right-6 top-2 lg:static lg:right-0 lg:top-0' />
        </div>
    )
}

export default Home