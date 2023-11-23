import React, { useState } from "react";
import "./Nav.css";
import { FaBars } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";

const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const invertMobileNavState = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header className="nav">
      <div className="navbar">
        <h1 className="nav-logo">Splash.</h1>
        <div className="nav-items">
          <span className="nav-item">Services</span>
          <span className="nav-item">Work</span>
          <span className="nav-item">Contact</span>
        </div>
        <a className="hamburger" onClick={invertMobileNavState}>
          {mobileNav ? <RiCloseFill /> : <FaBars />}
        </a>
      </div>
      <div className={`mobile-nav ${mobileNav && "mobile-nav-visible"}`}>
        <span>Services</span>
        <span>Work</span>
        <span>Contact</span>
      </div>
    </header>
  );
};

export default Nav;
