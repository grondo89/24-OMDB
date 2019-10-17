import axios from "axios";
import { SET_SINGLE_MOVIE } from "../constants";

const setSingleMovie = function(film) {
  return {
    type: SET_SINGLE_MOVIE,
    film
  };
};

export const fetchSingleMovie = function(movie) {
  return function(dispatch, getState) {
    axios
      .get(`https://www.omdbapi.com/?apikey=20dac387&i=${movie}`)
      .then(res => {
        dispatch(setSingleMovie(res.data));
      });
  };
};

export const fetchFavMovie = function(movie) {
  return function(dispatch, getState) {
    return axios
      .get(`https://www.omdbapi.com/?apikey=20dac387&t=${movie}`)
      .then(res => {
        return dispatch(setSingleMovie(res.data));
      });
  };
};
