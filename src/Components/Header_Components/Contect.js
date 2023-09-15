import React from 'react'
import Navbar from '../Body_Components/Navbar'
import Footer from '../Body_Components/Footer'
import Get_Contect from './Get_Contect'
import Exploser from '../Body_Components/Exploser'

const Contect = () => {
  return (
<>
<Navbar/>
<Exploser heading="Contect Us" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam consequatur molestiae repudiandae aliquam harum doloribus!"  btn1="Home" btn2="About"/>
<Get_Contect/>
<Footer/>
</>
  )
}

export default Contect
