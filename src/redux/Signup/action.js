import { ERROR, LOADING, SUCCESS, LOGINSUCCESS } from "../actionTyes";
import axios from "axios";

export const SignupPostRequest = (obj) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    let res = await axios
      .post(`https://tidal-beaded-mum.glitch.me/users`, obj)
      .then((data) => {
        // console.log(data);
        // console.log(data.status);
        dispatch({ type: SUCCESS });
        return data;
      });

    return res;
  } catch (error) {
    dispatch({ type: ERROR });
  }
};
export const SiginGetRequest = (obj) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    let res = await axios
      .get(`https://tidal-beaded-mum.glitch.me/users`)
      .then((data) => {
        // console.log("from action", data);
        const ans = data.data?.filter(
          (item) => item.email == obj.email && item.password == obj.password
        );
        dispatch({ type: LOGINSUCCESS, payload: ans });
        return ans;
        // console.log("ans", ans);
      });

    return res;
  } catch (error) {
    dispatch({ type: ERROR });
  }
};
