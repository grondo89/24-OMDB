import axios from "axios";
import { SET_FAVS } from "../constants";

const setFavs = function(favs) {
  return {
    type: SET_FAVS,
    favs
  };
};

export const fetchFavs = function(movieId) {
  return function(dispatch, getState) {
    axios
      .get(`https://www.omdbapi.com/?apikey=20dac387&i=${movieId}`)
      .then(res => {
        dispatch(setFavs(res.data));
      });
  };
};
