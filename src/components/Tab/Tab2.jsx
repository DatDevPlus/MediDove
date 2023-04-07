import React from 'react'
import HomeSingleTab from '../HomeSingleTab/HomeSingleTab'

function Tab2() {
    return (
        <>
            <div className="row">
                <HomeSingleTab desc="Ut enim ad minim veniam, quis istomw nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo." title="Professional" price="425.00"
                    img='https://medi-dove.netlify.app/img/pricing/pricing-thumb-2.png' />
                <HomeSingleTab desc="Ut enim ad minim veniam, quis istomw nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo." title="Advanced" price="455.00"
                    img='https://medi-dove.netlify.app/img/pricing/pricing-thumb-1.png ' />
                <HomeSingleTab desc="Ut enim ad minim veniam, quis istomw nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo." title="Advantage" price="489.00"
                    img='https://medi-dove.netlify.app/img/pricing/pricing-thumb-3.png' />
            </div>
        </>
    )
}

export default Tab2