import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "react-widgets/dist/css/react-widgets.css";
import "./base.scss";
import AppRouter from "./Router/AppRouter";
import configureStore from "./Store/configureStore";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
