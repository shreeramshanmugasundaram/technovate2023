import React from "react";
import "./Hero.css";
import hero from "../images/hero1.png";
// import arrow from "../images/arrow.svg";
// import video from "../images/bg.webm";
const Hero = ({ reference, scrollToSection, next }) => {
  return (
    <div className="Hero" ref={reference}>
      {/* <div className="video_bg">
        <video src={video} autoPlay={true} loop muted></video>
      </div> */}
      <img src={hero} alt="Intro_logo" />
    </div>
  );
};

export default Hero;
