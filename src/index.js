import React from "react";
import ReactDOM from "react-dom";
import "scss/index.scss";
import App from "./App";
import { AppContainer } from "react-hot-loader";
import * as serviceWorker from "./serviceWorker";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );
};

render(App);

// webpack Hot Module Replacement API
if (module.hot) {
  // keep in mind - here you are configuring HMR to accept CHILDREN MODULE
  // while `hot` would configure HMR for the CURRENT module
  module.hot.accept("./App", () => {
    render(App);
  });

  //Add different paths to trigger hot reloading for changes in contents
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
