import axios from 'axios';
import { FETCH_BRANDS } from './types';

export const fetchBrands = () => async (dispatch: any) => {
  try {

    const brands = await axios.get("http://localhost:3001/brands");

    dispatch({
      type: FETCH_BRANDS,
      payload: brands.data
    })

  } catch (error) {
    throw error;
  }
};
