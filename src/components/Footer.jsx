import React from 'react'
import { assets } from '../assets/assets'  
const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden'>
      <div className='container mx-auto flex flex-col md:flex-row  justify-between items-center'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img className='h-16 w-16 -ml-2' src={assets.dbz} />
            <p className='text-gray-400 mt-4'>At Doonga Boys Home, we’ve been providing students with a trusted and affordable place to stay for over 10 years. With better food, a supportive environment, and a focus on comfort, we aim to make every student feel at home while they chase their goals.</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className='flex flex-col gap-2 text-gray-400 '>
                <a href="#Header" className='hover:text-white'>Home</a>
                <a href="#Contact" className='hover:text-white'>About Us</a>
                <a href="#About" className='hover:text-white'>Contact Us</a>
                <a href="#" className='hover:text-white'>Privacy Policy</a>
            </ul>
        </div>

      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        Copyright 2025 © Doonga Boys Home. All rights reserved.
      </div>
    
    </div>
  )
}

export default Footer
