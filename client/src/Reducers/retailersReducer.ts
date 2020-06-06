import { FETCH_RETAILERS } from "../Actions/types";
import { Action } from '../Interfaces/actionInterface';

export default (state = {}, action: Action) => {
  switch(action.type){
    case FETCH_RETAILERS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}