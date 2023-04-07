import React, { Fragment } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import HCFacility from "../../components/HCFacility/HCFacility";
import ServiceContact from "../../components/ServiceContact/ServiceContact";
import Navbar from "../../components/Navbar/Navbar";
import ForEmployers from "../../components/ForEmployers/ForEmployers";

const Service = () => {

  const pageName = "Services";
  
  return (
    <Fragment>
      <Breadcrumb pageName={pageName} />
      <HCFacility />
      <ServiceContact />
      <ForEmployers />
    </Fragment>
  );
};

export default Service;
