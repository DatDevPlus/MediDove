import React, {useState} from 'react';
import Navbar from '../components/Navbar/Navbar.jsx'
import HomeFooter from '../components/HomeFooter/HomeFooter.jsx'
import Slider from '../components/Slider/Slider.jsx'
import VideoPopup from '../components/VideoPopup/VideoPopup.jsx';
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
      <Slider displayVideo={displayVideo} />
      <HomeFooter />
    </>
  );
};

export default HomePage;
