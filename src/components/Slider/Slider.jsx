import React, { useState } from "react";
import "./Slider.scss";
export default function BannerHome(props) {
  
  return (
    <div className="hoverDiv">
      <div
        id="carouselExampleControls"
        className="carousel slide-fade banner"
        data-ride="carousel"
      >
        <div className="carousel-inner banner">
          <div className="carousel-item active">
            <img
              className="d-block"
              src="https://medi-dove.netlify.app/static/media/slider-bg-1.a5b879494592cab4771e.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block"
              src="https://medi-dove.netlify.app/static/media/slider-bg-2in1.a274526164db40a919cb.jpg"
              alt="Second slide"
            />
          </div>
        </div>
        <div className="button-banner prev">
          <a
            className="carousel-control-prev prev-slide"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <div className="hover-prev-span">
              <span
                className="carousel-control-prev-icon prev-arrow"
                aria-hidden="true"
              />
              <span className="sr-only">Previous</span>
            </div>
          </a>
        </div>

        <div className="button-banner next">
          <a
            className="carousel-control-next next-slide"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <div className="hover-next-span">
              <span
                className="carousel-control-next-icon next-arrow"
                aria-hidden="true"
              />
              <span className="sr-only">Next</span>
            </div>
          </a>
        </div>

        {/* container text */}
        <div className="slide-text" data-aos="fade-up">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-8 col-md-10">
                <div class="hero-text">
                  <div class="hero-slider-caption ">
                    <h5>We are here for your care.</h5>
                    <h1>Best Care &amp; Better Doctor.</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div class="hero-slider-btn">
                    <a class="primary_btn btn-icon ml-0" href="/contact">
                      <span>+</span>
                      MAKE APPOINTMENT
                    </a>
                    <button class="play-btn popup-video" onClick={props.displayVideo}>
                      <i class="fas fa-play"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}
