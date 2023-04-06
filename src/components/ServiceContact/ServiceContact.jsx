import React from "react";
import "./ServiceContact.scss";
import ContactForm from "./ContactForm";

const ServiceContact = () => {
  const background_image =
    "https://medi-dove.netlify.app/static/media/calculate-bg.ef8aed0096c22d49b5a5.png";

    const title_desc = 
    `If you require services on a public holiday, overnight services or live-in services, please call 
    (+00)888.666.88 so we can discuss prices with you.`;

  return (
    <section
      className="service-contact__area"
      style={{ background: `url(${background_image})` }}
    >
      <div className="contact__container container">
        <div className="row">
            <div className="col-xl-7 col-lg-6 col-md-10">
                <div className="title__area">
                    <div className="title__wrapper">
                        <h5 className="title--small">Make a call</h5>
                        <h1 className="title--big">Quote Calculator</h1>
                        <p className="desc--big">{title_desc}</p>
                    </div>
                </div>
                <div className="button__area">
                    //
                </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <ContactForm />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContact;
