import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Nav.css";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

const Nav = (props) => {
  const [mobileNav, setMobileNav] = useState(false);
  const invertMobileNavState = () => {
    setMobileNav(!mobileNav);
  };

  const navItemList = ["services", "work", "contact"];

  useEffect(() => {
    setMobileNav(false);
  }, [props.activeComponent]);

  return (
    <header className="nav">
      <div className="navbar">
        <Link
          className="nav-logo"
          to="home"
          activeClass="home"
          spy={true}
          smooth={true}
          offset={-72}
          duration={500}
          onClick={() => props.changeActiveComponent("home")}
        >
          Splash.
        </Link>
        <div className="nav-items">
          {navItemList.map((navItem, index) => (
            <Link
              key={index}
              to={navItem}
              activeClass={navItem}
              spy={true}
              smooth={true}
              offset={-72}
              duration={500}
              className={`nav-item ${
                props.activeComponent === navItem && "active"
              }`}
              onClick={() => props.changeActiveComponent(navItem)}
            >
              {navItem.toUpperCase()}
            </Link>
          ))}
        </div>
        <a className="hamburger" onClick={invertMobileNavState}>
          {mobileNav ? <AiOutlineClose /> : <FaBars />}
        </a>
      </div>
      <div className={`mobile-nav ${mobileNav && "mobile-nav-visible"}`}>
        {navItemList.map((navItem, index) => (
          <Link
            key={index}
            to={navItem}
            activeClass={navItem}
            spy={true}
            smooth={true}
            offset={-72}
            duration={500}
            onClick={() => props.changeActiveComponent(navItem)}
          >
            {navItem.toUpperCase()}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Nav;
