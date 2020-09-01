import React, { useState } from "react";
import "./Card.css";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { IconButton } from "@material-ui/core";

function Card({ src, title, description, price, location }) {
  const [unfold, setUnfold] = useState(false);

  return (
    <div
      onMouseEnter={() => setUnfold(true)}
      onMouseLeave={() => setUnfold(false)}
      className="card"
    >
      <img src={src} alt="" />
      <div className="cardInfo">
        <section className="titleSection">
          <h2>{title}</h2>
        </section>
        <section
          className={
            unfold ? "descriptionSectionShow" : "descriptionSectionHide"
          }
        >
          <h4>{description}</h4>
        </section>
        <section className={location ? "locationSection" : "priceSection"}>
          <h3>{price}</h3>
        </section>
        {!unfold && (
          <IconButton>
            <ExpandMoreOutlinedIcon />
          </IconButton>
        )}
      </div>
    </div>
  );
}

export default Card;
