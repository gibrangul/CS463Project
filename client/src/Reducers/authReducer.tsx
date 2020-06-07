import { AUTH_ERROR, AUTH_USER } from "../Actions/types";

const INITIAL_STATE = {
  authenticated: "",
  user: "",
  errorMessage: "",
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: action.payload.token,
        user: action.payload.user,
      };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
