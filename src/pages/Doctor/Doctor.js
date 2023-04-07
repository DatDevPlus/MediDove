import React from "react";
import SingleCount from "../../components/Doctor01/SingleCount";
import OurTeam from "../../components/Doctor01/OurTeam.js";
import Available from "../../components/Doctor01/Available.js";
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.jsx'
import NavBar from '../../components/Navbar/Navbar.jsx'
import RemainingFooter from "../../components/RemainingFooter/RemainingFooter";
const CounterArea = () => {
  const pageName = "Doctor";
  const bigTitle = "Doctor 01";

  return (
    <>
    <NavBar/>
      <Breadcrumb pageName={pageName} bigTitle={bigTitle} />
      <OurTeam />
      <Available />
      <section className="about-area pt-120 pb-80">
        <div className="container" style={{ marginRight: "15.5%" }}>
          <div className="row">
            <SingleCount />
          </div>
        </div>
      </section>
      <RemainingFooter />
    </>
  );
};

export default CounterArea;
