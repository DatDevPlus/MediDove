import React from 'react'
import './HomeSecondAvail.scss'
import SliceButton from '../SliceButton/SliceButton'

function HomeSecondAvail() {
    return (
        <section className='availSecond'>
            <div className="container">
                <div className='row'>
                    <div className="col-xl-10 offset-xl-1 col-md-12">
                        <div className="availSecond__title">
                            <div className="availSecond_text">
                                <h5 className='availSecond__title--grey'>Stay healthy & strong to enjoy life</h5>
                                <h1 className='availSecond__title--white'>Trust Us To Be There To Help All & Make Things Well Again.</h1>
                            </div>
                            <div className='availSecond_btn'>
                                <SliceButton content="get a consultant" color="green" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default HomeSecondAvail