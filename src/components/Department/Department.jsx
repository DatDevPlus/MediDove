import React, { useEffect, useState } from "react";
import "./Department.scss";
import ServiceCard from "../HCFacility/ServiceCard";
import axios from "axios";
import end_point_url from "../../API";

const Department = () => {
  const [serviceCards, setServiceCards] = useState([]);

  useEffect(() => {
    axios
      .get(end_point_url)
      .then((res) => setServiceCards(res.data[0].departments));
  }, []);

  return (
    <section className="department__area">
      <div className="container department__container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
            <div className="department__title">
              <div class="department__icon">
                <img
                  class="back-icon"
                  src="https://medi-dove.netlify.app/img/section/section-back-icon.png"
                  alt=""
                />
              </div>
              <div class="title__wrapper">
                <h5>Departments</h5>
                <h1>Managed Your Heathcare Services</h1>
              </div>
              <div class="section-line">
                <img src="https://medi-dove.netlify.app/img/shape/section-title-line.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {serviceCards &&
            serviceCards.map((item, index) => (
              <ServiceCard
                key={index}
                image={item.img}
                name={item.title}
                desc={item.des}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Department;
