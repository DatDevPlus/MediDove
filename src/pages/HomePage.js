import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import HomeFooter from "../components/HomeFooter/HomeFooter.jsx";
import OurTeam from "../components/OurTeam/OurTeam";
import AboutUs from "../components/AboutUs/AboutUs";
import Department from "../components/Department/Department";
import HomeAvail from '../components/HomeAvail/HomeAvail';
import HomeSecondAvail from '../components/HomeSecondAvail/HomeSecondAvail';
import HomeOurPlan from '../components/HomeOurPlan/HomeOurPlan';
import News from '../components/News/News';

const HomePage = () => {
  const [display, setDisplay] = useState(false);
  const displayVideo = () => {
    setDisplay(!display);
  };
  const hideVideo = () => {
    setDisplay(!display);
  };
  return (
    <>
      {display &&
        <VideoPopup hideVideo={hideVideo} display={display} />
      }
      <Navbar />
      <AboutUs />
      <Department />
      <OurTeam />
      <HomeAvail />
      <HomeOurPlan />
      <HomeSecondAvail />
      <News />
      <HomeFooter />

    </>
  );
};

export default HomePage;
