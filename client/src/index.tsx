import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "normalize.css";
import "react-widgets/dist/css/react-widgets.css";
import "./base.scss";
import Loader from "react-loaders";

import configureStore from "./Store/configureStore";
import AppRouter from "./Router/AppRouter";

const store = configureStore();

// ReactDOM.render(
//   <Loader type="ball-clip-rotate-multiple" active={true} />,
//   document.getElementById("root")
// );

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
