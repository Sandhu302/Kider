import React from 'react'
import './body.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
  <div className="container-fluid" style={{fontSize:25,color:"black"}}>
    <Link className="navbar-brand" href="/"><h2 style={{color:"red", fontSize:30,fontFamily: 'Pacifico, cursive'}}><i className="fa-solid fa-book-open-reader" style={{fontSize:40}}></i> Kider</h2></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/classes">Classes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/contect">Contect</Link>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </Link>
          <ul className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
            <li><Link className="dropdown-item" to="/become_teacher">Become A Teacher</Link></li>
            <li><Link className="dropdown-item" to="/popular_teachers">Popular Teachers</Link></li>
            <li><Link className="dropdown-item" to="/facilities">School Facilities</Link></li>
            <li><Link className="dropdown-item" to="/appointment">Make Appointment</Link></li>
          </ul>
        </li>
      </ul>
    </div>
    <Link to="" className="btn btn-primary rounded-pill px-3 d-none d-lg-block">Join Us<i className="fa fa-arrow-right ms-3"></i></Link>
  </div>
</nav>
    </>
  )
}

export default Navbar
