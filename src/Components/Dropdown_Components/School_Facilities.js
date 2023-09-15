import React from 'react'
import Navbar from '../Body_Components/Navbar'
import Exploser from '../Body_Components/Exploser'
import Facilities from '../Body_Components/Facilities'
import Footer from '../Body_Components/Footer'

const School_Facilities = () => {
  return (
      <>
      <Navbar/>
      <Exploser  heading="School Facilities"  btn1="Learn More" btn2="pages/Facilities"/>
      <Facilities/>
      <Footer/>
      </>
  )
}

export default School_Facilities
