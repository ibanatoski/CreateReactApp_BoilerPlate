import React from "react";
import { Router as BrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import "scss/App.scss";
import history from 'utils/History.js';

const App = () => {
  return <BrowserRouter history={history}>{routes}</BrowserRouter>;
};

export default App;
