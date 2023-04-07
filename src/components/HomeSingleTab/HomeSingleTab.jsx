import React from 'react'
import './HomeSingleTab.scss'

function HomeSingleTab({title, desc, price, img}) {
    return (
        <div className="col-xl-4 col-lg-4 col-md-6">
            <div className='price'>
                <div className="price__box">
                    <div className="price__thumb">
                        <img src={img} alt="" />
                    </div>
                    <div className="price__content">
                        <h1>{title}</h1>
                        <p>{desc}</p>
                        <a to="/contact" className="primary_btn btn-icon ml-0">
                            <span>+</span>{price}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSingleTab