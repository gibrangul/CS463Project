import { combineReducers } from "redux";
import navReducer from "./navReducer";
import loaderReducer from "./loaderReducer";

export default combineReducers({
  navigation: navReducer,
  isLoading: loaderReducer
})

