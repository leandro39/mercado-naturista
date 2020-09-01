import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slideshow.css";

function Slideshow(props) {
  return (
    <div className="slide-container">
      <Slide duration={2700} transitionDuration={800} indicators={true}>
        {props.images.map((image, i) => {
          return (
            <div key={i} className="each-slide">
              <div style={{ backgroundImage: `url(${image})` }}></div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
}

export default Slideshow;
