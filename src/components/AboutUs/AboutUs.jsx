import React from 'react';
import './AboutUs.scss';

const AboutUs = () => {
    return (
        <div className='about__us'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-5 about__left">
                        <div className="icon__center">
                            <img src="https://medi-dove.netlify.app/img/about/medical-brand-icon-border.png" alt="" /></div>
                        <div className="about-left pos-rel mb-30">
                            <div className="about__img__left">
                                <img src="https://medi-dove.netlify.app/img/about/about-img.jpg" alt="" /></div>
                            <div className="about-shape">
                                <img src="https://medi-dove.netlify.app/img/about/about-shape.png" alt="" /></div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="about__right pt-55 mb-30">
                            <div className="about-title mb-20">
                                <h5>About Us</h5>
                                <h1>Short Story About MediDove Clinic.</h1>
                            </div>
                            <div className="about-text">
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <br />
                            </div>
                            <div className="about-author d-flex align-items-center">
                                <div className="author-ava">
                                    <img src="https://medi-dove.netlify.app/img/about/author-ava.png" alt="" /></div>
                                <div className="author-desination">
                                    <h4>Rosalina D. Williamson</h4>
                                    <h6>founder</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AboutUs