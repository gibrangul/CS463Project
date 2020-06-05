import { combineReducers } from "redux";
import navReducer from "./navReducer";
import loaderReducer from "./loaderReducer";
import productsReducer from "./productsReducer";

export default combineReducers({
  navigation: navReducer,
  isLoading: loaderReducer,
  products: productsReducer,
});
