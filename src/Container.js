import React, { useState, useEffect } from "react";
// import { Logo } from "/images/index.js";
import About from "./Components/About";
import "./Container.css";
import Portfolio from "./Components/Portfolio.js";
import Contact from "./Components/Contact.js";
import Homepage from "./Components/Hompage.js";

function Container() {
  const [loadedSection, setLoadedSection] = useState(null);

  function loadSection(type) {
    console.log(type);
    switch (type) {
      case "About":
        setLoadedSection(<About />);
        break;
      case "Portfolio":
        setLoadedSection(<Portfolio />);
        break;
      case "Contact":
        setLoadedSection(<Contact />);
        break;
      default:
        setLoadedSection(<div>An Unexpected Error Occured</div>);
        break;
    }
  }

  return (
    <div className="App">
      <div className="Header">
        <img alt="Logo" src={"images/Logo.png"}></img>
        <div className="flex">
          <a
            onClick={() => {
              loadSection("About");
            }}
          >
            About
          </a>
          <a
            onClick={() => {
              loadSection("Portfolio");
            }}
          >
            Portfolio
          </a>
          <a
            className="links"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:Sjltheater@gmail.com"
          >
            Contact
          </a>
        </div>
      </div>
      <Homepage />
      <div>{loadedSection}</div>
    </div>
  );
}

export default Container;
