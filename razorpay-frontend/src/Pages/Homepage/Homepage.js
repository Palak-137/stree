import React from 'react'
import home from "../../assets/img/hero-img.png";
import "../../App.css"
import Feature from '../Feature/feature.js';
import { Link } from "react-router-dom";

function Homepage() {
  return (
      <div>
          <section id="hero" class="d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1" data-aos="fade-up">
                <div>
                  <h1>One World One UPI</h1>
                  <h2>Lorem ipsum dolor sit amet, tota senserit percipitur ius ut, usu et fastidii forensibus voluptatibus. His ei nihil feugait</h2>
                  <Link to="/pay" class="download-btn"><i class="bx bxl-play-store"></i> Pay Now </Link>
                  <Link to="/tax" class="download-btn"><i class="bx bxl-apple"></i> Learn the returns </Link>
                </div>
              </div>
              <div class="col-lg-4 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img" data-aos="fade-up">
                <img src={home} class="img-fluid" alt=""/>
              </div>
            </div>
          </div>
      </section>
      <Feature></Feature>
    </div>
  )
}

export default Homepage