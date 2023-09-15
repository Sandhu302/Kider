import React from "react";
import { Link } from "react-router-dom";

const Exploser = (props) => {
  return (
    <>
    <div className="container">
            <div className="container-fluid p-0 mb-5">
            <div className="owl-carousel header-carousel position-relative">
                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="images/carousel-1.jpg" alt=""/>
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" >
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8">
                                    <h1 className="display-2 text-white animated slideInDown mb-4">{props.heading}</h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-2">{props.text}</p>
                                    <Link to="/" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">{props.btn1}</Link>
                                    <Link to="/" className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">{props.btn2}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  );
};

export default Exploser;
