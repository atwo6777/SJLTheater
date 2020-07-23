import React, { useState, useEffect } from "react";
import $ from "jquery";

import "./Container.css";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio.js";
import Contact from "./Components/Contact.js";
import Homepage from "./Components/Hompage.js";

function Container() {
  const [loadedSection, setLoadedSection] = useState(null);

  function loadSection(type) {
    switch (type) {
      case "Homepage":
      default:
        $("#topGradient")
          .addClass("homepageTopGradient")
          .removeClass("secondaryPageTopGradient");
        $("#bottomGradient")
          .addClass("secondaryPageBottomGradient")
          .removeClass("secondaryPageBottomGradient");
        $(".homepage").removeClass("fadeOut");
        setLoadedSection(null);
        break;

      // all options after this add the homepage

      case "About":
        $("#topGradient")
          .addClass("secondaryPageTopGradient")
          .removeClass("homepageTopGradient");
        $("#bottomGradient")
          .addClass("secondaryPageBottomGradient")
          .removeClass("secondaryPageBottomGradient");
        $(".homepage").addClass("fadeOut");
        setLoadedSection(<About />);
        break;
      case "CubePortfolio":
        $(".spinner").addClass("spinnerActivated");
        setTimeout(() => {
          $("#topGradient")
            .addClass("secondaryPageTopGradient")
            .removeClass("homepageTopGradient");
          $("#bottomGradient")
            .addClass("secondaryPageBottomGradient")
            .removeClass("secondaryPageBottomGradient");
          setLoadedSection(<Portfolio />);
          $(".homepage").addClass("fadeOut");
          setTimeout(() => {
            $(".spinner").removeClass("spinnerActivated");
          }, 1500);
        }, 3500);
        break;

      case "Portfolio":
        $("#topGradient")
          .addClass("secondaryPageTopGradient")
          .removeClass("homepageTopGradient");
        $("#bottomGradient")
          .addClass("secondaryPageBottomGradient")
          .removeClass("secondaryPageBottomGradient");
        $(".homepage").addClass("fadeOut");
        setLoadedSection(<Portfolio />);

        break;
      case "Contact":
        $("#topGradient")
          .addClass("secondaryPageTopGradient")
          .removeClass("homepageTopGradient");
        $("#bottomGradient")
          .addClass("secondaryPageBottomGradient")
          .removeClass("secondaryPageBottomGradient");
        $(".homepage").addClass("fadeOut");
        setLoadedSection(<Contact />);
        break;
    }
  }

  useEffect(() => {
    $(".portfolio").addClass("fadeIn");
    $(".contactBody").addClass("fadeIn");
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
          src={process.env.PUBLIC_URL + "images/Logo.png"}
        ></img>
        <div className="flex navigation">
          <button
            className="transparent"
            onClick={() => {
              loadSection("About");
            }}
          >
            About
          </button>
          <button
            className="transparent"
            onClick={() => {
              if (loadedSection === null) {
                loadSection("CubePortfolio");
              } else {
                loadSection("Portfolio");
              }
            }}
          >
            Portfolio
          </button>
          <button
            className="transparent"
            onClick={() => {
              loadSection("Contact");
            }}
          >
            Contact/Resume
          </button>
        </div>
      </div>

      <div className="Body">
        <Homepage loadSection={loadSection} />
        <div style={{ minHeight: "100%" }}>{loadedSection}</div>
        <div className="Footer">
          <p>
            Production photo's are the property of the persons/entities
            producing, directing, designing, photographing, and herein-by
            affiliated with those parties.
          </p>
          <p>
            Photo's attributed to the persons who took the photos at request.
          </p>
          <p>
            Stephanie Lutz does not own the photos other than those Stephanie
            Lutz personally captured.
          </p>
          <p>
            Copyright claimants pursue noted publisher of website for
            resolution, compensation, and such actions.
          </p>
          <p>Lighting designs © Stephanie Lutz</p>
        </div>
      </div>

      <div id="topGradient" className="homepageTopGradient" />
      <div id="bottomGradient" className="homepageBottomGradient" />
    </div>
  );
}

export default Container;
