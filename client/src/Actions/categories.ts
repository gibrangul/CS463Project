import axios from 'axios';
import { FETCH_CATEGORIES, DELETE_CATEGORY } from './types';

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

export const deleteCategory = (uid: string) => async (dispatch: any) => {
  try {
    await axios.delete(`http://localhost:3001/categories/delete/${uid}`);
    dispatch({
      type: DELETE_CATEGORY,
      payload: uid,
    });
  } catch (error) {
    throw error;
  }
};
