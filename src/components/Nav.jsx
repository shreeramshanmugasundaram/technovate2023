import React from "react";
import { useState } from "react";
import "./Nav.css";
import logo from "../images/hero1.png";
import hamburger from "../images/hamburger.svg";
const Nav = ({ reference, scrollToSection }) => {
  const [nav, setNav] = useState(false);
  const handleMenu = () => {
    const hamburger = document.getElementById("NavId");
    if (window.innerWidth < 880) {
      if (!nav) {
        hamburger.style.transform = "translate(0, 0)";
        setNav(true);
      } else {
        hamburger.style.transform = "translate(-100%, 0)";
        setNav(false);
      }
    }
  };

  return (
    <div className="NavWrapper">
      <div>
        <div className="Nav">
          <div className="Navbg1"></div>
          <div className="Navbg2"></div>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="hamburger" onClick={handleMenu}>
            <img src={hamburger} alt="hamburger" />
          </div>
          <div className="Navbgsmall" id="NavId" onClick={handleMenu}>
            <div
              className="links link1"
              onClick={() => scrollToSection(reference.home)}
            >
              Home
            </div>
            <div
              className="links link2"
              onClick={() => scrollToSection(reference.events)}
            >
              Event
            </div>
            <div
              className="links link3"
              onClick={() => scrollToSection(reference.sponser)}
            >
              Sponsers
            </div>
            <div
              className="links link4"
              onClick={() => scrollToSection(reference.about)}
            >
              About Us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
