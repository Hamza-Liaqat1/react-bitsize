// Packages
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
// Containers
import Cards from "./containers/Cards";
import Home from "./pages/Home";
import Selection from "./pages/Selection";
import Anxiety from "./pages/selection/anxiety";
import Productivity from "./pages/selection/productivity";
import Marketing from "./pages/selection/marketing";
import Motivation from "./pages/selection/motivation";
import BodyLanguage from "./pages/selection/body-language";

// Utils
import trackPage from "./utils/trackPage";

const InnerApp = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/selection" component={Selection} />
    <Route exact path="/selection/anxiety" component={Anxiety} />
    <Route exact path="/selection/productivity" component={Productivity} />
    <Route exact path="/selection/marketing" component={Marketing} />
    <Route exact path="/selection/motivation" component={Motivation} />
    <Route exact path="/selection/body-language" component={BodyLanguage} />
    <Redirect from="*" to="/" />
  </Switch>
);

const App = () => (
  <Router>
    <Route component={trackPage(InnerApp)} />
  </Router>
);

export default App;

// WEBPACK FOOTER //
// ./src/App.js
