import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Counter.scss";
const HomeSingleTeam = () => {
  return (
    <>
      <div>
        <Container style={{ zIndex: 3 }}>
          <Row xs={1} sm={1} md={2} lg={3} xl={3}>
            <Col>
              <div className="single-couter counter-box counter-box-white text-center mb-30">
                <img
                  src="https://medi-dove.netlify.app/img/counter/counter-icon-1.png"
                  alt=""
                />
                <h1>
                  <span className="theme-color counter">
                    <CountUp end={358} duration={8} />+
                  </span>
                </h1>
                <h6 className="green-color pb-20">Worldwide Branches</h6>
                <div className="counter-text mt-10">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisi cing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              {" "}
              <div className="single-couter counter-box counter-box-white text-center mb-30">
                <img
                  src="	https://medi-dove.netlify.app/img/counter/counter-icon-2.png"
                  alt=""
                />
                <h1>
                  <span className="theme-color counter">
                    <CountUp end={358} duration={8} />+
                  </span>
                </h1>
                <h6 className="green-color pb-20">Hospital Formed</h6>
                <div className="counter-text mt-10">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisi cing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              {" "}
              <div className="single-couter counter-box counter-box-white text-center mb-30">
                <img
                  src="	https://medi-dove.netlify.app/img/counter/counter-icon-3.png"
                  alt=""
                />
                <h1>
                  <span className="theme-color counter">
                    <CountUp end={283} duration={8} />+
                  </span>
                </h1>
                <h6 className="green-color pb-20">Local Partners</h6>
                <div className="counter-text mt-10">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisi cing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomeSingleTeam;
