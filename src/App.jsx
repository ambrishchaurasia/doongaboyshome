import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Facilities from './components/Facilities'
import Testimonials from './components/Testimonials'
import Contacts from './components/Contacts'
import { ToastContainer} from 'react-toastify';
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Facilities/>
      <Testimonials/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default App
