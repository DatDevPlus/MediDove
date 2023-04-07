import React, { Fragment } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import HCFacility from "../../components/HCFacility/HCFacility";
import ServiceContact from "../../components/ServiceContact/ServiceContact";
import ForEmployers from "../../components/ForEmployers/ForEmployers";
import RemainingFooter from "../../components/RemainingFooter/RemainingFooter";
import Navbar from "../../components/Navbar/Navbar";

const Service = () => {
  const pageName = "Services";
  const bigTitle = "Our Services";

  return (
    <Fragment>
      <Navbar />
      <Breadcrumb pageName={pageName} bigTitle={bigTitle} />
      <HCFacility />
      <ServiceContact />
      <ForEmployers />
      <RemainingFooter />
    </Fragment>
  );
};

export default Service;
