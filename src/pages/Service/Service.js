import React, { Fragment } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import HCFacility from "../../components/HCFacility/HCFacility";
import ServiceContact from "../../components/ServiceContact/ServiceContact";

const Service = () => {

  const pageName = "Services";
  
  return (
    <Fragment>
      <Breadcrumb pageName={pageName} />
      <HCFacility />
      <ServiceContact />
    </Fragment>
  );
};

export default Service;
