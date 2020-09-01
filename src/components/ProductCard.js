import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    margin: "auto",
    height: "100%",
    maxWidth: 200,
  },
  content: {
    textAlign: "center",
    height: "20%",
  },
  media: {
    height: 300,
    paddingTop: "56.25%", // 16:9
  },
  ".MuiCardMedia-root": {
    objectFit: "cover",
  },
});

export default function ProdcutCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.root}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.name}
        />
        <CardContent className={classes.content}>
          <Typography
            variant="h5"
            component="h2"
            style={{
              wordWrap: "break-word",
              height: "50%",
              overflow: "hidden",
            }}
          >
            {props.name}
          </Typography>
          <Typography variant="h5" component="h2" style={{ marginTop: "1rem" }}>
            {props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
