import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "../Reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const user = localStorage.getItem("user") || "{}"
export default () =>
  createStore(
    reducers,
    {
      auth: {
        authenticated: localStorage.getItem("token") || "",
        user: JSON.parse(user),
        errorMessage: "",
      },
    },
    composeEnhancers(applyMiddleware(thunk))
  );
