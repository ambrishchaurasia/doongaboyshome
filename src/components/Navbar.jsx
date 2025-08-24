import React from 'react'
import {assets} from '../assets/assets'
const Navbar = () => {
  const [showMobileMenu,setShowMobileMenu]=React.useState(false);
   React.useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow='hidden'
    }
    else{
      document.body.style.overflow='auto'
    }
    return()=>{
      document.body.style.overflow='auto'
    };
  },[showMobileMenu])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img  src={assets.logo} alt=""/>
        
        <ul className='hidden md:flex gap-7 text-white'>
          <a href='#Header' className='cursor-pointer hover:text-gray-400' >Home</a>
           <a href='#About' className='cursor-pointer hover:text-gray-400'>About</a>
            <a href='#Facilities'  className='cursor-pointer hover:text-gray-400'>Facilities</a>
             <a href='#Testimonials' className='cursor-pointer hover:text-gray-400'>Testimonials</a>
        </ul>
        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Hey Student</button>
        <img src={assets.menu_icon} onClick={()=>{setShowMobileMenu(true)}}  className='md:hidden w-7'/>
     
      </div>
      {/* .....modbile-menu........*/}
      <div className={`md:hidden ${showMobileMenu? 'fixed w-full' :'h-0 w-0' } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex  justify-end p-6 '>
          <img src={assets.cross_icon} onClick={()=>{setShowMobileMenu(false)}}  className='w-6' alt=''/>
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'> 
          <a onClick={()=>setShowMobileMenu(false)} href="#Header" className='px-4 py2 rounded-full inline-block'> Home </a>
          <a onClick={()=>setShowMobileMenu(false)} href="#About" className='px-4 py2 rounded-full inline-block'> About </a>
          <a onClick={()=>setShowMobileMenu(false)} href="#Facilities" className='px-4 py2 rounded-full inline-block'>Facilities</a>
           <a onClick={()=>setShowMobileMenu(false)} href="#Testimonials" className='px-4 py2 rounded-full inline-block'> Testimonials</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
