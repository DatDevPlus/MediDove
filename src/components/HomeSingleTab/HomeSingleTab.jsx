import React from 'react'
import './HomeSingleTab.scss'
import SliceButton from '../SliceButton/SliceButton'
function HomeSingleTab({ title, desc, price, img }) {

    return (
        <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="price__box">
                <div className="price__thumb">
                    <img src={img} alt="" />
                </div>
                <div className="price__content">
                    <h1>{title}</h1>
                    <p>{desc}</p>
                    <SliceButton content="PRICE: $425.00" color="pink" />
                </div>
            </div>
        </div>
    )
}

export default HomeSingleTab