import axios from "axios";
import {
  FORUMERROR,
  FORUMLOADING,
  FROUMGETSUCCESS,
  FROUMSUCCESS,
} from "../actionTyes";

export const ForumPost = (obj) => async (dispatch) => {
  try {
    dispatch({ type: FORUMLOADING });
    let res = await axios
      .post(`https://tidal-beaded-mum.glitch.me/forum`, obj)
      .then((data) => {
        // console.log(data);
        // console.log(data.status);
        dispatch({ type: FROUMSUCCESS });
        return data;
      });
    console.log(res);
    return res;
  } catch (error) {
    dispatch({ type: FORUMERROR });
  }
};
export const GETFORUMDATA = () => async (dispatch) => {
  try {
    dispatch({ type: FORUMLOADING });
    let res = await axios
      .get(`https://tidal-beaded-mum.glitch.me/forum`)
      .then((data) => {
        // console.log(data.data);
        // console.log(data.status);
        dispatch({ type: FROUMGETSUCCESS, payload: data.data });
        return data;
      });
    // console.log(res);
    return res;
  } catch (error) {
    dispatch({ type: FORUMERROR });
  }
};
