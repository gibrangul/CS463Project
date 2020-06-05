import { SET_LOADER } from './types';

export const setLoader = (isLoading: boolean) => (dispatch: any) => {
  dispatch({
    type: SET_LOADER,
    payload: isLoading
  })
}