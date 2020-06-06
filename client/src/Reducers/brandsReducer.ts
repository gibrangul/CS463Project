import { FETCH_BRANDS } from "../Actions/types";
import { Action } from '../Interfaces/actionInterface';

export default (state = {}, action: Action) => {
  switch(action.type){
    case FETCH_BRANDS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}