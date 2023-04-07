import React, { useEffect, useState } from 'react';
import "./HCFacility.scss";
import ServiceCard from './ServiceCard';
import axios from 'axios';
import end_point_url from '../../API';

const HCFacility = () => {

  const [serviceCards, setServiceCards] = useState([]);

  const title_image = "https://medi-dove.netlify.app/img/section/section-back-icon.png";
  const big_title = "Would you rather stay at home than go into a health care facility?";
  const facility_desc = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut aliquip ex 
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.`;

  useEffect(() => {
    axios.get(end_point_url)
    .then((res) => setServiceCards(res.data[0].departments));
  }, []);

  return (
    <section className="facility__area">
      <div className="facility__container container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-no-padding">
            <div className="section--left">
              <img className="title__image" src={title_image} alt="nurse_icon" />
              <div className="title__wrapper">
                <p className="title--small">Health care facility</p>
                <p className="title--big">{big_title}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-no-padding">
            <div className="section--right">
              <p className="facility__desc">{facility_desc}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {serviceCards && serviceCards.map((item, index) => 
          <ServiceCard key={index} image={item.img} name={item.title} desc={item.des} />
          )}
        </div>
      </div>
    </section>
  )
}

export default HCFacility