import React from 'react'

import Navbar from '../Body_Components/Navbar'
import Exploser from '../Body_Components/Exploser'
import Facilities from '../Body_Components/Facilities'
import Activities from '../Body_Components/Activities'
import Be_Teacher from '../Body_Components/Be_Teacher'
import Classes from '../Body_Components/Classes'
import Appointment from '../Body_Components/Appointment'
import P_Teacher from '../Body_Components/P_Teacher'
import Clints from '../Body_Components/Clints'
import Footer from '../Body_Components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Exploser heading="Make a Bright Futute of Your Child" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam consequatur molestiae repudiandae aliquam harum doloribus!"  btn1="Learn More" btn2="About Us"/>
      <Facilities/>
      <Activities/>
      <Be_Teacher/>
      <Classes/>
      <Appointment/>
      <P_Teacher/>
      <Clints/>
      <Footer/>
    </div>
  )
}

export default Home
