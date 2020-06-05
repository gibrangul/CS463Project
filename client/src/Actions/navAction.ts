import { SELECT_PAGE } from './types';

export const selectPage = (page: String = '') => (dispatch: any) => (
  dispatch({
    type: SELECT_PAGE,
    payload: page
  })
)