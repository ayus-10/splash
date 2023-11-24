import React, { useState } from "react";
import "./Nav.css";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

const Nav = (props) => {
  const [mobileNav, setMobileNav] = useState(false);
  const invertMobileNavState = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header className="nav">
      <div className="navbar">
        <h1 className="nav-logo" onClick={() => props.onButtonClick("home")}>
          Splash.
        </h1>
        <div className="nav-items">
          <span
            className="nav-item"
            onClick={() => props.onButtonClick("services")}
          >
            Services
          </span>
          <span
            className="nav-item"
            onClick={() => props.onButtonClick("work")}
          >
            Work
          </span>
          <span
            className="nav-item"
            onClick={() => props.onButtonClick("contact")}
          >
            Contact
          </span>
        </div>
        <a className="hamburger" onClick={invertMobileNavState}>
          {mobileNav ? <AiOutlineClose /> : <FaBars />}
        </a>
      </div>
      <div className={`mobile-nav ${mobileNav && "mobile-nav-visible"}`}>
        <span onClick={() => props.onButtonClick("services")}>Services</span>
        <span onClick={() => props.onButtonClick("work")}>Work</span>
        <span onClick={() => props.onButtonClick("contact")}>Contact</span>
      </div>
    </header>
  );
};

export default Nav;
