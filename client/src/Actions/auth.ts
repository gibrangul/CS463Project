import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";

export const signup = (formProps: any, callback: any) => async (
  dispatch: any
) => {
  try {
    const res = await axios.post("http://localhost:3001/signup", formProps);

    dispatch({
      type: AUTH_USER,
      payload: { token: res.data.token, user: res.data.user },
    });

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    callback();
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Email is in use",
    });
  }
};

export const signout = () => {
  localStorage.removeItem("token");
  return {
    type: AUTH_USER,
    payload: "",
  };
};

export const getUser = (uid: any) => async (dispatch: any) => {
  try {
    const res = await axios.get("http://localhost:3001/user");
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: "User not found",
    });
  }
};

export const signIn = (formProps: any, callback: any) => async (
  dispatch: any
) => {
  try {
    const res = await axios.post("http://localhost:3001/signin", formProps);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    dispatch({
      type: AUTH_USER,
      payload: { token: res.data.token, user: res.data.user },
    });
    callback();
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Invalid Email/Login",
    });
  }
};
