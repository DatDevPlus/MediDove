import React from "react";
import "./ForEmployers.scss";
import SliceButton from "../SliceButton/SliceButton";

const ForEmployers = () => {
  const left_image = "https://medi-dove.netlify.app/img/hire/hire1.jpg";
  const right_image = "https://medi-dove.netlify.app/img/hire/hire2.jpg";
  const content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore 
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  return (
    <section className="hiring__section">
      <div className="hiring__container container">
        <div className="row hiring__row section--top">
          <div className="col-xl-6 col-lg-6 no-padding">
            <img src={left_image} alt="left_hiring_image" />
          </div>
          <div className="col-xl-6 col-lg-6 no-padding">
            <div className="text__wrapper">
              <h1 className="title--big">For Employers</h1>
              <p className="desc--small">{content}</p>
              <SliceButton content="Contact us" color="green" />
            </div>
          </div>
        </div>
        <div className="row hiring__row section--bottom">
          <div className="col-xl-6 col-lg-6 no-padding">
            <div className="text__wrapper">
              <h1 className="title--big">For Employers</h1>
              <p className="desc--small">{content}</p>
              <SliceButton content="Apply today" color="pink" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 no-padding">
            <img src={right_image} alt="left_hiring_image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForEmployers;
