import { SELECT_PAGE } from "../Actions/types";
import { Action } from "../Interfaces/actionInterface";
import {
  RETAILERS,
  PRODUCTS,
  BRANDS,
  CATEGORIES
} from "../Constants/pages";

const INITIAL_STATE = {
  pages: [RETAILERS, PRODUCTS, BRANDS, CATEGORIES],
  currentPage: RETAILERS,
};

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case SELECT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};
