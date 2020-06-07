import _ from 'lodash'
import { FETCH_BRANDS, DELETE_BRAND } from "../Actions/types";
import { Action } from '../Interfaces/actionInterface';

export default (state = {}, action: Action) => {
  switch(action.type){
    case FETCH_BRANDS:
      return {
        ...state,
        ..._.mapKeys(action.payload, '_id')
      }
    case DELETE_BRAND:
      return _.omit(state, action.payload)
    default:
      return state;
  }
}