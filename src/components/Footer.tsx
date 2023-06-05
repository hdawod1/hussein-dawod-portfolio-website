import React from 'react'
import Navbar from './Navbar'

const Footer: React.FC = () => {
    return (
        <div>
                <div className='flex items-center justify-center mt-8 text-[#42446E] text-sm'>
                    <p>613-219-1466</p>
                    <p className='mx-4'>dawod0199@gmail.com</p>
                </div>
            <div className='mt-2'>
                <Navbar />
            </div>
        </div>
    )
}

export default Footer