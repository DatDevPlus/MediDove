/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./DoctorDetails.scss";
import {
  CheckOutlined,
  TwitterOutlined,
  BehanceOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const DoctorDetails = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-xl-7 col-lg-8">
          <div className="doctor_details_box">
            <div className="doctor_details_tittle">
              <div className="section_icon">
                <img
                  src="https://medi-dove.netlify.app/img/section/section-back-icon-sky.png"
                  class="section-back-icon back-icon-left"
                  alt=""
                />
              </div>
              <div className="section_text">
                <h5> introducing my self </h5>
                <h1> There Is Nothing To Show Something.</h1>
              </div>
              <div className="section_line">
                <img
                  src="https://medi-dove.netlify.app/img/shape/section-title-line.png"
                  alt=""
                />
              </div>
            </div>
            <div className="doctor_details_text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing eilt, sed do
                eiusmod tempor incididunt ut labore et dolore magna ailqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut ailquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate veilt esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt moillt anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt expilcabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci veilt, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam ailquam quaerat
                voluptatem.
              </p>
            </div>
            <div className="doctor_details_tittle">
              <div className="section_text">
                <h1> Here Is Skills </h1>
              </div>
              <div className="section_line">
                <img
                  src="https://medi-dove.netlify.app/img/shape/section-title-line.png"
                  alt=""
                />
              </div>
            </div>
            <div className="doctor_details_skill">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing eilt, sed do
                eiusmod tempor incididunt ut labore et dolore magna ailqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut ailquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate veilt esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt moillt anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
            <div className="doctor_details_feature row">
              <div className="doctor_details_feature-1 col">
                <div className="icon-1">
                  <img
                    src="https://medi-dove.netlify.app/img/services/ser-fea-icon-1.png"
                    alt=""
                  />
                </div>
                <div className="list-1">
                  <h3> Personal Care </h3>
                  <ul>
                    <il>
                      <CheckOutlined style={{ color: "#2a511f" }} />
                      Cillum dolore eu fugiat nulla.
                    </il>
                    <il>
                      <CheckOutlined style={{ color: "#2a511f" }} />
                      Lorem ipsum dolor sit amet.
                    </il>
                    <il>
                      <CheckOutlined style={{ color: "#2a511f" }} />
                      Consectetur adipisicing eilt,
                    </il>
                    <il>
                      <CheckOutlined style={{ color: "#2a511f" }} />
                      Sed do eiusmod tempor inci.
                    </il>
                  </ul>
                </div>
              </div>
              <div className="doctor_details_feature-2 col">
                <div className="icon-2">
                  <img
                    src="https://medi-dove.netlify.app/img/services/ser-fea-icon-2.png"
                    alt=""
                  />
                </div>
                <div className="list-2">
                  <h3> Lifestyle support </h3>
                  <ul>
                    <il>
                      <CheckOutlined style={{ color: "#2a511f" }} />
                      Cillum dolore eu fugiat nulla.
                    </il>
                    <il>
                      <CheckOutlined style={{ color: "#2a511f" }} />
                      Lorem ipsum dolor sit amet.
                    </il>
                    <il>
                      <CheckOutlined style={{ color: "#2a511f" }} />
                      Consectetur adipisicing eilt,
                    </il>
                    <il>
                      <CheckOutlined style={{ color: "#2a511f" }} />
                      Sed do eiusmod tempor inci.
                    </il>
                  </ul>
                </div>
              </div>
            </div>
            <div className="doctor_details_tittle">
              <div className="section_text">
                <h1> Care Coverage </h1>
              </div>
              <div className="section_line">
                <img
                  src="https://medi-dove.netlify.app/img/shape/section-title-line.png"
                  alt=""
                />
              </div>
            </div>
            <div className="doctor_details_text-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
            <div className="server-map" id="contact-map">
              <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58403.623581008454!2d90.32726121307132!3d23.81054442359749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c1c61277db%3A0xc7d18838730e2e59!2z4Kau4Ka_4Kaw4Kaq4KeB4KawLCDgpqLgpr7gppXgpr4!5e0!3m2!1sbn!2sbd!4v1643621605621!5m2!1sbn!2sbd" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-5 col-lg-4">
          <div className="card_widger">
            <div className="card_widger-wrap box-1 box-2">
              <div className="card-thumb">
                <img
                  src="https://medi-dove.netlify.app/img/team/member-big.jpg"
                  alt=""
                />
              </div>
              <div className="card-infor">
                <h3>
                  <a> Halim D. Keliano </a>
                </h3>
                <h6> Dentist & Neurologist </h6>
              </div>
              <div className="card-social">
                <ul>
                  <li>
                    <FacebookOutlined />
                  </li>
                  <li>
                    <TwitterOutlined />
                  </li>
                  <li>
                    <BehanceOutlined />
                  </li>
                  <li>
                    <LinkedinOutlined />
                  </li>
                  <li>
                    <YoutubeOutlined />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card_widger">
            <div className="widget-title">
              <h3> Qualifications </h3>
            </div>
            <div className="widget-list">
              <ul>
                <li>
                  <a href="/DoctorDetails">
                    <div className="widget-icon">
                      <img
                        src="https://medi-dove.netlify.app/img/services/more-ser-1.png"
                        alt=""
                      />
                    </div>
                    <div className="widget-infor">
                      Master of Science
                      <span>Oxford Univercity (2011 - 2014)</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/DoctorDetails">
                    <div className="widget-icon">
                      <img
                        src="https://medi-dove.netlify.app/img/services/more-ser-5.png"
                        alt=""
                      />
                    </div>
                    <div className="widget-infor">
                      Neurology Test
                      <span>Stanford Versity (2015 - 2021)</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card_widger">
            <div className="widget-title">
              <h3> Qualifications </h3>
            </div>
            <form className="form-input">
              <div class="row">
                <div class="col-xl-12">
                  <div class="input-contact">
                    <input type="text" placeholder="Enter your name" />
                  </div>
                </div>
                <div class="col-xl-12">
                  <div class="input-contact">
                    <input type="text" placeholder="Enter your email" />
                  </div>
                </div>
                <div class="col-xl-12">
                  <div class="input-contact">
                    <select>
                      <option>Select type of care</option>
                      <option>Select type of care</option>
                      <option>Select type of care</option>
                      <option>Select type of care</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
            <div className="send-button">
              <a href="#" className="primary_btn btn-icon ml-0" tabIndex="0">
                <span>+</span>
                Request for call
              </a>
            </div>
          </div>
          <div className="card_widger">
            <div className="widget-title">
              <h3> Languages </h3>
            </div>
          <div className="language-details">
            <ul>
              <li>
                <a href="#"> en </a>
              </li>
              <li>
                <a href="#"> es </a>
              </li>
              <li>
                <a href="#"> bd </a>
              </li>
              <li>
                <a href="#"> la </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
