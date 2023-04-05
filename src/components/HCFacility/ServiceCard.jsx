import React from 'react'
import './ServiceCard.scss';

const ServiceCard = (props) => {

  const { image, name, desc } = props;

  return (
    <div className="col-xl-4 col-lg-6 col-md-6 service__card">
      <div className="service__box">
        <img className="service__image" src={image} alt="service_img" />
        <div className="service__content">
          <p className='service__name'><a href="/">{name}</a></p>
          <p className="service__desc">{desc}</p>
          <a href="/" className="service__link">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard