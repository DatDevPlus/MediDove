import React from 'react'
import './News.scss'
import HomeNewsLeftSide from '../HomeNewsLeftSide/HomeNewsLeftSide'
import HomeNewsRightSide from '../HomeNewsRightSide/HomeNewsRightSide'
import HomeNewsList from '../HomeNewsList/HomeNewsList'
import SliceButton from '../SliceButton/SliceButton'

function News() {
    return (
        <section className="news">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-7">
                        <div className="news__title">
                            <div className="news__icon">
                                <img className="news__icon--user" src="https://medi-dove.netlify.app/img/section/section-back-icon.png" alt="" />
                            </div>
                            <div className="news__text">
                                <h5 className='news__text--black'>News</h5>
                                <h1 className='news__text--grey'>Get Every Single Updates Here.</h1>
                            </div>
                            <div className="section-line pos-rel">
                                <img src="https://medi-dove.netlify.app/img/shape/section-title-line.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-5">
                        <div className='news__btn'>
                            <SliceButton content="our blog" color="pink" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <HomeNewsLeftSide />
                    <HomeNewsRightSide />
                    <div className="col-xl-4 col-lg-12 col-md-12">
                        <div className="news__list">
                            <HomeNewsList />
                        </div>
                        <div className="news__btn">
                            <SliceButton content="make call" color="green" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News