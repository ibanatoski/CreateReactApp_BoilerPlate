import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./pages/About";

export const routes = (
  <Switch>
    <Route path="/" exact render={props => <AboutPage {...props} />} />
    <Route path="/about" exact render={props => <div>Hello</div>} />
  </Switch>
);
