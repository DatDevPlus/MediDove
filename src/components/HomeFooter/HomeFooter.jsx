import React from "react";
import { Link } from "react-router-dom";
import "./HomeFooter.scss";
import { MailOutlined, GlobalOutlined, FlagOutlined } from "@ant-design/icons";

const HomeFooter = () => {
  return (
    <>
      <footer className="home-footer">
        <div className="footer-top primary-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-8">
                <div className="footer-contact-info ">
                  <div className="emmergency-call fix">
                    <div className="emmergency-call-icon f-left">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="emmergency-call-text f-left">
                      <h6>Emergency number</h6>
                      <span>202-555-0104</span>
                    </div>
                  </div>
                  <div className="footer-logo ">
                    <Link to="/">
                      <img
                        src="https://medi-dove.netlify.app/img/logo/footer-logo.png"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="footer-contact-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut.
                    </p>
                  </div>
                  <div className="footer-emailing">
                    <ul>
                      <li>
                        <MailOutlined className="i" />
                        info@examplemedical.com
                      </li>
                      <li>
                        <GlobalOutlined className="i" />
                        examplemedical.com
                      </li>
                      <li>
                        <FlagOutlined className="i" />
                        227 Marion Street, Columbia
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                <div className="footer-widget">
                  <div className="footer-title">
                    <h3>Departments</h3>
                  </div>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link to="/servicesDetails">Surgery and Radiology</Link>
                      </li>
                      <li>
                        <Link to="/servicesDetails">Family Medicine</Link>
                      </li>
                      <li>
                        <Link to="/servicesDetails">Women’s Health</Link>
                      </li>
                      <li>
                        <Link to="/servicesDetails">Optician</Link>
                      </li>
                      <li>
                        <Link to="/servicesDetails">Pediatrics</Link>
                      </li>
                      <li>
                        <Link to="/servicesDetails">Dermatology</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 offset-xl-1 col-lg-3 d-md-none d-lg-block">
                <div className="footer-widget">
                  <div className="footer-title">
                    <h3>Quick Links</h3>
                  </div>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link to="/servicesDetails">Departments</Link>
                      </li>
                      <li>
                        <Link to="/doctors">Our Doctors</Link>
                      </li>
                      <li>
                        <Link to="/blogs">News</Link>
                      </li>
                      <li>
                        <Link to="/shop">Shop</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/contact">Book an Appointment</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="footer-copyright text-center">
                  <p className="white-color">Copyright by@ BasicTheme - 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomeFooter;
