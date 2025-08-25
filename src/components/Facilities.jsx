import React, { useEffect } from 'react'
import { assets, facilitiesData } from '../assets/assets'
import { motion } from "motion/react"
const Facilities = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [cardsToShow,setCardsToShow] = React.useState(1);
 useEffect(()=>{
 const updateCardsToShow=()=>{
  if(window.innerWidth>=1024){
    setCardsToShow(facilitiesData.length)
 } else{
   setCardsToShow(1)
 }};

 updateCardsToShow();
 window.addEventListener('resize',updateCardsToShow);
 return()=> window.removeEventListener('resize',updateCardsToShow);

 },[])
  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % facilitiesData.length);
  }

   const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex ===0) ? facilitiesData.length-1 : prevIndex - 1);
  }
  
  return (
   
 <motion.div 
  initial={{ opacity: 0, x:-200 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
     viewport={{ once: true }}
 className=' container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'id='Facilities' >      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Facilities <span className='underline underline-offset-4 decoration-1 under font-light'>Provided</span></h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto '>Affordable comfort with all essential amenities</p>
    
    {/*...........slider-buttons...........*/}
    <div className='flex justify-end items-center mb-8'>
        <button onClick={prevProject}
         className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
            <img src={assets.left_arrow} alt="Previous"/>
        </button>

        <button onClick={nextProject}
         className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Project'>
            <img src={assets.right_arrow} alt="Next"/>
        </button>
    </div>
    {/*........facilities-slider........*/}
    <div className='w-full overflow-hidden'>
        <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{transform: `translateX(-${(currentIndex *100)/cardsToShow}%)`}}>
            {facilitiesData.map((facility,index)=>(
                <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                <img src={facility.image} alt={facility.alt} className='w-full h-auto mb-14'/>
                <div className='absolute bottom-5 left-0 right-0 flex justify-center'>
                    <div  className='inline-block bg-white w-3/4 px-3 py-2 shadow-md'>
                    <h2 className='text-l font-semibold text-gray-800'>{facility.title}</h2>
                     <p className='text-xs'>{facility.description}</p>
                    </div>
                    </div>
           </div>
            ))}
        </div>
    </div>
    </motion.div>
  )
}

export default Facilities
