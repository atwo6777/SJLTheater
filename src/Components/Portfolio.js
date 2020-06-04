import React, { useState } from "react";
import _ from "lodash";

import showList from "./PortfolioShowList.json";
function Portfolio() {
  const [selectedShow, setSelectedShow] = useState(null);

  function loadShow(show) {
    setSelectedShow(show);
  }

  return (
    <div className="portfolio">
      <h3>Portfolio</h3>
      {selectedShow ? (
        <div className="selectedShow">
          <div className="selectedShowInfo">
            {selectedShow.title ? <div>{selectedShow.title}</div> : null}
            {selectedShow.by ? <div>{"By " + selectedShow.by}</div> : null}
            {selectedShow.custom ? <div>{selectedShow.custom}</div> : null}
            {selectedShow.director ? (
              <div>{"Dir. " + selectedShow.director}</div>
            ) : null}
            {selectedShow.scenicDesigner ? (
              <div>{"Scenic Designer " + selectedShow.scenicDesigner}</div>
            ) : null}
            {selectedShow.soundBy ? (
              <div>{"Sound by " + selectedShow.soundBy}</div>
            ) : null}
            {selectedShow.projectionDesigner ? (
              <div>
                {"Projection Designer " + selectedShow.projectionDesigner}
              </div>
            ) : null}
            {selectedShow.properties ? (
              <div>{"Properties " + selectedShow.properties}</div>
            ) : null}
            {selectedShow.location ? <div>{selectedShow.location}</div> : null}
            {selectedShow.date ? <div>{selectedShow.date}</div> : null}
          </div>
          {_.map(selectedShow.images, (image) => (
            <img key={image} alt={image} src={image}></img>
          ))}
          {selectedShow.photoCredit ? (
            <div>{"Photo credit " + selectedShow.photoCredit}</div>
          ) : null}
        </div>
      ) : null}
      <div>
        {_.map(showList, (show) => (
          <div className="portfolioShow" key={show.title}>
            <img
              onClick={() => {
                loadShow(show);
              }}
              alt={show.thumbnail}
              src={show.thumbnail}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
