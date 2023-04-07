import React, { Fragment } from 'react'
import './HomeAvail.scss'
import { UserOutlined, LikeOutlined } from '@ant-design/icons';
import SliceButton from './../SliceButton/SliceButton';

function HomeAvail() {
    return (
        <Fragment>
            <section className='avail'>
                <div className="avail-image"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-10">
                        <div className="avail__title">
                            <div className="avail_text">
                                <h5 className='avail__title--grey'>We are available 24/7</h5>
                                <h1 className='avail__title--white'>We Always Ready For A Challenge.</h1>
                            </div>
                        </div>
                        <SliceButton content="make appointment" color="pink"/>
                    </div>
                    <div className="col-lg-6 col-lg-6 col-md-8">
                        <div className="avail__desc">
                            <div className="avail_detail">
                                <h1 className='avail_detail--green'>1M+</h1>
                                <h5 className='avail_detail--white'><i><UserOutlined /></i> Satisfied Patients</h5>
                                <p className='avail_detail--grey'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua.</p>
                            </div>
                            <div className="avail_detail">
                                <h1 className='avail_detail--green'>100+</h1>
                                <h5 className='avail_detail--white'><i><LikeOutlined /></i>World Awards</h5>
                                <p className='avail_detail--grey'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Fragment>
    )
}

export default HomeAvail