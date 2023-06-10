import React from 'react'
import mockGPT4Info from '../images/projects/mock-gpt-4-info-home-page.png'
import todoList from '../images/projects/todo-list-site.png'
import ejsTaskManager from '../images/projects/ejs-task-manager.png'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineLink } from 'react-icons/ai'

const Projects: React.FC = () => {
    return (
        <div id='projects' data-name="projects" className='p-4 mt-5 text-center'>
            <h1 className='text-5xl text-[#42446E] font-bold'>Projects</h1>
            <p className='mt-3 text-2xl'>Things I've built so far</p>
            <div className='md:flex mx-5 my-5'>
                <div className='md:w-[50%] bg-slate-100 shadow-xl rounded-xl'>
                    <img src={mockGPT4Info} className='rounded-t-xl h-auto w-auto max-h-[500px]' />
                    <div className='text-left p-7'>
                        <h4 className='text-xl lg:text-3xl font-medium'>Mock GPT-4 Info</h4>
                        <p className='text-md lg:text-lg font-light my-3'>Built a user-friendly front-end mock GPT-4 info site using ReactJS, TypeScript, and Redux Toolkit. Implemented efficient state management with Redux Toolkit for client-side signup. Leveraged React Router for navigation and utilized Tailwind CSS for modern styling.</p>
                            <p className='font-normal text-sm lg:text-base inline'>Tech Stack:</p> 
                            <p className='font-light text-xs lg:text-sm inline'> JavaScript, TypeScript, ReactJS, ReduxJS, Tailwind CSS</p>
                        <div className='flex justify-between mt-3'>
                            <span className='flex items-center'>
                                <a href="https://mock-gpt-4.onrender.com/" target="_blank"> <AiOutlineLink /> </a>
                                <a href="https://mock-gpt-4.onrender.com/" target="_blank" className='ml-1 lg:ml-2 text-sm lg:text-base underline'>Live Preview</a>
                            </span>
                            <span className='flex items-center'>
                                <a href="https://github.com/hdawod1/mock-gpt-4-site" target="_blank"><BsGithub /></a>
                                <a href="https://github.com/hdawod1/mock-gpt-4-site" target="_blank" className='ml-1 lg:ml-2 text-sm lg:text-base underline'>View Code</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='md:w-[50%] md:mx-3 md:my-0 my-7 bg-slate-100 shadow-xl rounded-xl h-auto'>
                    <img src={todoList} className='rounded-t-xl w-auto h-auto' />
                    <div className='text-left p-7'>
                        <h4 className='text-xl lg:text-3xl font-medium'>Todo List</h4>
                        <p className='text-md lg:text-lg font-light my-3'>Developed a Todo List application using ReactJS, TypeScript, Tailwind CSS, and Redux Toolkit. The project involved enabling client-side CRUD operations and implementing a responsive design.</p>
                            <p className='font-normal text-sm lg:text-base inline'>Tech Stack:</p> 
                            <p className='font-light text-xs lg:text-sm inline'> JavaScript, TypeScript, ReactJS, ReduxJS, Tailwind CSS</p>
                        <div className='flex justify-between mt-4'>
                            <span className='flex items-center'>
                                <a href="https://todo-list-ruhf.onrender.com/" target="_blank"> <AiOutlineLink /> </a>
                                <a href="https://todo-list-ruhf.onrender.com/" target="_blank" className='ml-1 lg:ml-2 text-sm lg:text-base underline'>Live Preview</a>
                            </span>
                            <span className='flex items-center'>
                                <a href="https://github.com/hdawod1/todo-list" target="_blank"><BsGithub /></a>
                                <a href="https://github.com/hdawod1/todo-list" target="_blank" className='ml-1 lg:ml-2 text-sm lg:text-base underline'>View Code</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='md:w-[50%] md:mx-3 md:my-0 my-7 bg-slate-100 shadow-xl rounded-xl h-auto'>
                    <img src={ejsTaskManager} className='rounded-t-xl w-auto h-auto' />
                    <div className='text-left p-7'>
                        <h4 className='text-xl lg:text-3xl font-medium'>EJS Task Manager</h4>
                        <p className='text-md lg:text-lg font-light my-3'>Developed a task management app using EJS, NodeJS, ExpressJS, MongoDB, and Mongoose. Allows users to easily create, read, and delete tasks. Implemented secure user authentication and password encryption. User-friendly designed interface with database integration.</p>
                            <p className='font-normal text-sm lg:text-base inline'>Tech Stack:</p> 
                            <p className='font-light text-xs lg:text-sm inline'> EJS, JavaScript, NodeJS, ExpressJS, MongoDB, Mongoose</p>
                        <div className='flex flex-col items-center mt-4'>
                            <span className='flex items-center'>
                                <a href="https://github.com/hdawod1/ejs-task-manager" target="_blank"><BsGithub /></a>
                                <a href="https://github.com/hdawod1/ejs-task-manager" target="_blank" className='ml-1 lg:ml-2 text-sm lg:text-base underline'>View Code</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
