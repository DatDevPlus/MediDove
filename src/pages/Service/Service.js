import React, { Fragment } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import HCFacility from "../../components/HCFacility/HCFacility";

const Service = () => {
  const pageName = "Services";
  return (
    <Fragment>
      <Breadcrumb pageName={pageName} />
      <HCFacility />
    </Fragment>
  );
};

export default Service;
