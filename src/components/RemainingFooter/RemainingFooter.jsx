import React from "react";
import { Link } from "react-router-dom";
import "./RemainingFooter.scss";
import { MailOutlined, GlobalOutlined, FlagOutlined } from "@ant-design/icons";

const RemainingFooter = () => {
  return (
    <>
      <footer className="remaining-footer">
        <div className="footer-top primary-bg footer-map pos-rel pt-120 pb-80">
          <div className="container">
            <div
              className="row align-items-center"
              style={{ position: "relative", zIndex: "9999" }}
            >
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="footer-contact-info footer-contact-info-3 mb-40">
                  <div className="footer-logo mb-35">
                    <Link to="/">
                      <img
                        src="https://medi-dove.netlify.app/img/logo/footer-logo-3.png"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="footer-contact-content mb-25">
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
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="footer-widget mb-40">
                  <div className="footer-title">
                    <h3>Departments</h3>
                  </div>
                  <div className="footer-menu footer-menu-2">
                    <ul>
                      <li>
                        <Link to="/servicesDetails">Surgery and Radiology</Link>
                      </li>
                      <li>
                        <Link to="/servicesDetails">Departments</Link>
                      </li>
                      <li>
                        <Link to="/servicesDetails">Family Medicine</Link>
                      </li>
                      <li>
                        <Link to="/doctors">Our Doctors</Link>
                      </li>
                      <li>
                        <Link to="/servicesDetails">Women’s Health</Link>
                      </li>
                      <li>
                        <Link to="/blogs">News</Link>
                      </li>
                      <li>
                        <Link to="/servicesDetails">Optician</Link>
                      </li>
                      <li>
                        <Link to="/shop">Shop</Link>
                      </li>
                      <li>
                        <Link to="/servicesDetails">Pediatrics</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/servicesDetails">Dermatology</Link>
                      </li>
                      <li>
                        <Link to="/contact">Book an Appointment</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="footer-widget mb-40">
                  <div className="footer-title">
                    <h3>News Feeds</h3>
                  </div>
                  <div className="blog-feeds pe-15">
                    <div className="single-blog-feeds mb-20">
                      <div className="blog-feeds-thumb">
                        <Link to="/blogDetails">
                          <img
                            src="https://medi-dove.netlify.app/img/blog/feeds-thumb-1.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="blog-feeds-text">
                        <h5>
                          <Link to="/blogDetails">
                            Lorem ipsum dolor sit am et, consectetur.
                          </Link>
                        </h5>
                        <span className="feeds-date">14 Feb 2022</span>
                      </div>
                    </div>
                    <div className="single-blog-feeds mb-20">
                      <div className="blog-feeds-thumb">
                        <Link to="/blogDetails">
                          <img
                            src="https://medi-dove.netlify.app/img/blog/feeds-thumb-2.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="blog-feeds-text">
                        <h5>
                          <Link to="/blogDetails">
                            Lorem ipsum dolor sit am et, consectetur.
                          </Link>
                        </h5>
                        <span className="feeds-date">14 Feb 2022</span>
                      </div>
                    </div>
                    <div className="single-blog-feeds mb-20">
                      <div className="blog-feeds-thumb">
                        <Link to="/blogDetails">
                          <img
                            src="https://medi-dove.netlify.app/img/blog/feeds-thumb-3.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="blog-feeds-text">
                        <h5>
                          <Link to="/blogDetails">
                            Lorem ipsum dolor sit am et, consectetur.
                          </Link>
                        </h5>
                        <span className="feeds-date">14 Feb 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom pt-25 pb-20">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="footer-copyright footer-copyright-3 text-center">
                  <p>Copyright by@ BasicTheme - 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default RemainingFooter;
