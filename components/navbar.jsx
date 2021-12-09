import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { Dropdown } from "react-bootstrap";
import { useTranslation, Trans } from "react-i18next";

export default ({
  show,
  handleClose,
  handleShow,
  changeLanguage,
  language,
  isAbout,
}) => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="#home">
        <Link
          activeclass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={250}
        >
          <img src="img/logom1.png" className="mr19 logo-nav" alt="" />
          <img src="img/font1.png" className=" logo-nav1" alt="" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className="flex-between w-100">
          {isAbout ? (
            <>
              {" "}
              <div className="flex-between nav-inner">
                <a href="/" activeclass="active" className="fs18 lh21 ffr clw ">
                  Home
                </a>
                <a href="/" activeclass="active" className="fs18 lh21 ffr clw ">
                  Features
                </a>
                <a  href="/" activeclass="active" className="fs18 lh21 ffr clw ">
                  How it Works
                </a>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="flex-between nav-inner">
                <Link
                  activeclass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={250}
                  className="fs18 lh21 ffr clw "
                >
                  Home
                </Link>
                <Link
                  activeclass="active"
                  to="features"
                  spy={true}
                  smooth={true}
                  duration={750}
                  className="fs18 lh21 ffr clw "
                >
                  Features
                </Link>
                <Link
                  activeclass="active"
                  to="howitwork"
                  spy={true}
                  smooth={true}
                  duration={750}
                  className="fs18 lh21 ffr clw "
                >
                  How it Works
                </Link>
              </div>
            </>
          )}

          <div className="d-flex align-items-center">
            <button
              onClick={handleShow}
              className="btn btn-sign-up fw500 fs18 lh27"
            >
              Create Account
            </button>
            <Dropdown className="ml-3">
              <Dropdown.Toggle variant="info" id="dropdown-basic">
                {language == 0 ? "EN" : "DE"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeLanguage("en")}>
                  English
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage("de")}>
                  Germany
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};
