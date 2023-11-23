import React from "react";
import "./Nav.css";
import { FaBars } from "react-icons/fa6";

const Nav = () => {
  return (
    <header className="nav">
      <div className="navbar">
        <h1 className="nav-logo">Splash.</h1>
        <div className="nav-items">
          <span className="nav-item">Services</span>
          <span className="nav-item">Work</span>
          <span className="nav-item">Contact</span>
        </div>
        <div className="hamburger">
          <FaBars />
        </div>
      </div>
    </header>
  );
};

export default Nav;
