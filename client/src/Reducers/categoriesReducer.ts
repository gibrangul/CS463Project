import { FETCH_CATEGORIES } from "../Actions/types";
import { Action } from '../Interfaces/actionInterface';

export default (state = {}, action: Action) => {
  switch(action.type){
    case FETCH_CATEGORIES:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}