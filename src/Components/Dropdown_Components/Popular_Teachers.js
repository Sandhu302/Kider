import React from 'react'
import Navbar from '../Body_Components/Navbar'
import Exploser from '../Body_Components/Exploser'
import P_Teacher from '../Body_Components/P_Teacher'
import Footer from '../Body_Components/Footer'

const Popular_Teachers = () => {
  return (
    <>
    <Navbar/>
    <Exploser heading="Popular Teachers" text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis perspiciatis amet alias adipisci labore ullam!" btn1="Home" btn2="Our Classes"/>
    <P_Teacher/>
    <P_Teacher/>
    <Footer/>
    </>
  )
}

export default Popular_Teachers
