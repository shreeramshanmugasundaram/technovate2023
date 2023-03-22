import React, { useRef } from "react";
import Events from "../parts/Events";
import About from "../parts/About";
import Counter from "../parts/Counter";
import Nav from "../components/Nav";
import Hero from "../parts/Hero";
import Sponsers from "../parts/Sponser";
import PastEvent from "../parts/PastEvent";
const Main = () => {
  const home = useRef(null);
  const about = useRef(null);
  const events = useRef(null);
  const sponser = useRef(null);
  const count = useRef(null);

  const scrollToSection = (elementRef) => {
    console.log("scrollsection");
    console.log(elementRef);
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Nav
        scrollToSection={scrollToSection}
        reference={{ home, about, events, sponser }}
      />
      <Hero scrollToSection={scrollToSection} reference={home} next={count} />
      <Counter
        scrollToSection={scrollToSection}
        reference={count}
        next={about}
      />
      <About
        reference={about}
        scrollToSection={scrollToSection}
        next={events}
      />
      <Events reference={events} />
      <Sponsers reference={sponser} />
      <PastEvent />
    </div>
  );
};

export default Main;
