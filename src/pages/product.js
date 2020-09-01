import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";

import { Typography, Button, CircularProgress } from "@material-ui/core";
import { Star, StarHalf, StarBorder } from "@material-ui/icons";
import "./product.css";

function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  dayjs.extend(relativeTime);
  dayjs.locale("es");

  useEffect(() => {
    db.collection("products")
      .doc(productId)
      .get()
      .then((data) => {
        return data.data();
      })
      .then((prod) => {
        setProduct({ ...product, ...prod });
        setLoading(false);
        console.log(product);
      });
  }, []);

  const drawRating = (rating) => {
    let result = [];
    let wholeStars = parseInt(rating);
    for (let i = 0; i < wholeStars; i++) {
      result.push(<Star />);
    }
    if (rating % 1 !== 0) {
      result.push(<StarHalf />);
      for (let i = 0; i < 4 - wholeStars; i++) {
        result.push(<StarBorder />);
      }
    } else {
      for (let i = 0; i < 5 - wholeStars; i++) {
        result.push(<StarBorder />);
      }
    }
    return result;
  };
  return (
    <div className="productContainer">
      {loading ? (
        <CircularProgress color="primary" style={{ margin: "auto" }} />
      ) : (
        <>
          <div className="productMainSection">
            <img
              className="productPreview"
              src={product.imageUrl}
              alt="product preview"
            />
            {/* <div
              style={{
                borderLeft: "1px solid #256231",
                position: "absolute",
                left: "61%",
                height: "60%",
              }}
            ></div> */}
            <div className="productDescription">
              <div className="productTitle">
                <Typography variant="h4">{product.name}</Typography>
                <Typography variant="subtitle2">
                  {dayjs(product.published.toDate()).fromNow()}
                </Typography>
              </div>
              <div className="descriptionHeader">
                <Typography variant="h6">
                  {product.category} | {product.region}
                </Typography>
              </div>
              <div className="descriptionMain">
                <Typography variant="h6">{product.description}</Typography>
                <hr
                  style={{
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                />
                <Typography variant="h6">
                  Cantidad de unidades: {product.quantity}
                </Typography>
                <hr
                  style={{
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                />
                <div className="ratingContainer">
                  <Typography variant="h6">
                    Calificación del producto
                  </Typography>
                  {drawRating(product.rating).map((e) => e)}
                  <Typography variant="h6">
                    ({product.numberOfRatings})
                  </Typography>
                </div>
              </div>
              <div className="descriptionPrice">
                <Typography variant="h4">${product.price}</Typography>
              </div>
              <div className="buyButton">
                <Button variant="outlined" color="primary">
                  Comprar
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Product;
