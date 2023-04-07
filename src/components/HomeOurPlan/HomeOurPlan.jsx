import React, { useState } from 'react'
import './HomeOurPlan.scss'
import HomeSingleTab from '../HomeSingleTab/HomeSingleTab'
import Tab1 from '../Tab/Tab1';
import Tab2 from '../Tab/Tab2';



function HomeOurPlan() {
    const [active, setActive] = useState('tab1');
    const handleTab1 = () => {
        setActive("tab1");
    };
    const handleTab2 = () => {
        setActive("tab2");
    };
    return (
        <section className="ourPlan gray-bg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-12">
                        <div className="ourPlan__title">
                            <div className="ourPlan__icon">
                                <img className="ourPlan__icon--user" src="https://medi-dove.netlify.app/img/section/section-back-icon.png"
                                    alt="" />
                            </div>
                            <div className="ourPlan__text">
                                <h5 className='ourPlan_text--black'>Our Plans</h5>
                                <h1 className='ourPlan_text--grey'>Pricing &amp; Plans</h1>
                            </div>
                            <div className="ourPlan__line pos-rel">
                                <img src="https://medi-dove.netlify.app/img/shape/section-title-line.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-12">
                        <div className="ourPlan__menu">
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <button className={active === "tab1" ? "active" : ""} onClick={handleTab1}>monthly</button>
                                </li>
                                <li className="nav-item">
                                    <button className={active === "tab2" ? "active" : ""} onClick={handleTab2}>yearly</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <div className="tab-content">
                            <div className='ourPlan_tab'>
                                {active === "tab1" ? <Tab1 /> : <Tab2 />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default HomeOurPlan