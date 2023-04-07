import React from 'react'
import './HomeNewsRightSide.scss'

function HomeNewsRightSide() {
  return (
    <div className="col-xl-4 col-lg-6 col-md-6">
      <div className="rightside__box">
        <div className="rightside__box__thumb mb-35">
          <img src={'https://medi-dove.netlify.app/img/blog/blog-thumb-2.jpg'} alt="" />
        </div>
        <div className="rightside__box__content">
          <div className="rightside__box__meta">
            <span><a to="" className="rightside__box--tag">Medical,</a></span>
            <span><a to="" className="rightside__box--tag">Medicine</a></span>
          </div>
          <h3><a to="">Lorem ipsum dolor sit amet, cons ectetur adidis dicolo wiran.</a></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna
            aliqua. Ut enim ad minim veniam.</p>
        </div>
      </div>
    </div>
  )
}

export default HomeNewsRightSide