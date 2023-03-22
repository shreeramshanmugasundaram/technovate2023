import React from "react";

import sponsoer from "../images/sponser.svg";
import "./Sponser.css";
const Sponsers = ({ reference }) => {
  return (
    <div className="Sponsors" ref={reference}>
      <div className="heading">
        <img src={sponsoer} alt="" />
      </div>
      <div></div>
    </div>
  );
};

export default Sponsers;
