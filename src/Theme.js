import { createMuiTheme } from "@material-ui/core/styles";
import JohnstonUnderground from "./assets/p22-johnston-underground.ttf";

const font = {
  fontFamily: "Johnston Underground",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Johnston Underground'),
    local('Johnston Underground-Regular'),
    url(${JohnstonUnderground}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const theme = createMuiTheme({
  palette: {
    primary: {
      //Green
      main: "#88C140",
      dark: "#256231",
    },
    secondary: {
      main: "#FFF200",
    },
  },
  typography: {
    fontFamily: '"Johnston Underground", Roboto',
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [font],
      },
    },
  },
});

export default theme;
