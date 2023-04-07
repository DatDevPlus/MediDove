import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import RemainingFooter from "../components/RemainingFooter/RemainingFooter";
import HomeFooter from "../components/HomeFooter/HomeFooter.jsx";
import OurTeam from "../components/OurTeam/OurTeam";
import AboutUs from "../components/AboutUs/AboutUs";
import Department from "../components/Department/Department";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <AboutUs />
      <Department />
      <OurTeam />
      <HomeFooter />
    </>
  );
};

export default HomePage;
