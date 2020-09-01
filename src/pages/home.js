import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Search from "../components/Search";
import Frutas from "../assets/frutas.jpg";
import Cherries from "../assets/cherries.jpg";
import Agroquimicos from "../assets/agroquimicos.jpg";
import Imagen1 from "../assets/imagen1_bottom.jpg";
import Imagen2 from "../assets/0004505925.jpg";
import Imagen3 from "../assets/organico.jpg";
import data from "../data/products";
import services from "../data/services";
import Slideshow from "../components/Slideshow";
import Card from "../components/Card";

import { db } from "../firebase/firebase";

const useStyles = makeStyles({
  carousel: {
    marginTop: "2rem",
  },
  cardsContainer: {
    width: "90vw",
    height: "70vh",
    margin: "auto",
    marginBottom: 0,
    marginTop: 0,
    padding: "30px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
  },

  title: {
    marginTop: "0",
    marginBottom: "0",
    marginLeft: "2rem",
    display: "block",
  },
  slideContainer: {
    display: "flex",
    flexDirection: "column",
    width: "80vw",
    margin: "auto",
    marginTop: "2rem",
    height: "50vh",
  },
  countersContainer: {
    margin: "auto",
    marginTop: "2rem",
    marginBottom: "2rem",
    width: "60vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  counter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "0.7rem",

    "& #number": {
      border: "5px solid #256231",
      width: "70%",
      fontSize: "1.25rem",
      height: "5rem",
      textAlign: "center",
      borderRadius: 999,
      margin: "auto",
      marginTop: "2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  imagesContainer: {
    display: "flex",
    flexDirection: "row",
    width: "80vw",
    margin: "auto",
    marginTop: "10rem",
    flexWrap: "wrap",
  },
  imageBottom: {
    objectFit: "cover",
    flexGrow: 1,
    width: "40%",
    borderRadius: "5%",
  },
  imageFooter: {
    objectFit: "cover",
    width: "70%",
    borderRadius: "5%",
    margin: "auto",
    marginTop: "3rem",
  },
});

export default function Home() {
  const classes = useStyles();
  const [categories, setCategories] = useState([]);
  const [regions, setRegions] = useState([]);
  const slideImages = [Frutas, Cherries, Agroquimicos];
  let prods = [];
  for (let i = 0; i < 4; i++) {
    prods.push(data);
  }

  useEffect(() => {
    db.collection("categories")
      .get()
      .then((doc) => {
        let categoriesData = doc.docs.map((doc) => doc.data());
        setCategories([...categories, ...categoriesData]);
        console.log(categories);
      });
    console.log(categories);
    db.collection("regions")
      .get()
      .then((doc) => {
        let regionsData = doc.docs.map((doc) => {
          console.log(doc);
          return doc.data();
        });
        setRegions([...regions, ...regionsData]);
        console.log(regions);
      });
  }, []);
  return (
    <>
      <div className={classes.slideContainer}>
        <Slideshow images={slideImages} />
      </div>
      <div style={{ marginBottom: "4rem" }}>
        <Search categories={categories} regions={regions} />
      </div>
      <div
        style={{
          width: "90vw",
          margin: "auto",
          marginTop: 0,
          marginBottom: "3rem",
        }}
      >
        <hr
          style={{
            border: "2px solid #88c140",
            margin: "auto",
          }}
        />
      </div>

      <div style={{ width: "90vw", margin: "auto" }}>
        <h1 className={classes.title}>Productos destacados</h1>
      </div>

      <div className={classes.cardsContainer}>
        {data.map((product) => {
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
      <div
        style={{
          width: "90vw",
          margin: "auto",
          marginTop: 0,
          marginBottom: "3rem",
        }}
      >
        <hr
          style={{
            border: "2px solid #88c140",
            margin: "auto",
          }}
        />
      </div>
      <div style={{ width: "90vw", margin: "auto" }}>
        <h1 className={classes.title}>Servicios destacados</h1>
      </div>

      <div className={classes.cardsContainer}>
        {services.map((service) => {
          return (
            <Card
              key={service.name}
              src={service.image}
              title={service.name}
              price={service.location}
              description={service.description}
              location
            />
          );
        })}
      </div>
      <div
        style={{
          width: "90vw",
          margin: "auto",
          marginTop: 0,
        }}
      >
        <hr
          style={{
            border: "2px solid #88c140",
            margin: "auto",
          }}
        />
      </div>
      <div className={classes.countersContainer}>
        <div className={classes.counter}>
          <h1>Productos publicados</h1>
          <div id="number">
            <h1>1200</h1>
          </div>
        </div>
        <div className={classes.counter}>
          <h1>Servicios publicados</h1>
          <div id="number">
            <h1>1200</h1>
          </div>
        </div>
        <div className={classes.counter}>
          <h1>Tiendas registradas</h1>
          <div id="number">
            <h1>1200</h1>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "90vw",
          margin: "auto",
          marginBottom: "5rem",
        }}
      >
        <hr
          style={{
            border: "2px solid #88c140",
            margin: "auto",
            marginTop: "3rem",
          }}
        />
      </div>
      <div className={classes.imagesContainer}>
        <img
          style={{ marginRight: "2rem" }}
          className={classes.imageBottom}
          src={Imagen1}
          alt="imagen1"
        />

        <img className={classes.imageBottom} src={Imagen2} alt="imagen2" />
        <img className={classes.imageFooter} src={Imagen3} alt="imagen3" />
      </div>
    </>
  );
}
