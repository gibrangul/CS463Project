import axios from "axios";
import { FETCH_BRANDS, DELETE_BRAND } from "./types";

export const fetchBrands = () => async (dispatch: any) => {
  try {
    const brands = await axios.get("http://localhost:3001/brands");

    dispatch({
      type: FETCH_BRANDS,
      payload: brands.data,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteBrand = (uid: string) => async (dispatch: any) => {
  try {
    await axios.delete(`http://localhost:3001/brands/delete/${uid}`);
    dispatch({
      type: DELETE_BRAND,
      payload: uid,
    });
  } catch (error) {
    throw error;
  }
};
