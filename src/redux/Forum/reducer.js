import { FORUMERROR, FORUMLOADING, FROUMGETSUCCESS, FROUMSUCCESS } from "../actionTyes";

const initstate = {
  Forum_IsLoding: false,
  Froum_IsError: false,
  data: [],
};

export const reducer = (state = initstate, action) => {
  const { type, payload } = action;

  switch (type) {
    case FORUMLOADING:
      return {
        ...state,
        Forum_IsLoding: true,
        Froum_IsError: false,
      };
    case FROUMSUCCESS:
      return {
        ...state,
        Forum_IsLoding: false,
        Froum_IsError: false,
      };
    case FROUMGETSUCCESS:
      return {
        ...state,
        Forum_IsLoding: false,
        Froum_IsError: false,
        data: payload,
      };

    case FORUMERROR:
      return {
        ...state,
        Forum_IsLoding: false,
        Froum_IsError: true,
      };
    default:
      return state;
  }
};
