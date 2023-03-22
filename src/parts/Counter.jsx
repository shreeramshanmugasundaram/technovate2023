import React, { useState, useEffect } from "react";
import "./Counter.css";
import main from "../images/main.svg";
import arrow from "../images/arrow.svg";

const Counter = ({ reference, scrollToSection, next }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "March, 28, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="Counter" ref={reference}>
      <div className="img">
        <img src={main} alt="" />
      </div>
      <div className="counterbg">
        <div className="counterbgblue"></div>
        <div className="countercontent">
          <h1>Welcome to our Realm In </h1>
          <div className="counterccount">
            <div>
              <span>{days}</span> <p>Days</p>
            </div>
            <div>
              <span>
                {hours.toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
              </span>
              <p>Hours</p>
            </div>
            <div>
              <span>
                {minutes.toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
              </span>
              <p>Minutes</p>
            </div>
            <div>
              <span>
                {seconds.toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
              </span>{" "}
              <p>Seconds</p>
            </div>
          </div>
          <span>......</span>
        </div>
      </div>
      <div className="arrowright">
        <img src={arrow} alt="" onClick={() => scrollToSection(next)} />
      </div>
    </div>
  );
};

export default Counter;
