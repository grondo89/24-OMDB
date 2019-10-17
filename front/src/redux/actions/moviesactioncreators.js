import axios from "axios";
import { SET_MOVIE } from "../constants";

const setMovie = function(film) {
  return {
    type: SET_MOVIE,
    film
  };
};

export const fetchMovies = function(movie) {
  return function(dispatch, getState) {
    return axios
      .get(`https://www.omdbapi.com/?apikey=20dac387&s=${movie}`)
      .then(res => {
        dispatch(setMovie(res.data));
      });
  };
};
