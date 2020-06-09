import React, { useState, useEffect } from "react";
import $ from "jquery";

import "./Container.css";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio.js";
import Contact from "./Components/Contact.js";
import Homepage from "./Components/Hompage.js";

function Container() {
  const [loadedSection, setLoadedSection] = useState(
    <Homepage loadSection={loadSection} />
  );

  function loadSection(type) {
    console.log(type);
    switch (type) {
      case "Homepage":
      default:
        $("#topGradient")
          .addClass("homepageTopGradient")
          .removeClass("secondaryPageTopGradient");
        $("#bottomGradient")
          .addClass("secondaryPageBottomGradient")
          .removeClass("secondaryPageBottomGradient");
        setLoadedSection(<Homepage loadSection={loadSection} />);
        break;

      // all options after this add the homepage

      case "About":
        $("#topGradient")
          .addClass("secondaryPageTopGradient")
          .removeClass("homepageTopGradient");
        $("#bottomGradient")
          .addClass("secondaryPageBottomGradient")
          .removeClass("secondaryPageBottomGradient");
        setLoadedSection(<About />);
        break;
      case "Portfolio":
        $("#topGradient")
          .addClass("secondaryPageTopGradient")
          .removeClass("homepageTopGradient");
        $("#bottomGradient")
          .addClass("secondaryPageBottomGradient")
          .removeClass("secondaryPageBottomGradient");
        setLoadedSection(<Portfolio />);
        break;
      case "Contact":
        $("#topGradient")
          .addClass("secondaryPageTopGradient")
          .removeClass("homepageTopGradient");
        $("#bottomGradient")
          .addClass("secondaryPageBottomGradient")
          .removeClass("secondaryPageBottomGradient");
        setLoadedSection(<Contact />);
        break;
    }
  }

  useEffect(() => {
    $(".portfolio").addClass("fadeIn");
  }, [loadedSection]);

  return (
    <div className="App">
      <div className="Header">
        <img
          onClick={() => {
            loadSection("Homepage");
          }}
          id="Logo"
          alt="Logo"
          src={"public/Logo.png"}
        ></img>
        <div className="flex navigation">
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
            onClick={() => {
              loadSection("Contact");
            }}
          >
            Contact
          </a>
        </div>
      </div>

      <div className="Body">{loadedSection}</div>

      <div id="topGradient" className="homepageTopGradient" />
      <div id="bottomGradient" className="homepageBottomGradient" />
    </div>
  );
}

export default Container;
