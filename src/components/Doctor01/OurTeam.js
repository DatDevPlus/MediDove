import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./OurTeam.scss";
import { Row, Col } from "antd";
const AboutMember = () => {
  const [dataTeam, setDataTeam] = useState();
  useEffect(() => {
    axios
      .get("https://642cd6d566a20ec9ce8f59f7.mockapi.io/api/home")
      .then((res) => {
        const data = res.data;
        setDataTeam({ data });
      });
  }, []);
  return (
    <div className="team-area container">
      <Row justify={"center"}>
        <Col span={24} lg={12} className="text-container">
          <div className="container-title">
            <div className="icon-img">
              <img src="https://medi-dove.netlify.app/img/section/section-back-icon.png" />
            </div>
            <div className="text-title">
              <h5>Our Team</h5>
              <h1>A Professional & Care Provider</h1>
            </div>
            <div className="text-line">
              <img src="http://medi-dove.netlify.app/img/shape/section-title-line.png" />
            </div>
          </div>
        </Col>
        <Col span={10} lg={12} className="button-text">
          <div className="button-icon">
            <div className="button-primary">
              <span>+</span>
              <a>Make Appointment</a>
            </div>
          </div>
        </Col>
      </Row>

      <Row justify="center" gutter={24}>
        {dataTeam?.data[0]["our-team"].map((item, index) => (
          <Col
            key={index}
            span={24}
            md={12}
            lg={8}
            className="button-container"
          >
            <div className="themb-img">
              <img src={item.img} />
              <a className="themb-link">+</a>
            </div>
            <div className="text-content">
              <h3>{item.name}</h3>
              <h6>FOUDER</h6>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default AboutMember;
