import React from "react";
import {
  TextField,
  Button,
  Select,
  FormControl,
  InputLabel,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    margin: theme.spacing(1),
    width: "100%",
    marginTop: "3rem",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
}));

export default function Search({ categories, regions }) {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <Grid container spacing={3} justify="center" direction="row">
        <Grid item lg={2}>
          <TextField
            style={{ width: "100%" }}
            variant="outlined"
            label="¿Qué estás buscando?"
          />
        </Grid>
        <Grid item lg={2}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="categoria">Seleccione categoría</InputLabel>
            <Select
              native
              // value={state.age}
              // onChange={handleChange}
              label="Seleccione categoría"
              inputProps={{
                name: "categoria",
                id: "categoria",
              }}
            >
              <option aria-label="None" value="" />
              {categories.map((category) => {
                return (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                );
              })}
              {/* <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option> */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={2}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="region">Seleccione región</InputLabel>
            <Select
              native
              // value={state.age}
              // onChange={handleChange}
              label="Seleccione región"
              inputProps={{
                name: "region",
                id: "region",
              }}
            >
              <option aria-label="None" value="" />
              {regions.map((regions) => {
                return (
                  <option key={regions.name} value={regions.name}>
                    {regions.name}
                  </option>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={2} style={{ display: "flex" }}>
          <Button color="primary" fullWidth size="medium" variant="outlined">
            Buscar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
