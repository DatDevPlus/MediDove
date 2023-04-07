import React from 'react';
import MemberCard from './MemberCard';
import './OurTeam.scss';
import members_list from "./TeamMembersList";

const OurTeam = () => {
    return (
        <div className='our__team'>
            <div className="container team__container">
                <div className="row wrap__ourteam">
                    <div className="col-xl-6 col-lg-7 col-md-10">
                        <div className="section-title pos-rel mb-75">
                            <div className="section__icon">
                                <img className="section__back__icon back__icon__left" src="https://medi-dove.netlify.app/img/section/section-back-icon.png" alt="" />
                            </div>
                            <div className="big__text pos__rel">
                                <h5 className='text__1'>Our Team</h5>
                                <h1 className='text__2'>A Professional &amp; Care Provider</h1>
                            </div>
                            <div className="section-line pos-rel">
                                <img src="https://medi-dove.netlify.app/img/shape/section-title-line.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-5">
                        <div className="section__button text__end d__none d__lg__block pt__80 team__btn">
                            <a className="primary_btn btn-icon ml-0" href="/contact">
                                <span>+</span>Make Appointment</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        members_list.map((member, index) => (
                        <MemberCard key={index} name={member.name} image={member.image} position={member.position} />
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OurTeam