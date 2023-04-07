import React, { Fragment } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import HCFacility from "../../components/HCFacility/HCFacility";
import ServiceContact from "../../components/ServiceContact/ServiceContact";
import ForEmployers from "../../components/ForEmployers/ForEmployers";

const Service = () => {

  const pageName = "Services";
  const bigTitle = "Our Services";
  
  return (
    <Fragment>
      <Breadcrumb pageName={pageName} bigTitle={bigTitle} />
      <HCFacility />
      <ServiceContact />
      <ForEmployers />
    </Fragment>
  );
};

export default Service;
