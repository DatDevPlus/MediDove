/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Row, Col, Typography } from "antd";
import {
  PhoneFilled,
  MailFilled,
  FacebookOutlined,
  BehanceOutlined,
  YoutubeFilled,
  LinkedinFilled,
  SlackOutlined,
  DownOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import Sidebar from "../SideBar/SideBar";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // sticky
  useEffect(() => {
    const stickyMenuBar = () => {
      if (window.scrollY > 80) {
        setStickyMenu(true);
      } else {
        setStickyMenu(false);
      }
    };
    window.addEventListener("scroll", stickyMenuBar);
  }, []);
  return (
    <>
      <header className="header">
        <Row className="top__bar">
          <Row className="top__bar-container">
            <Row className="top__bar-area">
              <Col xl={12} lg={12} md={14} offset={2} className="top__bar-left">
                <Row className="header__info">
                  <Typography.Text className="header__info-element">
                    <PhoneFilled className="header__info-phone" />
                    +1 800 833 9780
                  </Typography.Text>
                  <Typography.Text className="header__info-element">
                    <MailFilled className="header__info-phone" />
                    info@example.com
                  </Typography.Text>
                </Row>
              </Col>
              <Col xl={10} lg={10} md={8} className="top__bar-right">
                <Row className="right__button">
                  <a className="primary__button" href="#">
                    Make Appointment
                  </a>
                </Row>
              </Col>
            </Row>
          </Row>
        </Row>
        <Row className={stickyMenu ? "menu__area sticky_menu" : "menu__area"}>
          <Col className="menu__area-container menu__wrapper">
            <Row className="menu__row">
              <Col xl={6} lg={6} md={12} span={12} className="menu__logo-wrap">
                <Row className="logo logo__circle">
                  <a href="/">
                    <img src="https://medi-dove.netlify.app/img/logo/logo.png" alt="" />
                  </a>
                </Row>
              </Col>
              <Col
                xl={18}
                lg={18}
                md={12}
                span={12}
                className="menu__right"
                style={{ maxHeight: "117px" }}
              >
                <Col className="menu__social">
                  <Row className="menu__lang">
                    <Col className="lang__icon">
                      <img
                        src="https://medi-dove.netlify.app/img/icon/lang.png"
                        alt=""
                      />
                      <span>
                        EN
                        <DownOutlined />
                      </span>
                    </Col>
                    <ul className="header__lang-list">
                      <li>
                        <a href="#">USA</a>
                      </li>
                      <li>
                        <a href="#">UK</a>
                      </li>
                      <li>
                        <a href="#">CA</a>
                      </li>
                      <li>
                        <a href="#">AU</a>
                      </li>
                    </ul>
                  </Row>
                  <Row className="menu__social-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <FacebookOutlined />
                        </a>
                      </li>
                      <li className="behance">
                        <a href="#">
                          <BehanceOutlined />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <YoutubeFilled />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <LinkedinFilled />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <SlackOutlined />
                        </a>
                      </li>
                    </ul>
                  </Row>
                </Col>
                <Col className="menu__link">
                  <nav id="main__menu">
                    <ul>
                      <li>
                        <a href="/">Home +</a>
                        <ul className="submenu">
                          <li>
                            <a href="/">Home style 1</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/services">Department +</a>
                        <ul className="submenu">
                          <li>
                            <a href="/services">Services 01</a>
                          </li>
                          <li>
                            <a href="/servicesDetails">Services Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/doctors">Doctors +</a>
                        <ul className="submenu">
                          <li>
                            <a href="/doctors">Doctors 01</a>
                          </li>
                          <li>
                            <a href="/doctorDetails">Doctors Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/shop">Shop</a>
                        <ul className="submenu">
                          <li>
                            <a href="/shop">Shop Page</a>
                          </li>
                          <li>
                            <a href="/shopDetails">Shop Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/blogs">News +</a>
                        <ul className="submenu">
                          <li>
                            <a href="/blogs">Blog Right Sidebar</a>
                          </li>
                          <li>
                            <a href="/blogLeftSideBar">Blog Left Sidebar</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Pages +</a>
                        <ul className="submenu">
                          <li>
                            <a href="/about">About</a>
                          </li>
                          <li>
                            <a href="/contact">Contact</a>
                          </li>
                          <li>
                            <a href="/notMatch">404 page</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </Col>
                <Col className="side__menu__icon">
                  <button className="side__toggle" onClick={handleShow}>
                    <BarsOutlined className="side__icon" />
                  </button>
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </header>
      <Sidebar show={show} handleClose={handleClose} />
    </>
  );
};

export default Navbar;
