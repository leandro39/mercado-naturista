import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./ItemsCarousel.css";
import Card from "./Card";

function Slideshow({ items }) {
  return (
    <div className="slide-container">
      <Slide duration={2700} transitionDuration={800} indicators={true}>
        {items.map((item) => {
          return (
            <div className="each-slide">
              {item.map((product) => {
                return (
                  <Card
                    key={product.name}
                    src={product.image}
                    title={product.name}
                    description={product.description}
                    price={product.price}
                  />
                );
              })}
            </div>
          );
        })}
      </Slide>
    </div>
  );
}

export default Slideshow;
