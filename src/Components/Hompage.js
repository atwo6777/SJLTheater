import React, { useState, useEffect } from "react";

import "./Homepage.css";

import Slideshow from "./Slideshow.js";
import CubeList from "./HomepageImages.json";

function Homepage(props) {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    handleResize();
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
          props.loadSection("CubePortfolio");
        }}
      >
        <div>
          <Slideshow cube={CubeList[0]}></Slideshow>
        </div>
      </div>
      {windowWidth > 768 ? (
        <>
          <div className="titleCard">
            <h2>Stephanie Lutz</h2>
            <h2>Lighting Designer</h2>
          </div>

          <div
            className="clickableContainer"
            onClick={() => {
              props.loadSection("CubePortfolio");
            }}
          >
            <div id="cubeRight">
              <Slideshow cube={CubeList[1]}></Slideshow>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Homepage;
