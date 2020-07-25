import React from "react";

import "./Slideshow.css";

function Slideshow(props) {
  return (
    <div className="stage">
      <div className="spinner">
        <div className="face1 cubeFace">
          <img alt={props.cube.front} src={props.cube.front} />
        </div>
        <div className="face2 cubeFace"></div>
        <div className="face3 cubeFace">
          <img alt={props.cube.top} src={props.cube.top} />
        </div>
        <div className="face4 cubeFace">
          <img src={props.cube.back} alt={props.cube.back} />
        </div>
        <div className="face5 cubeFace"></div>
        <div className="face6 cubeFace">
          <img src={props.cube.bottom} alt={props.cube.bottom} />
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
