import React from "react";
import "./About.css";
import background from "../images/About.svg";
import arrow from "../images/arrow.svg";
const About = ({ reference, scrollToSection, next }) => {
  return (
    <div className="About" ref={reference}>
      <div>
        <img src={background} alt="" />
      </div>
    </div>
  );
};

export default About;
