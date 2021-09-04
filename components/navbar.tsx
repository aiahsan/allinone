import React from "react";
import { Navbar, Nav } from "react-bootstrap";
export default () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="#home">
        <img src="img/logo1.png" className="mr19" alt="" />
        <img src="img/logo2.png" alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className="flex-between w-100">
          <div className="flex-between nav-inner">
            <a className="fs18 lh21 ffr clw ">Home</a>
            <a className="fs18 lh21 ffr clw">Features</a>
            <a className="fs18 lh21 ffr clw">How it Works</a>
          </div>
          <div>
            <button className="btn btn-sign-up fw500 fs18 lh27">Create Account</button>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};
