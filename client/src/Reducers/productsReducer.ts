import { FETCH_PRODUCTS, DELETE_PRODUCT } from "../Actions/types";
import { Action } from "../Interfaces/actionInterface";
import _ from "lodash";

export default (state = {}, action: Action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        ..._.mapKeys(action.payload, "_id"),
      };
    case DELETE_PRODUCT:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
