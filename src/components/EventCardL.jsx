import React from "react";
import { NavLink } from "react-router-dom";
import whitedottri from "../images/eventcards/whitedottri.svg";
import whitetri from "../images/eventcards/whitetri.svg";
import pinktri from "../images/eventcards/pinktri.svg";
import pinkdottri from "../images/eventcards/pinkdottri.svg";
import yellowtri from "../images/eventcards/yellowtri.svg";
import yellowdottri from "../images/eventcards/yellowdottri.svg";
import yellowsmalltri from "../images/eventcards/yellowsmalltri.svg";
import whitesmalltri from "../images/eventcards/whitesmalltri.svg";
import "./EventCardL.css";
const EventCardL = ({ name, image, link }) => {
  return (
    <div className="EventCardL">
      <div className="EventCardL_yellow"></div>
      <div className="EventCardL_blue"></div>
      <h2>{name}</h2>
      <h4>{name}</h4>
      <img src={image} alt="hawkrace" />
      <img src={whitetri} alt="whitetri" />
      <img src={whitedottri} alt="whitedottri" />
      <img src={yellowtri} alt="yellowtri" />
      <img src={yellowdottri} alt="yellowdottri" />
      <img src={pinktri} alt="pinktri" />
      <img src={pinkdottri} alt="pinkdottri" />
      <img src={yellowsmalltri} alt="yellowsmalltri" />
      <img src={whitesmalltri} alt="whitesmalltri" />

      <NavLink to={link}>
        <div className="btn"></div>
        <div className="Registor">Register Now</div>

        <div className="btn-slide1"></div>
        <div className="btn-slide2"></div>
        <div className="btn-slide3"></div>
      </NavLink>
    </div>
  );
};

export default EventCardL;
