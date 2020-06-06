import axios from 'axios';
import { FETCH_CATEGORIES } from './types';

export const fetchCategories = () => async (dispatch: any) => {
  try {

    const categories = await axios.get("http://localhost:3001/categories");

    dispatch({
      type: FETCH_CATEGORIES,
      payload: categories.data
    })

  } catch (error) {
    throw error;
  }
};
