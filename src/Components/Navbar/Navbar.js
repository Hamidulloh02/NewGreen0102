import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsChevronDown } from "react-icons/bs";
import "./navbar.css";
import { Link } from "react-router-dom";
import AOS from "aos";
function CollapsibleExample() {
  const [toggle, settoggle] = useState("none");
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div>
      <div className="mainnavbar bg-light" data-aos="fade-down">
        <div className="container w-100 h-100 bg-light">
          <div className="top_contact">
            <div className="numbers">
              <div className="nav-div_flex">
                <div className="">
                  <img
                    className="top-nav-icon"
                    src="./images/Navbar-imgs/top-navbar/Calling.png"
                    alt="call"
                  />{" "}
                  +998(90) 444 14 88
                </div>
                <div className="mobile_none">
                  <img
                    className="top-nav-icon "
                    src="./images/Navbar-imgs/top-navbar/Message.png"
                    alt="call"
                  />{" "}
                  info@green-box.com
                </div>
                <div className="mobile_none">
                  <img
                    className="top-nav-icon "
                    src="./images/Navbar-imgs/top-navbar/Location.png"
                    alt="call"
                  />{" "}
                  Green Box, Japan, 〒039-2501 Aomori
                </div>
              </div>
            </div>
            <div className="lang">
              <select>
                <option>
                  <img
                    src="./images/Navbar-imgs/top-navbar/Location.png"
                    alt="uzb-flag"
                  />{" "}
                  Uz
                </option>
                <option>Ja</option>
                <option>Eng</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <Navbar
        data-aos="fade-down"
        expand="lg"
        bg="light"
        variant="dark"
        className="mt-5 nav-item"
      >
        <Container>
          <Navbar.Brand className="text-dark ">
            <Link to="/">
              <img
                className="main-logo"
                src="./images/Navbar-imgs/greenbox_logo.png"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="bg-success"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="minnavbar">
              <Nav.Link className="text-dark menunav">
                About Company <BsChevronDown className="dropicon " />
                <div className="drop3">
                  <Link to="/history" className="text-dark nav_navbar nav_link">
                    History
                  </Link>
                  <Link to="/contact" className="text-dark nav_navbar nav_link">
                    Contact
                  </Link>
                  <Link
                    to="/certificate"
                    className="text-dark nav_navbar nav_link"
                  >
                    Certificate
                  </Link>
                  <Link
                    to="/mission_vision"
                    className="text-dark nav_navbar nav_link"
                  >
                    Mission & Vision
                  </Link>
                </div>
              </Nav.Link>

              <Nav.Link className="text-dark  menunav ">
                Work <BsChevronDown className="dropicon" />
                <div className="drop3">
                  <Link
                    to="/work_visa"
                    className="text-dark nav_navbar nav_link"
                  >
                    Work Visa
                  </Link>
                  <Link
                    to="/intern_visa"
                    className="text-dark nav_navbar nav_link"
                  >
                    Intern Visa
                  </Link>
                  <Link to="/jobs" className="text-dark nav_navbar nav_link">
                    Jobs
                  </Link>
                  <Link
                    to="/register"
                    className="text-dark nav_navbar nav_link"
                  >
                    Register
                  </Link>
                </div>
              </Nav.Link>

              <Nav.Link className="text-dark menunav">
              <Link
                    to="/study"
                    className="text-dark nav_navbar nav_link"
                  >
                 Study 
                  </Link>
              <BsChevronDown className="dropicon" />
                <div className="drop3">
                  <Link
                    to="/lang-school"
                    className="text-dark nav_navbar nav_link"
                  >
                    Lang school
                  </Link>
                  <Link to="/senmon" className="text-dark nav_navbar nav_link">
                    Senmon
                  </Link>
                  <Link
                    to="/university"
                    className="text-dark nav_navbar nav_link"
                  >
                    University
                  </Link>
                </div>
              </Nav.Link>

              <Nav.Link className="text-dark menunav">
                Services <BsChevronDown className="dropicon" />
                <div className="drop3">
                  <Link
                    to="/legal_advices"
                    className="text-dark nav_navbar nav_link"
                  >
                    Legal advices
                  </Link>
                  <Link to="/visa" className="text-dark nav_navbar nav_link">
                    Visa
                  </Link>
                  <Link
                    to="/business_consalting"
                    className="text-dark nav_navbar nav_link"
                  >
                    Starting Business
                  </Link>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CollapsibleExample;
