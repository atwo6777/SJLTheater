import React from "react";

import "./Slideshow.css";

function Slideshow(props) {
  return (
    <div>
      <div className="slideshowParent">
        <div className="slideshow">
          <div className="front">
            <img src={props.cube.front}></img>
          </div>
          <div className="back">
            <img src={props.cube.back}></img>
          </div>

          <div className="top">
            <img src={props.cube.top}></img>
          </div>
          <div className="right">Right</div>
          <div className="bottom">
            <img src={props.cube.bottom}></img>
          </div>
          <div className="left">Left</div>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
