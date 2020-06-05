import { SET_LOADER } from "../Actions/types";
import { Action } from "../Interfaces/actionInterface";

export default (state = true, action: Action) => {
  switch (action.type) {
    case SET_LOADER:
      return action.payload
    default:
      return state;
  }
};