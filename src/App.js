/* eslint-disable */
import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Service from "./pages/Service/Service";
import ServiceDetails from "./pages/Service/ServiceDetails";
import Doctor from "./pages/Doctor/Doctor";
import DoctorDetails from "./pages/Doctor/DoctorDetails";
import {useEffect} from 'react'
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1100,
      delay: 400,
    })
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/services" element={<Service />} />
        <Route exact path="/servicesDetails" element={<ServiceDetails />} />
        <Route exact path="/doctors" element={<Doctor />} />
        <Route exact path="/doctorDetails" element={<DoctorDetails />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
