import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { UserOutlined, LikeOutlined } from "@ant-design/icons";
import "./Available.scss";
import { Row, Col } from "antd";
const Available = () => {
  return (
    <div className="campus-map">
      <Row>
        <Col span={24} md={20} lg={12} className="campus-content">
          <div className="tittle-Campus">
            <div className="campus-text">
              <h5>We are available 24/7</h5>
              <h1>We Always Ready For A Challenge.</h1>
            </div>
            <div className="button-campus">
              <div className="button-colum">
                <span>+</span>
                <a>Make Appointment</a>
              </div>
            </div>
          </div>
        </Col>

        <Col
          span={24}
          md={16}
          lg={12}
          xl={{ span: 10, offset: 2 }}
          className="primary-content"
        >
          <div className="text-satisfide">
            <div className="singel-satisfide">
              <h1>1M+</h1>
              <h5>
                <i className="satisfide-user">
                  <UserOutlined /> Satisfied Patients
                </i>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="text-satisfide">
            <div className="singel-satisfide">
              <h1>100+</h1>
              <h5>
                <i className="satisfide-user">
                  <LikeOutlined /> World Awards
                </i>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Available;
