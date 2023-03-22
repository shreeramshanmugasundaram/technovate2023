import React from "react";
import EventCardL from "../components/EventCardL";
import EventCardR from "../components/EventCardR";
import Hawkrace from "../images/eventcards/hawkrace.svg";
import Nirmiti from "../images/eventcards/nirmiti.svg";
import Expedition from "../images/eventcards/expedition.svg";
import spro from "../images/eventcards/spro.svg";
import cad from "../images/eventcards/cad.svg";
import laptop from "../images/eventcards/laptop.svg";
import unleash from "../images/eventcards/unleash.svg";
import mech from "../images/eventcards/mech.svg";
import cat from "../images/eventcards/cat.svg";
import roborace from "../images/eventcards/roborace.svg";
import rocketleague from "../images/eventcards/rocketleague.svg";
import codecombact from "../images/eventcards/codecombact.svg";
import quizotronics from "../images/eventcards/quizotronics.svg";
import paperpresent from "../images/eventcards/paperpresent.svg";
import header from "../images/eventcards/events.svg";
import "./Events.css";
const Events = ({ reference }) => {
  const events = [
    {
      name: "Expedition",
      img: Expedition,
      link: "/expedition",
    },
    {
      name: "STRUCTUREPRO",
      img: spro,
      link: "/structurepro",
    },
    {
      name: "Hawkrace",
      img: Hawkrace,
      link: "/hawkrace",
    },
    {
      name: "Nirmiti",
      img: Nirmiti,
      link: "/nirmiti",
    },
    {
      name: "cad master",
      img: cad,
      link: "/cadmaster",
    },
    {
      name: "technofire",
      img: laptop,
      link: "/technofire",
    },
    {
      name: "UNLEASH2K23",
      img: unleash,
      link: "/unleash2k23",
    },
    {
      name: "CAD O CREATE",
      img: mech,
      link: "/cadocreate",
    },
    {
      name: "BRO CODE",
      img: cat,
      link: "/brocode",
    },
    {
      name: "Robo Race ",
      img: roborace,
      link: "/roborace",
    },
    {
      name: "ROCKETLEAGUE",
      img: rocketleague,
      link: "/rocketleague",
    },
    {
      name: "Code Combact ",
      img: codecombact,
      link: "/codecombact",
    },
    {
      name: "QUIZOTRONICS",
      img: quizotronics,
      link: "/quizotronics",
    },
    {
      name: "Paper Present",
      img: paperpresent,
      link: "/paperpresent",
    },
  ];
  return (
    <div className="Events" ref={reference}>
      <div className="Heading">
        <img src={header} alt="" />
      </div>
      {events.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <div className="Event_gap">
              <EventCardL name={item.name} image={item.img} link={item.link} />
            </div>
          );
        }
        return (
          <div className="Event_gap">
            <EventCardR name={item.name} image={item.img} link={item.link} />
          </div>
        );
      })}
    </div>
  );
};

export default Events;
