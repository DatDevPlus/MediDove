import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx'
import Footer from '../components/Footer/Footer.jsx'

import HomeFooter from '../components/HomeFooter/HomeFooter.jsx'
import RemainingFooter from '../components/RemainingFooter/RemainingFooter'
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Footer />
      <HomeFooter />
      <RemainingFooter/>
    </>
  )
}

export default HomePage