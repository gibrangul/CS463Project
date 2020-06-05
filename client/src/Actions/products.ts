import axios from 'axios';
import { FETCH_PRODUCTS } from './types';

export const fetchProducts = () => async (dispatch: any) => {
  try {

    const products = await axios.get("http://localhost:3001/products");

    dispatch({
      type: FETCH_PRODUCTS,
      payload: products.data
    })

  } catch (error) {
    throw error;
  }
};
