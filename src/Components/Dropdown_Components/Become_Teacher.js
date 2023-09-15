import React from 'react'
import Navbar from '../Body_Components/Navbar'
import Exploser from '../Body_Components/Exploser'
import Be_Teacher  from '../Body_Components/Be_Teacher'
import Footer from '../Body_Components/Footer'

const Become_Teacher = () => {
  return (
    <>
    <Navbar/>
    <Exploser heading="Become A Teacher" image="images/carousel-1.jpg" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, a molestiae consequuntur praesentium quos maxime!" btn1="Home" btn2="Learn More" />
    <Be_Teacher/>
    <Footer/>
    </>
  )
}

export default Become_Teacher