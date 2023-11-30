import { ERROR, LOADING, SUCCESS, LOGINSUCCESS } from "../actionTyes";

const initstate = {
  signup_IsLoding: false,
  signup_IsError: false,
  isAuth: false,
  username: "",
  avatar: "",
};

export const reducer = (state = initstate, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOADING:
      return {
        ...state,
        signup_IsLoding: true,
        signup_IsError: false,
      };
    case SUCCESS:
      return {
        ...state,
        signup_IsLoding: false,
        signup_IsError: false,
      };
    case LOGINSUCCESS:
      return {
        ...state,
        signup_IsLoding: false,
        signup_IsError: false,
        isAuth: true,
        username: payload[0].username,
        avatar: payload[0].avatar,
      };

    case ERROR:
      return {
        ...state,
        signup_IsLoding: false,
        signup_IsError: true,
      };
    default:
      return state;
  }
};
