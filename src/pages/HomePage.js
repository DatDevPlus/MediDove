import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import RemainingFooter from "../components/RemainingFooter/RemainingFooter";
import HomeFooter from "../components/HomeFooter/HomeFooter.jsx";
import OurTeam from "../components/OurTeam/OurTeam";
import AboutUs from "../components/AboutUs/AboutUs";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <OurTeam />
      <AboutUs />
      <HomeFooter />
      <RemainingFooter />
    </>
  );
};

export default HomePage;
