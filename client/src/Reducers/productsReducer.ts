import { FETCH_PRODUCTS } from "../Actions/types";
import { Action } from '../Interfaces/actionInterface';

export default (state = {}, action: Action) => {
  switch(action.type){
    case FETCH_PRODUCTS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}