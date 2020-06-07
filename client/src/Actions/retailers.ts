import axios from 'axios';
import { FETCH_RETAILERS, DELETE_RETAILER } from './types';

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

export const deleteRetailer = (uid: string) => async (dispatch: any) => {
  try {
    await axios.delete(`http://localhost:3001/retailers/${uid}`);
    dispatch({
      type: DELETE_RETAILER,
      payload: uid,
    });
  } catch (error) {
    throw error;
  }
};
