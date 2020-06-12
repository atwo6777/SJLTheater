import React, { useState, useEffect } from "react";
import _ from "lodash";
import $ from "jquery";

import "./Portfolio.css";
import "../Container.css";

import showList from "./PortfolioShowList.json";
function Portfolio() {
  const [selectedShow, setSelectedShow] = useState(null);

  function loadShow(show) {
    setSelectedShow(show);
  }

  useEffect(() => {
    if (selectedShow !== null) {
      $(".selectedShow").addClass("fadeIn");
    } else {
      $(".portfolio").addClass("fadeIn");
    }
  }, [selectedShow]);

  return (
    <div className="portfolioPageContainer">
      <h2>Portfolio</h2>
      {selectedShow ? (
        <>
          <button
            onClick={() => {
              setSelectedShow(null);
            }}
            className="portfolioCloseButton"
          >
            <img alt="X" src={"images/close.png"}></img>
          </button>
          <div className="selectedShow">
            <div className="selectedShowInfo">
              {selectedShow.title ? <div>{selectedShow.title}</div> : null}
              {selectedShow.by ? <div>{"By " + selectedShow.by}</div> : null}
              {selectedShow.custom ? (
                <div
                  dangerouslySetInnerHTML={{ __html: selectedShow.custom }}
                />
              ) : null}
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
              {selectedShow.location ? (
                <div>{selectedShow.location}</div>
              ) : null}
              {selectedShow.date ? <div>{selectedShow.date}</div> : null}
            </div>
            {_.map(selectedShow.images, (image) => (
              <img key={image} alt={image} src={image}></img>
            ))}
            {selectedShow.photoCredit ? (
              <div>{"Photo credit " + selectedShow.photoCredit}</div>
            ) : null}
          </div>
        </>
      ) : (
        <div className="portfolio">
          {_.map(showList, (show) => (
            <div className="portfolioShow" key={show.title}>
              <div className="title">{show.title}</div>
              <div className="thumbnail zoom">
                <img
                  onClick={() => {
                    loadShow(show);
                  }}
                  alt={show.thumbnail}
                  src={show.thumbnail}
                ></img>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Portfolio;
