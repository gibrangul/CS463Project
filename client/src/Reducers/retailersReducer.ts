import { FETCH_RETAILERS, DELETE_RETAILER } from "../Actions/types";
import { Action } from "../Interfaces/actionInterface";
import _ from "lodash";

export default (state = {}, action: Action) => {
  switch (action.type) {
    case FETCH_RETAILERS:
      return {
        ...state,
        ..._.mapKeys(action.payload, "_id"),
      };
    case DELETE_RETAILER:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
