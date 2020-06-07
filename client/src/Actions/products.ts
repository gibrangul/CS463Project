import axios from 'axios';
import { FETCH_PRODUCTS, DELETE_PRODUCT } from './types';

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

export const deleteProduct = (uid: string) => async (dispatch: any) => {
  try {
    await axios.delete(`http://localhost:3001/products/delete/${uid}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: uid,
    });
  } catch (error) {
    throw error;
  }
};
