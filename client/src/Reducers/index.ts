import { combineReducers } from "redux";
import navReducer from "./navReducer";
import loaderReducer from "./loaderReducer";
import productsReducer from "./productsReducer";
import categoriesReducer from "./categoriesReducer";
import retailersReducer from "./retailersReducer";
import brandsReducer from "./brandsReducer";

export default combineReducers({
  retailers: retailersReducer,
  navigation: navReducer,
  isLoading: loaderReducer,
  products: productsReducer,
  categories: categoriesReducer,
  brands: brandsReducer
});
