import React from 'react'
import Navbar from '../Body_Components/Navbar'
import Exploser from '../Body_Components/Exploser'
import Activities from '../Body_Components/Activities'
import Be_Teacher from '../Body_Components/Be_Teacher'
import P_Teacher from '../Body_Components/P_Teacher'
import Footer from '../Body_Components/Footer'

const About = () => {
  return (
    <>
    <Navbar/>
    <Exploser heading="About Us" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam consequatur molestiae repudiandae aliquam harum doloribus!"  btn1="About" btn2="Learn More"/>
    <Activities/>
    <Be_Teacher/>
    <P_Teacher/>
    <Footer/>
    </>
  )
}

export default About
