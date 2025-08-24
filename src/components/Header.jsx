import React from 'react'
import Navbar from './Navbar'
import { motion } from "motion/react"
const Header = () => {
  return (
    <div 
   
    className='min-h-screen mb-4 bg-center bg-cover flex items-center w-full overflow-hidden' style={{backgroundImage:"url('/dbz.png')"}} id="Header">
      <Navbar/>
      <motion.div 
       initial={{ opacity: 0, y: 100 }}
    transition={{ duration: 1.5 }}
    whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
      className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
           <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>The Hostel That Feels Like Home.</h2>
      <div className='space-x-6 mt-16'>
      <a className='border border:white px-8 py-3 rounded' href="#Facilities"> Facilities</a>
      <a className='border bg-blue-500 px-8 py-3 rounded' href="#Contact"> Contact Us</a>
    </div>
    </motion.div>
    </div>
  )
}

export default Header
