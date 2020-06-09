import React, { useState, useEffect } from "react";

import "./Homepage.css";

import Slideshow from "./Slideshow.js";
import CubeList from "./HomepageImages.json";

function Homepage(props) {
  const [windowWidth, setWindowWidth] = useState(320);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize() {
    setWindowWidth(
      window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    );
  }

  return (
    <div className="homepage">
      <div
        className="clickableContainer"
        onClick={() => {
          props.loadSection("Portfolio");
        }}
      >
        <Slideshow cube={CubeList[0]}></Slideshow>
      </div>
      {windowWidth > 768 ? (
        <>
          <div>
            <h2>Stephanie Lutz</h2>
            <h2>Lighting Designer</h2>
          </div>

          <div
            className="clickableContainer"
            onClick={() => {
              props.loadSection("Portfolio");
            }}
          >
            <Slideshow cube={CubeList[1]}></Slideshow>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Homepage;
