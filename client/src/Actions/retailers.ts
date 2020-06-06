import axios from 'axios';
import { FETCH_RETAILERS } from './types';

export const fetchRetailers = () => async (dispatch: any) => {
  try {

    const retailers = await axios.get("http://localhost:3001/retailers");

    dispatch({
      type: FETCH_RETAILERS,
      payload: retailers.data
    })

  } catch (error) {
    throw error;
  }
};
