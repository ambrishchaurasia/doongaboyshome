import React from 'react'
import Navbar from './Navbar'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='min-h-screen mb-4 flex items-center w-full overflow-hidden relative' id="Header">
      {/* Video Background */}
      <video 
        className='absolute top-0 left-0 w-full h-full object-cover z-0'
        autoPlay 
        muted 
        loop
        playsInline
      >
        <source src='/dbz_web.mp4' type='video/mp4' />
        {/* Fallback for browsers that don't support video */}
        <div className='w-full h-full bg-center bg-cover' style={{backgroundImage:"url('/dbz.png')"}}></div>
      </video>

      {/* Dark overlay for better text readability */}
      <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10'></div>

      {/* Navbar - Fixed at top */}
      <div className='absolute top-0 left-0 right-0 z-30'>
        <Navbar/>
      </div>

      {/* Content */}
      <div className='relative z-20 w-full'>
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'
        >
          <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>
            The Hostel That Feels Like Home.
          </h2>
          <div className='space-x-6 mt-16'>
            <a className='border border-white px-8 py-3 rounded' href="#Facilities"> Facilities</a>
            <a className='border bg-blue-500 px-8 py-3 rounded' href="#Contact"> Contact Us</a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Header