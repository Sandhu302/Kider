import React from 'react'
import Navbar from '../Body_Components/Navbar'
import Exploser from '../Body_Components/Exploser'
import Appointment from '../Body_Components/Appointment'
import Footer from '../Body_Components/Footer'

const Make_Appointment = () => {
  return (
     <>
     <Navbar/>
     <Exploser heading="Make Appointment"  btn1="Home" btn2="pages/Appointment"/>
     <Appointment/>
     <Footer/>
     </>
  )
}

export default Make_Appointment
