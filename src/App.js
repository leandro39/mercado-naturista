import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Store from "./Store";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/home";
import Profile from "./pages/profile";
import Product from "./pages/product";

// Styling
import Theme from "./Theme";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import "./App.css";

// Material ui stuff

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={Theme}>
          <CssBaseline>
            <Store>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/users/:username" component={Profile} />
                <Route exact path="/products/:productId" component={Product} />
              </Switch>
              <Footer />
            </Store>
          </CssBaseline>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
