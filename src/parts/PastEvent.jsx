import React from "react";

import pastevent from "../images/pastEvents.svg";
import "./Sponser.css";
const PastEvent = ({ reference }) => {
  return (
    <div className="Sponsors" ref={reference}>
      <div className="heading">
        <img src={pastevent} alt="" />
      </div>
      <div></div>
    </div>
  );
};

export default PastEvent;
