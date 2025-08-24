import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, x: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
     viewport={{ once: true }}
    className=' flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About' >
      <h1 className='text-2xl sm:text-4xl font-bold md-2'>About <span className='underline underline-offset-4 decoratio-1 under font-light'>Our Hostel</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Dedicated to Your Comfort, Designed for Your Success</p>

    <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
    <img src={assets.brand_img } alt="" className='w-full  sm:w-1/2 max-w-lg'/>
   <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
      <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
      <div>
        <p className='text-4xl font-medium text-gray-800'>10+</p>
        <p>Years of Trusted Presence</p>
      </div>

       <div>
        <p className='text-4xl font-medium text-gray-800'>2km</p>
        <p>From UPES Campus(Bidholi)</p>
      </div>

       <div>
        <p className='text-4xl font-medium text-gray-800'>24/7</p>
        <p>WiFi & Power Backup</p>
      </div>

       <div>
        <p className='text-4xl font-medium text-gray-800'>100%</p>
        <p>Nutritious Meals Provided</p>
      </div>
       </div>
       <p className='my-10 max-w-lg'>Doonga Boys Home is a boys’ hostel exclusively for UPES students, located in the calm and peaceful surroundings of Doonga, just 2 km from the busy streets of Bidholi. With a total capacity of 46 students, we provide a comfortable, home-like stay with personal attention to every resident’s needs. From nutritious meals and high-speed WiFi to laundry services and a well-equipped gym, everything is designed to make student life easier. Enjoy spacious rooms and a serene environment that lets you focus on your studies while feeling at home.</p>  
       <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</button>
       </div>  
     </div>
</motion.div>
  )
}

export default About
